<script setup lang="ts">
import { storeToRefs } from 'pinia'
import defaultImage from '@/assets/images/image.png'
import UiButton from './UI/UiButton.vue'
import UiLoader from './UI/UiLoader.vue'
import { useDocumentsStore } from '@/stores/documents'
import useContent from '@/hooks/useContent'

const store = useDocumentsStore()
const { removeDocument } = store
const { document, isLoadingDoc: isLoading } = storeToRefs(store)
const { downloadDocument } = useContent()

const handleDownload = () => {
  if (confirm('Скачать файл?')) {
    downloadDocument({ text: document.value?.description!, name: document.value?.name })
  }
}

const handleRemove = (id: number) => {
  if (confirm('Удалить документ?')) {
    removeDocument(id)
  }
}
</script>

<template>
  <UiLoader v-if="isLoading" />
  <template v-else>
    <div v-if="!document" :class="$style.empty">
      Выберите документ, чтобы посмотреть его содержиое
    </div>
    <div :class="$style.wrapper" v-else>
      <div :class="$style.document">
        <div :class="$style.imageWrapper">
          <img
            :class="$style.image"
            :src="document.image || defaultImage"
            alt="Изображение документа"
          />
        </div>
        <div>
          <h3 class="block-title" :class="$style.title">{{ document.name }}</h3>
          <div :class="$style.buttons">
            <UiButton @click="handleDownload">Скачать</UiButton>
            <UiButton
              variant="danger"
              @click="handleRemove(document.id)"
              :disabled="!document.image"
              >Удалить</UiButton
            >
          </div>
          <h3 class="block-title" :class="$style.title">Описание:</h3>
          <p>{{ document.description }}</p>
        </div>
      </div>
    </div>
  </template>
</template>

<style module>
.wrapper {
  height: 100%;
  overflow: auto;
}

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  align-self: center;
  color: var(--secondary-color);
}

.document {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.imageWrapper {
  width: 100%;
  height: 290px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  margin-bottom: 14px;
}

.buttons {
  display: flex;
  gap: 17px;
  margin-bottom: 47px;
}

@media (min-width: 1024px) {
  .wrapper {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }

  .wrapper::-webkit-scrollbar {
    width: 0;
  }
}

@media (max-width: 1279px) {
  .document {
    gap: 20px;
  }
}

@media (max-width: 1023px) {
  .document {
    grid-template-columns: auto;
  }

  .buttons {
    margin-bottom: 20px;
  }
}

@media (max-width: 425px) {
  .imageWrapper {
    height: 200px;
  }
}
</style>

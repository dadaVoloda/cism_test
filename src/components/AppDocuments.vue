<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDocumentsStore } from '@/stores/documents'
import { useSearchStore } from '@/stores/search'
import AppDocument from './AppDocument.vue'
import UiLoader from './UI/UiLoader.vue'

const documentsStore = useDocumentsStore()
const searchStore = useSearchStore()

const { getDocuments, getDocument } = documentsStore
const { documents, isLoadingDocs: isLoading } = storeToRefs(documentsStore)
const { search } = storeToRefs(searchStore)

const selectedId = ref<number | null>(null)
const searchedDocs = computed(() =>
  search.value ? documents.value.filter((doc) => doc.id === Number(search.value)) : documents.value
)

onMounted(() => getDocuments())

const selectItem = (id: number) => {
  selectedId.value = id
  getDocument(id)
}
</script>

<template>
  <div :class="$style.documents">
    <h3 class="block-title" :class="$style.title">Результаты</h3>
    <UiLoader v-if="isLoading" :style="{ height: 'calc(100% - 40px)' }" />
    <template v-else>
      <div :class="$style.empty" v-if="!searchedDocs.length">Ничего не найдено</div>
      <ul :class="$style.list" v-else>
        <li
          v-for="document in searchedDocs"
          :class="$style.listItem"
          :key="document.id"
          @click="selectItem(document.id)"
          @keydown.space="selectItem(document.id)"
          tabindex="0"
        >
          <AppDocument :isActive="selectedId === document.id" :document="document" />
        </li>
      </ul>
    </template>
  </div>
</template>

<style module>
.documents {
  flex-grow: 1;
  margin: -10px;
  padding: 10px;
  overflow-y: auto;
}

.title {
  margin-bottom: 16px;
}

.empty {
  color: var(--secondary-color);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  list-style: none;

  height: calc(100% - 30px);
  margin: -10px;
  padding: 10px;
  margin-top: -10px;
  padding-top: 10px;
  overflow-y: auto;
}

.listItem {
  cursor: pointer;
}

@media (min-width: 1024px) {
  .list {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }

  .list::-webkit-scrollbar {
    width: 0;
  }
}

@media (max-width: 767px) {
  .list {
    height: 220px;
  }
}
</style>

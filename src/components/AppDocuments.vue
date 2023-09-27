<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDocumentStore } from '@/stores/document'
import AppDocument from './AppDocument.vue'
import UiLoader from './UI/UiLoader.vue'

const documentsStore = useDocumentStore()

const { changeSelected } = documentsStore
const { document, isLoading, selected } = storeToRefs(documentsStore)

const selectItem = () => {
  changeSelected(true)
}
</script>

<template>
  <div :class="$style.documents">
    <h3 class="block-title" :class="$style.title">Результаты</h3>
    <UiLoader v-if="isLoading" :style="{ height: 'calc(100% - 40px)' }" />
    <template v-else>
      <div :class="$style.empty" v-if="!document">Ничего не найдено</div>
      <ul :class="$style.list" v-else>
        <li :class="$style.listItem" @click="selectItem" @keydown.space="selectItem" tabindex="0">
          <AppDocument :isActive="selected" :document="document" />
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
  .documents {
    min-height: 130px;
  }
}
</style>

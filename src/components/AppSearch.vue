<script setup lang="ts">
import { useDocumentStore } from '@/stores/document'
import { useSearchStore } from '@/stores/search'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const documentsStore = useDocumentStore()
const store = useSearchStore()
const { search } = storeToRefs(store)
const { getDocument } = documentsStore

const canSubmit = ref(true)

const handleSubmit = () => {
  if (search.value && canSubmit.value) {
    canSubmit.value = false
    getDocument(search.value)
    setTimeout(() => (canSubmit.value = true), 0)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h3 class="block-title" :class="$style.title">Поиск документа</h3>
    <input
      :class="$style.input"
      type="text"
      v-model.trim="search"
      @change="handleSubmit"
      placeholder="Введите ID документа"
    />
  </form>
</template>

<style module>
.title {
  margin-bottom: 14px;
}

.input {
  width: 100%;
  padding: 15px 23px;
  background-color: var(--white-color);
  border: 1px solid var(--gray-color-200);
  border-radius: var(--br-radius-small);
}

.input::placeholder {
  color: var(--secondary-color);
}
</style>

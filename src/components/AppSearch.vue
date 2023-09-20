<script setup lang="ts">
import { useSearchStore } from '@/stores/search'
import { storeToRefs } from 'pinia'

const store = useSearchStore()
const { search } = storeToRefs(store)
</script>

<template>
  <div>
    <h3 class="block-title" :class="$style.title">Поиск документа</h3>
    <input
      :class="$style.input"
      type="text"
      v-model.trim="search"
      placeholder="Введите ID документа"
    />
  </div>
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

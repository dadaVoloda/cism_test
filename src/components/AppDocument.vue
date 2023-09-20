<script setup lang="ts">
import type { Document } from '@/types'
import defaultImage from '@/assets/images/small-image.png'

interface Props {
  document: Document
  isActive?: boolean
}

withDefaults(defineProps<Props>(), {
  isActive: false
})
</script>

<template>
  <div :class="$style.documentItem">
    <div :class="[$style.imageWrapper, !document.image && $style.bordered]">
      <img
        :class="$style.image"
        :src="document.image || defaultImage"
        alt="Изображение документа"
      />
    </div>
    <div :class="[$style.description, isActive && $style.active]">
      <h4 :class="$style.title">{{ document.name }}</h4>
      <span :class="$style.text">12 MB</span>
    </div>
  </div>
</template>

<style module>
.documentItem {
  display: flex;
  background-color: var(--white-color);
  border-radius: var(--br-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.imageWrapper {
  flex-shrink: 0;
  width: 70px;
}

.bordered {
  border-right: 1px solid var(--border-color);
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  width: 100%;
  padding: 15px;
}

.title {
  margin-bottom: 6px;
  font-weight: 600;
  line-height: 17px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text {
  line-height: 17px;
  color: var(--secondary-color);
}

.active.description {
  background-color: var(--blue-color);
}
.active .title {
  color: var(--light-color);
}
.active .text {
  color: var(--gray-color-300);
}
</style>

<script setup lang="ts">
interface Props {
  variant?: string
}
defineProps<Props>()
</script>

<template>
  <button :class="[$style.button, variant === 'danger' && $style.danger]">
    <slot></slot>
  </button>
</template>

<style module>
.button {
  padding: 6px 26px;
  color: var(--blue-color);
  background-color: transparent;
  border: 1px solid;
  border-radius: var(--br-radius-small);
  cursor: pointer;
  transition: var(--tr-time);
}

.button:disabled {
  opacity: 0.4;
  pointer-events: none;
}

.button:hover {
  color: var(--blue-hover-color);
}

.danger {
  color: var(--danger-color);
}

.danger:hover {
  color: var(--danger-hover-color);
}
</style>

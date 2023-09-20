<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSearch from '@/components/AppSearch.vue'
import AppDocuments from '@/components/AppDocuments.vue'
import AppContent from '@/components/AppContent.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <div :class="$style.wrapper">
      <div :class="$style.sidebar">
        <AppSearch />
        <AppDocuments />
      </div>
      <div :class="$style.content">
        <AppContent />
      </div>
    </div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-grow: 1;
  background: var(--app-bg-color);
  box-shadow: var(--box-shadow);
  border-radius: var(--br-radius);
  overflow: hidden;
}

.sidebar {
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 282px;
  padding: 27px 20px 0;
  margin-bottom: 27px;
  overflow: hidden;
}

.content {
  position: relative;
  display: flex;
  flex-grow: 1;
  min-height: 40vh;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}

@media (max-width: 1023px) {
  .content {
    padding: 30px 20px;
  }
}

@media (max-width: 767px) {
  .wrapper {
    display: block;
  }

  .sidebar {
    width: 100%;
    overflow: initial;
  }

  .content {
    border: none;
    border-top: 1px solid var(--border-color);
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <header :class="$style.header">
    <h1 :class="$style.mainTitle">MyApp</h1>
    <span :class="$style.login">Username</span>
  </header>
</template>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mainTitle {
  font-size: 32px;
  font-weight: 700;
}
.login {
  font-size: 16px;
}
</style>

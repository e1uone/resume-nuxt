<script setup lang="ts"></script>
<template>
  <AppHeader />
  <div
    class="app-layout w-full mx-auto px-4 py-4 sm:px-6 md:px-8 sm:max-w-2xl md:max-w-3xl"
  >
    <slot />
  </div>
</template>
<style>
.app-layout {
  margin: 0 auto;
  position: relative;
}
</style>

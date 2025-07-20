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
/*TODO:*/
/* .app-layout {
    width: 21cm;
    min-height: 29.7cm;
    margin: 0 auto;
    padding: 1.5cm;
    position: relative;
} */
</style>

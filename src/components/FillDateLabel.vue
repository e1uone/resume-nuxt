<script setup lang="ts">
const currentDate = new Date().toLocaleDateString("ru");
</script>
<template>
  <p id="fill-date-label">
    Дата заполнения:
    {{ currentDate }}
  </p>
</template>
<style></style>

<script setup lang="ts">
const currentDate = new Date().toLocaleDateString("ru");
</script>
<template>
  <p class="text-right text-[10pt]">
    Дата заполнения:
    {{ currentDate }}
  </p>
</template>

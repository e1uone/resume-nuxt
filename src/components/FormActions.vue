<script setup lang="ts">
const emit = defineEmits(["submit"]);
</script>

<template>
  <div class="flex justify-end gap-4">
    <Button type="button" @click="emit('submit')">Отправить</Button>
    <Button type="button">Очистить</Button>
  </div>
</template>

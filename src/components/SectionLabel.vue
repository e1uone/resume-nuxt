<script setup lang="ts">
interface Props {
  label: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <p class="text-lg">{{ props.label }}</p>
    <HorizontalLine />
  </div>
</template>

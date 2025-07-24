<script setup lang="ts">
const props = defineProps<{
  name: string;
  label: string;
  removable?: boolean;
}>();

const emit = defineEmits<{ (e: "remove"): void }>();

const options = Array.from({ length: 8 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 border rounded-lg p-4 hover:shadow-sm transition-colors"
  >
    <span class="flex-1 text-sm font-medium leading-snug">
      {{ props.label }}
    </span>
    <FormSelect
      :name="props.name"
      label=""
      placeholder="-"
      :options="options"
      class="w-30"
    />
    <Button
      v-if="props.removable"
      type="button"
      variant="ghost"
      size="icon"
      class="top-1 right-1 text-xs"
      @click="emit('remove')"
    >
      <IconTrash />
    </Button>
  </div>
</template>

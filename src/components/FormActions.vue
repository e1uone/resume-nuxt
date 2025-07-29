<script setup lang="ts">
import type { FormActionType } from "~/types/formActionType";

const emit = defineEmits<{
  (e: "submit", type: FormActionType): void;
}>();

const handleAction = (type: FormActionType) => {
  emit("submit", type);
};
// TODO: save to docx and print
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-end gap-4">
    <Button @click="handleAction('reset')">Очистить форму</Button>
    <Button @click="handleAction('pdf')">Сохранить в PDF</Button>
    <!-- <Button @click="handleAction('word')">Сохранить в Word</Button> -->
    <!-- <Button @click="handleAction('print')">Печать</Button> -->
  </div>
</template>

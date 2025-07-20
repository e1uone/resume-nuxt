<script setup lang="ts">
import { ref, watch } from "vue";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const model = defineModel<File | string | null>();

const fileInput = ref<HTMLInputElement | null>(null);
const previewUrl = ref<string>("");
const errorMsg = ref<string>("");
let previousObjectUrl: string | null = null;

watch(
  () => model.value,
  (newVal) => {
    if (previousObjectUrl) {
      URL.revokeObjectURL(previousObjectUrl);
      previousObjectUrl = null;
    }

    if (!newVal) {
      previewUrl.value = "";
      return;
    }

    if (typeof newVal === "string") {
      previewUrl.value = newVal;
    } else {
      previousObjectUrl = URL.createObjectURL(newVal);
      previewUrl.value = previousObjectUrl;
    }
  },
  { immediate: true },
);

const triggerSelect = () => fileInput.value?.click();

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  if (file.size > MAX_FILE_SIZE) {
    errorMsg.value = `Размер файла превышает ${Math.round(MAX_FILE_SIZE / 1024 / 1024)} МБ`;
    return;
  }

  errorMsg.value = "";
  model.value = file;
};
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="hidden"
      @change="onFileChange"
    />

    <div
      class="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer group"
      @click="triggerSelect"
    >
      <img
        v-if="previewUrl"
        :src="previewUrl"
        alt="avatar preview"
        class="w-full h-full object-cover"
      />
      <IconUser v-else class="w-full h-full" />

      <div
        class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IconCamera class="text-white w-6 h-6" />
      </div>
    </div>

    <p v-if="errorMsg" class="text-sm text-red-500">{{ errorMsg }}</p>
  </div>
</template>

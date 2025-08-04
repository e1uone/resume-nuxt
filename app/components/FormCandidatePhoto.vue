<script setup lang="ts">
import { ref, watch, computed, onBeforeUnmount } from "vue";
import { useField } from "vee-validate";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  name: string;
  label?: string;
}>();

const attrs = useAttrs();
const formItemClass = computed(() => attrs.class);

const fileInput = ref<HTMLInputElement | null>(null);
const previewUrl = ref<string>("");
let previousObjectUrl: string | null = null;

const {
  value,
  errorMessage: _errorMessage,
  handleChange,
} = useField<File | string | null>(
  () => props.name,
  {},
  {
    initialValue: null,
    validateOnMount: false,
  },
);

watch(
  () => value.value,
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
  if (!file) {
    return;
  }

  // This will trigger vee-validate validation
  handleChange(file, false); // false to not validate on change (let form submission handle it)
};

onBeforeUnmount(() => {
  if (previousObjectUrl) {
    URL.revokeObjectURL(previousObjectUrl);
  }
});
</script>

<template>
  <FormField v-slot="{ errorMessage: fieldError }" :name="name">
    <FormItem :class="formItemClass">
      <FormLabel v-if="label">{{ label }}</FormLabel>
      <FormControl>
        <div class="flex flex-col items-center gap-2">
          <input
            ref="fileInput"
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            class="hidden"
            v-bind="$attrs"
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
        </div>
      </FormControl>
      <FormMessage v-if="fieldError" class="text-center">
        {{ fieldError }}
      </FormMessage>
    </FormItem>
  </FormField>
</template>

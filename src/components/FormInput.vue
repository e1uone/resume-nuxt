<script setup lang="ts">
import type { MaskInputOptions } from "maska";

import { useField } from "vee-validate";

const props = defineProps<{
  label: string;
  placeholder?: string;
  name: string;
  mask?: string;
  useMaskedValue?: boolean;
}>();

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const formItemClass = computed(() => attrs.class);

const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const {
  handleChange,
  value: inputValue,
  handleBlur,
} = useField<string>(props.name);

const maskaOptions = reactive<MaskInputOptions>({
  mask: props.mask,
  eager: true,
});

const onMaska = (e: CustomEvent) => {
  handleChange(props.useMaskedValue ? e.detail.masked : e.detail.unmasked);
  maskedValue.value = e.detail.masked;
};

const maskedValue = ref("");

useListen("form:reset", () => {
  maskedValue.value = "";
});

onMounted(() => {
  maskedValue.value = inputValue.value;
});
</script>
<template>
  <FormItem v-auto-animate :class="formItemClass">
    <FormLabel>{{ label }}</FormLabel>
    <FormControl>
      <Input
        v-maska="maskaOptions"
        v-bind="{ ...inputAttrs }"
        type="text"
        :placeholder="placeholder"
        :model-value="maskedValue"
        @maska="onMaska"
        @blur="handleBlur($event, true)"
      />
    </FormControl>
    <FormMessage />
  </FormItem>
</template>

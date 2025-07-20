<script setup lang="ts">
defineProps<{
  label: string;
  placeholder?: string;
  name: string;
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
</script>
<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem v-auto-animate :class="formItemClass">
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <Input
          type="text"
          :placeholder="placeholder"
          v-bind="{ ...componentField, ...inputAttrs }"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

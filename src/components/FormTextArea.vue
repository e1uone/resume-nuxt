<script setup lang="ts">
defineProps<{
  label: string;
  placeholder?: string;
  name: string;
  description?: string;
}>();

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const formItemClass = computed(() => attrs.class);

const textAreaAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem v-auto-animate :class="formItemClass">
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <Textarea
          :placeholder="placeholder"
          class="resize-none"
          v-bind="{ ...componentField, ...textAreaAttrs }"
        />
      </FormControl>
      <FormDescription v-if="description">
        {{ description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

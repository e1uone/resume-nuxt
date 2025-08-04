<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  description?: string;
}>();

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const formItemClass = computed(() => attrs.class);

const radioGroupAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <FormField v-slot="{ componentField }" type="radio" :name="name">
    <FormItem :class="formItemClass" class="grid gap-2">
      <div>
        <FormLabel v-if="label">
          {{ label }}
        </FormLabel>
        <FormDescription v-if="description">
          {{ description }}
        </FormDescription>
      </div>

      <FormControl>
        <RadioGroup
          v-bind="{ ...radioGroupAttrs, ...componentField }"
          class="flex flex-col"
        >
          <FormItem
            v-for="option in options"
            :key="option.value"
            class="flex items-center gap-x-3"
          >
            <FormControl>
              <RadioGroupItem :value="option.value" />
            </FormControl>
            <FormLabel class="font-normal">{{ option.label }}</FormLabel>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

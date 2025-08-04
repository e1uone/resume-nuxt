<script setup lang="ts">
defineProps<{
  label?: string;
  placeholder?: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}>();

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const formItemClass = computed(() => attrs.class);

const selectAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>
<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem v-auto-animate :class="formItemClass">
      <FormLabel v-if="label">{{ label }}</FormLabel>

      <Select v-bind="{ ...componentField, ...selectAttrs }">
        <FormControl>
          <SelectTrigger class="w-full overflow-hidden">
            <SelectValue :placeholder="placeholder" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <FormMessage />
    </FormItem>
  </FormField>
</template>

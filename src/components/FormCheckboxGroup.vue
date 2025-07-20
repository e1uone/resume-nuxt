<script setup lang="ts">
const props = defineProps<{
  name: string;
  label: string;
  options: { value: string; label: string }[];
}>();
</script>
<template>
  <FormField :name="props.name">
    <FormItem>
      <div class="mb-4">
        <FormLabel class="text-base">{{ props.label }}</FormLabel>
        <FormDescription>
          Select the options you want to display in the sidebar.
        </FormDescription>
      </div>

      <FormField
        v-for="option in options"
        v-slot="{ value: fieldValue, handleChange }"
        :key="option.value"
        type="checkbox"
        :value="option.value"
        :unchecked-value="false"
        name="options"
      >
        <FormItem class="flex flex-row options-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              :model-value="(fieldValue ?? []).includes(option.value)"
              @update:model-value="handleChange"
            />
          </FormControl>
          <FormLabel class="font-normal">
            {{ option.label }}
          </FormLabel>
        </FormItem>
      </FormField>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

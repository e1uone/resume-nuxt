<script setup lang="ts">
defineProps<{
  name: string;
  options: { value: string; label: string }[];
  label?: string;
  description?: string;
}>();
</script>
<template>
  <FormField :name="name" type="checkbox">
    <FormItem>
      <div>
        <FormLabel v-if="label">
          {{ label }}
        </FormLabel>
        <FormDescription v-if="description">
          {{ description }}
        </FormDescription>
      </div>

      <FormField
        v-for="option in options"
        v-slot="{ value: fieldValue, handleChange }"
        :key="option.value"
        type="checkbox"
        :value="option.value"
        :unchecked-value="false"
        :name="name"
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

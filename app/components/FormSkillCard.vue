<script setup lang="ts">
import type { SkillLevel } from "~/types/skillLevel";

defineProps<{
  label: string;
  program: string;
  name: string;
}>();
</script>

<template>
  <FormField v-slot="{ value, handleChange }" :name="name">
    <FormItem v-auto-animate>
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <SkillCard
          :program="program"
          :model-value="value as SkillLevel"
          @update:model-value="handleChange"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

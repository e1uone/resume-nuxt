<script setup lang="ts">
import { computed } from "vue";
import type { SkillLevel } from "~/types/skillLevel";

defineProps<{
  program: string;
}>();

const model = defineModel<SkillLevel>();

const levelOptions = [
  { value: "1", label: "Начальный" },
  { value: "2", label: "Средний" },
  { value: "3", label: "Продвинутый" },
];

const levelColor = computed(() => {
  switch (model.value) {
    case "1":
      return "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800";
    case "2":
      return "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800";
    case "3":
      return "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800";
    default:
      return "bg-gray-50 dark:bg-input/30 border-input dark:border-input";
  }
});
</script>

<template>
  <div
    class="p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md"
    :class="levelColor"
  >
    <div class="flex flex-col">
      <Select v-model="model">
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Выберите уровень" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="option in levelOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

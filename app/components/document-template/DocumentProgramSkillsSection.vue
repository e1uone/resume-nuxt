<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import { PROGRAM_SKILLS_GENERAL_LEVEL_OPTIONS } from "~/constants/programSkillsGeneralLevelOptions";

defineProps<{
  resumeFormData: ResumeFormData;
}>();

const getSkillLevelText = (level: string) => {
  const levels: Record<string, string> = {
    "1": "Начальный",
    "2": "Средний",
    "3": "Продвинутый",
  };
  return levels[level] || "";
};

const getOptionLabel = (
  options: { value: string; label: string }[],
  value: string,
) => {
  return options.find((option) => option.value === value)?.label || "";
};
</script>

<template>
  <section class="mb-6">
    <h2
      class="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4"
    >
      Навыки работы с программами
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="[key, value] in Object.entries(resumeFormData.programSkills)"
        :key="key"
      >
        <div v-if="value && key !== 'generalLevel'" class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <span class="font-medium text-gray-800">
              {{
                key
                  .replace("Level", "")
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())
                  .replace("Wtvare", "Wtware")
                  .replace("Ic", "1C")
                  .replace("Stakhanove", "Стахановец")
                  .replace("MyWarehouse", "Мой склад")
                  .replace("Sql", "SQL")
                  .replace("Cpp", "C++")
              }}
            </span>
            <span class="text-sm text-gray-600">
              {{ getSkillLevelText(value) }}
            </span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="h-2 rounded-full"
              :class="{
                'bg-blue-400': value === '1',
                'bg-blue-500': value === '2',
                'bg-blue-600': value === '3',
              }"
              :style="{ width: `${(parseInt(value) / 3) * 100}%` }"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="resumeFormData.programSkills.generalLevel" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">Общий уровень владения ПК:</h3>
      <p class="text-gray-700">
        {{
          getOptionLabel(
            PROGRAM_SKILLS_GENERAL_LEVEL_OPTIONS,
            resumeFormData.programSkills.generalLevel,
          )
        }}
      </p>
    </div>
  </section>
</template>

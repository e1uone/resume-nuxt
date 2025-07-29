<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import { RANKING_FACTORS } from "~/constants/rankingFactors";

defineProps<{ resumeFormData: ResumeFormData }>();

const getFactorLabel = (factor: string) => {
  return (
    RANKING_FACTORS.find((f) => `ranking.${factor}` === f.name)?.labelShort ||
    factor
  );
};
</script>

<template>
  <section v-if="resumeFormData.ranking" class="mb-6">
    <h2
      class="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4"
    >
      Приоритеты
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="[key, value] in Object.entries(resumeFormData.ranking)"
        :key="key"
        :class="{ 'col-span-full': key === 'dynamic' }"
      >
        <div v-if="key !== 'dynamic' && value" class="mb-3">
          <div class="flex justify-between items-center mb-1">
            <span class="font-medium text-gray-800">
              {{ getFactorLabel(key) }}
            </span>
            <span class="text-sm font-medium text-gray-600">{{ value }}/8</span>
          </div>
          <div class="flex space-x-1">
            <span
              v-for="i in 8"
              :key="i"
              class="inline-block w-4 h-4 rounded-full"
              :class="{
                'bg-blue-500':
                  i <= (typeof value === 'string' ? parseInt(value) : 0),
                'bg-gray-200':
                  i > (typeof value === 'string' ? parseInt(value) : 0),
              }"
            />
          </div>
        </div>
        <div
          v-else-if="key === 'dynamic' && Array.isArray(value)"
          class="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div v-for="(item, index) in value" :key="index" class="mb-3">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium text-gray-800">
                {{ item.label }}
              </span>
              <span class="text-sm font-medium text-gray-600">
                {{ item.rank }}/8
              </span>
            </div>
            <div class="flex space-x-1">
              <span
                v-for="i in 8"
                :key="i"
                class="inline-block w-4 h-4 rounded-full"
                :class="{
                  'bg-blue-500': i <= (item.rank ? parseInt(item.rank) : 0),
                  'bg-gray-200': i > (item.rank ? parseInt(item.rank) : 0),
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

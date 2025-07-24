<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";

defineProps<{
  resumeFormData: ResumeFormData;
}>();
</script>

<template>
  <section class="mb-6">
    <h2
      class="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4"
    >
      Опыт работы
    </h2>
    <div
      v-for="(job, index) in resumeFormData.workExperience"
      :key="index"
      class="mb-6"
    >
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-medium text-gray-900">
            {{ job.position }}
          </h3>
          <p class="text-gray-700">{{ job.organization }}</p>
          <p class="text-sm text-gray-600">{{ job.address }}</p>
        </div>
        <span class="text-sm text-gray-600 whitespace-nowrap ml-4">
          {{ job.startDate }} - {{ job.endDate }}
        </span>
      </div>
    </div>
  </section>
</template>

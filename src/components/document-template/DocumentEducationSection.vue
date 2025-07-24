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
      Образование
    </h2>
    <div
      v-for="(edu, index) in resumeFormData.education"
      :key="index"
      class="mb-6"
    >
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-medium text-gray-900">
          {{ edu.university }}
        </h3>
        <span class="text-sm text-gray-600 whitespace-nowrap ml-4">
          {{ edu.yearOfAdmission }} - {{ edu.yearOfGraduation }}
        </span>
      </div>
      <p class="text-gray-700 italic">{{ edu.specialization }}</p>
    </div>

    <div v-if="resumeFormData.additionalEducation" class="mt-6">
      <h3 class="text-lg font-medium text-gray-800 mb-2">
        Дополнительное образование
      </h3>
      <p class="text-gray-700">{{ resumeFormData.additionalEducation }}</p>
    </div>

    <div v-if="resumeFormData.foreignLanguage" class="mt-4">
      <h3 class="text-lg font-medium text-gray-800 mb-2">Иностранные языки</h3>
      <p class="text-gray-700">{{ resumeFormData.foreignLanguage }}</p>
    </div>
  </section>
</template>

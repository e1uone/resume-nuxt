<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";

defineProps<{
  resumeFormData: ResumeFormData;
}>();
</script>

<template>
  <section class="text-center mb-6 pb-6 border-b-2 border-gray-200">
    <CompanyData class="mb-2" />
    <FillDateLabel class="mb-6" />

    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      {{ resumeFormData.candidateData.lastName }}
      {{ resumeFormData.candidateData.firstName }}
      {{ resumeFormData.candidateData.surname }}
    </h1>

    <div class="flex justify-center flex-wrap gap-4 mt-2">
      <div
        v-if="resumeFormData.candidateData.phoneNumber"
        class="flex items-center"
      >
        <span class="mr-1">📱</span>
        {{ resumeFormData.candidateData.phoneNumber }}
      </div>
      <div v-if="resumeFormData.candidateData.email" class="flex items-center">
        <span class="mr-1">✉️</span>
        {{ resumeFormData.candidateData.email }}
      </div>
    </div>
  </section>
</template>

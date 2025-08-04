<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import { formatPhoneNumber } from "~/utils/formatPhoneNumber";

const props = defineProps<{
  resumeFormData: ResumeFormData;
}>();

const candidatePhoto = computed(() => {
  if (!props.resumeFormData.candidateData.photo) {
    return null;
  }
  return URL.createObjectURL(props.resumeFormData.candidateData.photo);
});

onBeforeUnmount(() => {
  if (!candidatePhoto.value) {
    return;
  }
  URL.revokeObjectURL(candidatePhoto.value);
});
</script>

<template>
  <section class="text-center mb-6 pb-6">
    <CompanyData class="mb-2" />
    <FillDateLabel class="mb-6" />

    <img
      v-if="candidatePhoto"
      class="w-40 h-40 mx-auto rounded-full"
      :src="candidatePhoto"
      alt="Candidate photo"
    />

    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      {{ resumeFormData.candidateData.lastName }}
      {{ resumeFormData.candidateData.firstName }}
      {{ resumeFormData.candidateData.surname }}
    </h1>

    <div class="flex justify-center flex-wrap gap-4 mt-2">
      <div
        v-if="resumeFormData.candidateData.phoneNumber"
        class="flex items-center text-gray-900"
      >
        <span class="mr-1 text-gray-900">📱</span>
        {{ formatPhoneNumber(resumeFormData.candidateData.phoneNumber) }}
      </div>
      <div
        v-if="resumeFormData.candidateData.email"
        class="flex items-center text-gray-900"
      >
        <span class="mr-1">✉️</span>
        {{ resumeFormData.candidateData.email }}
      </div>
    </div>
  </section>
</template>

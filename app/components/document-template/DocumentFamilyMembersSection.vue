<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import { formatPhoneNumber } from "~/utils/formatPhoneNumber";

defineProps<{
  resumeFormData: ResumeFormData;
}>();
</script>

<template>
  <section v-if="resumeFormData.familyMembers?.length" class="mb-6">
    <h2
      class="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4"
    >
      Члены семьи
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(member, index) in resumeFormData.familyMembers"
        :key="index"
        class="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500"
      >
        <h3 class="font-medium text-gray-900">
          {{ member.relativeDegree }}
        </h3>
        <p class="text-gray-800 font-medium">{{ member.fullName }}</p>
        <div class="mt-2 space-y-1">
          <p class="text-sm text-gray-700">
            <span class="font-medium">Дата рождения:</span>
            {{ member.birthDate }}
          </p>
          <p class="text-sm text-gray-700">
            <span class="font-medium">Место работы:</span>
            {{ member.workPlace }}
          </p>
          <p v-if="member.position" class="text-sm text-gray-700">
            <span class="font-medium">Должность:</span>
            {{ member.position }}
          </p>
          <p class="text-sm text-gray-700">
            <span class="font-medium">Телефон:</span>
            {{ formatPhoneNumber(member.phoneNumber) }}
          </p>
          <p class="text-sm text-gray-700">
            <span class="font-medium">Адрес:</span>
            {{ member.address }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

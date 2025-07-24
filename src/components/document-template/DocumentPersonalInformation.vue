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
      Личные данные
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p>
          <span class="font-medium text-gray-700">Дата рождения:</span>
          {{ resumeFormData.personalData.birthDate }}
        </p>
        <p>
          <span class="font-medium text-gray-700">Место рождения:</span>
          {{ resumeFormData.personalData.birthPlace }}
        </p>
        <p>
          <span class="font-medium text-gray-700">Гражданство:</span>
          {{ resumeFormData.personalData.citizenship }}
        </p>
        <p v-if="resumeFormData.personalData.fullNameChangeReason">
          <span class="font-medium text-gray-700">Причина смены ФИО:</span>
          {{ resumeFormData.personalData.fullNameChangeReason }}
        </p>
        <p>
          <span class="font-medium text-gray-700">ИНН:</span>
          {{ resumeFormData.personalData.inn }}
        </p>
        <p>
          <span class="font-medium text-gray-700">СНИЛС:</span>
          {{ resumeFormData.personalData.snils }}
        </p>
        <p>
          <span class="font-medium text-gray-700">Воинская служба:</span>
          {{ resumeFormData.personalData.militaryService }}
        </p>
      </div>
      <div>
        <p>
          <span class="font-medium text-gray-700">Паспорт:</span>
          {{ resumeFormData.personalData.passport }}
        </p>
        <p>
          <span class="font-medium text-gray-700">Дата выдачи паспорта:</span>
          {{ resumeFormData.personalData.passportDate }}
        </p>
        <p>
          <span class="font-medium text-gray-700">Кем выдан паспорт:</span>
          {{ resumeFormData.personalData.passportFrom }}
        </p>
        <p>
          <span class="font-medium text-gray-700">Адрес регистрации:</span>
          {{ resumeFormData.personalData.registrationAddress }}
        </p>
      </div>
    </div>
  </section>
</template>

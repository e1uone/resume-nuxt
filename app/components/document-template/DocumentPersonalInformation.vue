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
          <span class="font-medium text-gray-700">Дата рождения:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.birthDate }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">Место рождения:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.birthPlace }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">Гражданство:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.citizenship }}
          </span>
        </p>
        <p v-if="resumeFormData.personalData.fullNameChangeReason">
          <span class="font-medium text-gray-700">
            Причина смены ФИО:&nbsp;
          </span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.fullNameChangeReason }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">ИНН:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.inn }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">СНИЛС:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.snils }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">Воинская служба:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.militaryService }}
          </span>
        </p>
      </div>
      <div>
        <p>
          <span class="font-medium text-gray-700">Паспорт:&nbsp;</span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.passport }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">
            Дата выдачи паспорта:&nbsp;
          </span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.passportDate }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">
            Кем выдан паспорт:&nbsp;
          </span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.passportFrom }}
          </span>
        </p>
        <p>
          <span class="font-medium text-gray-700">
            Адрес регистрации:&nbsp;
          </span>
          <span class="text-gray-900">
            {{ resumeFormData.personalData.registrationAddress }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

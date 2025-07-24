<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import {
  INDIVIDUAL_ENTREPRENEUR_OPTIONS,
  CRIMINAL_RECORD_OPTIONS,
  READY_DATE_OPTIONS,
  WORKING_STYLE_OPTIONS,
  WORKING_COLLECTIVE_OPTIONS,
  PROFESSIONAL_GROWTH_OPPORTUNITIES_OPTIONS,
} from "~/constants/generalQuestionOptions";

defineProps<{ resumeFormData: ResumeFormData }>();

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
      Дополнительная информация
    </h2>

    <div
      v-if="resumeFormData.generalQuestions.individualEntrepreneur"
      class="mb-4"
    >
      <h3 class="font-medium text-gray-800 mb-1">
        Является индивидуальным предпринимателем:
      </h3>
      <p class="text-gray-700">
        {{
          getOptionLabel(
            INDIVIDUAL_ENTREPRENEUR_OPTIONS,
            resumeFormData.generalQuestions.individualEntrepreneur,
          )
        }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.criminalRecord" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Неисполненные судебные обязательства:
      </h3>
      <p class="text-gray-700">
        {{
          getOptionLabel(
            CRIMINAL_RECORD_OPTIONS,
            resumeFormData.generalQuestions.criminalRecord,
          )
        }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.debt" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">Задолженности:</h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.debt }}
      </p>
    </div>

    <div
      v-if="resumeFormData.generalQuestions.relativesCriminalRecords"
      class="mb-4"
    >
      <h3 class="font-medium text-gray-800 mb-1">Судимости у родственников:</h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.relativesCriminalRecords }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.companyKnowledge" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Что вы знаете о нашей компании?:
      </h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.companyKnowledge }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.vacancyQuestion" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Что привлекло вас в вакансии?:
      </h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.vacancyQuestion }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.skillsQuestion" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Какие навыки вы планируете применить у нас?:
      </h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.skillsQuestion }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.readyDate" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Когда готов приступить к работе?:
      </h3>
      <p class="text-gray-700">
        {{
          getOptionLabel(
            READY_DATE_OPTIONS,
            resumeFormData.generalQuestions.readyDate,
          )
        }}
        <span v-if="resumeFormData.generalQuestions.readyDateOther">
          - {{ resumeFormData.generalQuestions.readyDateOther }}
        </span>
      </p>
    </div>

    <div
      v-if="resumeFormData.generalQuestions.workingStyle?.length"
      class="mb-4"
    >
      <h3 class="font-medium text-gray-800 mb-1">
        Предпочитаемый формат работы:
      </h3>
      <ul class="list-disc pl-5 text-gray-700">
        <li
          v-for="(style, index) in resumeFormData.generalQuestions.workingStyle"
          :key="index"
        >
          {{ getOptionLabel(WORKING_STYLE_OPTIONS, style) }}
        </li>
      </ul>
      <p
        v-if="resumeFormData.generalQuestions.workingStyleOther"
        class="text-gray-700 mt-2"
      >
        Другое: {{ resumeFormData.generalQuestions.workingStyleOther }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.workingCollective" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Какой коллектив вам комфортен?:
      </h3>
      <p class="text-gray-700">
        {{
          getOptionLabel(
            WORKING_COLLECTIVE_OPTIONS,
            resumeFormData.generalQuestions.workingCollective,
          )
        }}
        <span v-if="resumeFormData.generalQuestions.workingCollectiveOther">
          - {{ resumeFormData.generalQuestions.workingCollectiveOther }}
        </span>
      </p>
    </div>

    <div
      v-if="resumeFormData.generalQuestions.workingCollectiveQuestion"
      class="mb-4"
    >
      <h3 class="font-medium text-gray-800 mb-1">
        Как вы адаптируетесь в новом коллективе?:
      </h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.workingCollectiveQuestion }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.teamworkPreference" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Предпочитаете работать в команде или индивидуально?:
      </h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.teamworkPreference }}
      </p>
    </div>

    <div
      v-if="resumeFormData.generalQuestions.professionalGrowthOpportunities"
      class="mb-4"
    >
      <h3 class="font-medium text-gray-800 mb-1">
        Возможности профессионального роста:
      </h3>
      <ul class="list-disc pl-5 text-gray-700">
        <li
          v-for="(style, index) in resumeFormData.generalQuestions
            .professionalGrowthOpportunities"
          :key="index"
        >
          {{ getOptionLabel(PROFESSIONAL_GROWTH_OPPORTUNITIES_OPTIONS, style) }}
        </li>
      </ul>
    </div>
    <!-- todo: other opportunities -->

    <div v-if="resumeFormData.generalQuestions.workChallenge" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">Сложные рабочие ситуации:</h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.workChallenge }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.conflictResolution" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">Разрешение конфликтов:</h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.conflictResolution }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.stressManagement" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">
        Работа в стрессовых ситуациях:
      </h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.stressManagement }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.keyAchievements" class="mb-4">
      <h3 class="font-medium text-gray-800 mb-1">Ключевые достижения:</h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.keyAchievements }}
      </p>
    </div>

    <div v-if="resumeFormData.generalQuestions.positionGoals">
      <h3 class="font-medium text-gray-800 mb-1">Цели на позиции:</h3>
      <p class="text-gray-700">
        {{ resumeFormData.generalQuestions.positionGoals }}
      </p>
    </div>
  </section>
</template>

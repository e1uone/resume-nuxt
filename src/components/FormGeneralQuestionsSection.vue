<script setup lang="ts">
import { useFieldValue } from "vee-validate";
import {
  INDIVIDUAL_ENTREPRENEUR_OPTIONS,
  CRIMINAL_RECORD_OPTIONS,
  READY_DATE_OPTIONS,
  WORKING_STYLE_OPTIONS,
  WORKING_COLLECTIVE_OPTIONS,
  PROFESSIONAL_GROWTH_OPPORTUNITIES_OPTIONS,
} from "~/constants/generalQuestionOptions";

const readyDate = useFieldValue<string>("generalQuestions.readyDate");
const workingStyle = useFieldValue<string[]>("generalQuestions.workingStyle");
const workingCollective = useFieldValue<string>(
  "generalQuestions.workingCollective",
);
const professionalGrowthOpportunities = useFieldValue<string>(
  "generalQuestions.professionalGrowthOpportunities",
);
</script>

<template>
  <div class="space-y-6">
    <SectionLabel label="Общие вопросы" />

    <FormRadioButtonGroup
      label="Являетесь ли Вы индивидуальным предпринимателем?"
      name="generalQuestions.individualEntrepreneur"
      :options="INDIVIDUAL_ENTREPRENEUR_OPTIONS"
    />

    <FormRadioButtonGroup
      label="Имеете ли Вы неисполненные обязательства, наложенные судом?"
      name="generalQuestions.criminalRecord"
      :options="CRIMINAL_RECORD_OPTIONS"
    />

    <FormTextArea
      label="Имеете ли Вы задолженности по кредитам? Если да, то в каких банках?"
      placeholder="Имеете ли Вы задолженности по кредитам? Если да, то в каких банках?"
      name="generalQuestions.debt"
    />

    <FormTextArea
      label="Были ли Вы и Ваши близкие родственники судимы, когда и за что (статья УК)?"
      placeholder="Были ли Вы и Ваши близкие родственники судимы, когда и за что (статья УК)?"
      name="generalQuestions.relativesCriminalRecords"
    />

    <FormTextArea
      label="Что Вам известно о нашей компании и ее деятельности?"
      placeholder="Что Вам известно о нашей компании и ее деятельности?"
      name="generalQuestions.companyKnowledge"
    />

    <FormTextArea
      label="Чем Вас привлекла данная вакансия?"
      placeholder="Чем Вас привлекла данная вакансия?"
      name="generalQuestions.vacancyQuestion"
    />

    <FormTextArea
      label="Как Ваши навыки и опыт соответствуют требованиям позиции?"
      placeholder="Как Ваши навыки и опыт соответствуют требованиям позиции?"
      name="generalQuestions.skillsQuestion"
    />

    <FormRadioButtonGroup
      label="Когда Вы готовы приступить к работе?"
      name="generalQuestions.readyDate"
      :options="READY_DATE_OPTIONS"
    />

    <!-- TODO: transition -->
    <FormTextArea
      v-if="readyDate === '3'"
      placeholder="Другое"
      name="generalQuestions.readyDateOther"
    />

    <FormCheckboxGroup
      label="Какой стиль работы Вам ближе?"
      description="(выберите 1-2 варианта)"
      name="generalQuestions.workingStyle"
      :options="WORKING_STYLE_OPTIONS"
    />

    <!-- TODO: transition -->
    <FormTextArea
      v-if="workingStyle?.includes('6')"
      placeholder="Другое"
      name="generalQuestions.workingStyleOther"
    />

    <FormRadioButtonGroup
      label="Какой рабочий коллектив для Вас наиболее комфортен?"
      name="generalQuestions.workingCollective"
      :options="WORKING_COLLECTIVE_OPTIONS"
    />

    <!-- TODO: transition -->
    <FormTextArea
      v-if="workingCollective?.includes('4')"
      placeholder="Другое"
      name="generalQuestions.workingCollectiveOther"
    />

    <FormTextArea
      label="Как Вы обычно выстраиваете отношения с коллегами?"
      placeholder="Как Вы обычно выстраиваете отношения с коллегами?"
      name="generalQuestions.workingCollectiveQuestion"
    />

    <FormTextArea
      label="Вам комфортнее работать в команде или самостоятельно? Почему?"
      placeholder="Вам комфортнее работать в команде или самостоятельно? Почему?"
      name="generalQuestions.teamworkPreference"
    />

    <FormCheckboxGroup
      label="Какие возможности для профессионального роста важны для Вас? (выберите нужные)"
      description="(выберите нужные)"
      name="generalQuestions.professionalGrowthOpportunities"
      :options="PROFESSIONAL_GROWTH_OPPORTUNITIES_OPTIONS"
    />

    <!-- TODO: transition -->
    <FormTextArea
      v-if="professionalGrowthOpportunities?.includes('5')"
      placeholder="Другое"
      name="generalQuestions.professionalGrowthOpportunitiesOther"
    />

    <FormTextArea
      label="Опишите сложную ситуацию на работе и как Вы с ней справились."
      placeholder="Опишите сложную ситуацию на работе и как Вы с ней справились."
      name="generalQuestions.workChallenge"
    />

    <FormTextArea
      label="Как Вы действовали, когда сталкивались с конфликтом на работе?"
      placeholder="Как Вы действовали, когда сталкивались с конфликтом на работе?"
      name="generalQuestions.conflictResolution"
    />

    <FormTextArea
      label="Какие ситуации вызывают у Вас стресс? Как Вы с ними справляетесь?"
      placeholder="Какие ситуации вызывают у Вас стресс? Как Вы с ними справляетесь?"
      name="generalQuestions.stressManagement"
    />

    <FormTextArea
      label="Опишите 1-2 ключевых достижения (с цифрами и результатами)."
      placeholder="Опишите 1-2 ключевых достижения (с цифрами и результатами)."
      name="generalQuestions.keyAchievements"
    />

    <FormTextArea
      label="Какие цели Вы ставите перед собой на этой позиции?"
      placeholder="Какие цели Вы ставите перед собой на этой позиции?"
      name="generalQuestions.positionGoals"
    />
  </div>
</template>

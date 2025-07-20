<script setup lang="ts">
import {
  INDIVIDUAL_ENTREPRENEUR_OPTIONS,
  CRIMINAL_RECORD_OPTIONS,
  READY_DATE_OPTIONS,
  WORKING_STYLE_OPTIONS,
  WORKING_COLLECTIVE_OPTIONS,
  PROFESSIONAL_GROWTH_OPPORTUNITIES_OPTIONS,
} from "~/constants/generalQuestionOptions";
</script>

<template>
  <div class="space-y-6">
    <SectionLabel label="Общие вопросы" />

    <FormRadioButtonGroup
      label="Являетесь ли Вы индивидуальным предпринимателем?"
      name="individualEntrepreneur"
      :options="INDIVIDUAL_ENTREPRENEUR_OPTIONS"
    />

    <FormRadioButtonGroup
      label="Имеете ли Вы неисполненные обязательства, наложенные судом?"
      name="criminalRecord"
      :options="CRIMINAL_RECORD_OPTIONS"
    />

    <FormTextArea
      label="Имеете ли Вы задолженности по кредитам? Если да, то в каких банках?"
      placeholder="Имеете ли Вы задолженности по кредитам? Если да, то в каких банках?"
      name="debt"
    />

    <FormTextArea
      label="Были ли Вы и Ваши близкие родственники судимы, когда и за что (статья УК)?"
      placeholder="Были ли Вы и Ваши близкие родственники судимы, когда и за что (статья УК)?"
      name="relativesCriminalRecords"
    />

    <FormTextArea
      label="Что Вам известно о нашей компании и ее деятельности?"
      placeholder="Что Вам известно о нашей компании и ее деятельности?"
      name="companyKnowledge"
    />

    <FormTextArea
      label="Чем Вас привлекла данная вакансия?"
      placeholder="Чем Вас привлекла данная вакансия?"
      name="vacancyQuestion"
    />

    <FormTextArea
      label="Как Ваши навыки и опыт соответствуют требованиям позиции?"
      placeholder="Как Ваши навыки и опыт соответствуют требованиям позиции?"
      name="skillsQuestion"
    />

    <FormRadioButtonGroup
      label="Когда Вы готовы приступить к работе?"
      name="readyDate"
      :options="READY_DATE_OPTIONS"
    />

    <!-- <FormRadioButtonGroup
      label="Какой стиль работы Вам ближе? (выберите 1-2 варианта)"
      name="workingStyle"
      :options="WORKING_STYLE_OPTIONS"
    /> -->

    <FormCheckboxGroup
      label="Какой стиль работы Вам ближе? (выберите 1-2 варианта)"
      name="workingStyle"
      :options="WORKING_STYLE_OPTIONS"
    />

    <FormRadioButtonGroup
      label="Какой рабочий коллектив для Вас наиболее комфортен?"
      name="workingCollective"
      :options="WORKING_COLLECTIVE_OPTIONS"
    />

    <FormTextArea
      label="Как Вы обычно выстраиваете отношения с коллегами?"
      placeholder="Как Вы обычно выстраиваете отношения с коллегами?"
      name="workingCollectiveQuestion"
    />

    <FormTextArea
      label="Вам комфортнее работать в команде или самостоятельно? Почему?"
      placeholder="Вам комфортнее работать в команде или самостоятельно? Почему?"
      name="teamworkPreference"
    />

    <FormRadioButtonGroup
      label="Какие возможности для профессионального роста важны для Вас? (выберите нужные)"
      name="professionalGrowthOpportunities"
      :options="PROFESSIONAL_GROWTH_OPPORTUNITIES_OPTIONS"
    />

    <FormTextArea
      label="Опишите сложную ситуацию на работе и как Вы с ней справились."
      placeholder="Опишите сложную ситуацию на работе и как Вы с ней справились."
      name="workChallenge"
    />

    <FormTextArea
      label="Как Вы действовали, когда сталкивались с конфликтом на работе?"
      placeholder="Как Вы действовали, когда сталкивались с конфликтом на работе?"
      name="conflictResolution"
    />

    <FormTextArea
      label="Какие ситуации вызывают у Вас стресс? Как Вы с ними справляетесь?"
      placeholder="Какие ситуации вызывают у Вас стресс? Как Вы с ними справляетесь?"
      name="stressManagement"
    />

    <FormTextArea
      label="Опишите 1-2 ключевых достижения (с цифрами и результатами)."
      placeholder="Опишите 1-2 ключевых достижения (с цифрами и результатами)."
      name="keyAchievements"
    />

    <FormTextArea
      label="Какие цели Вы ставите перед собой на этой позиции?"
      placeholder="Какие цели Вы ставите перед собой на этой позиции?"
      name="positionGoals"
    />
  </div>
</template>

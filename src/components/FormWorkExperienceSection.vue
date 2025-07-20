<script setup lang="ts">
import { useFieldArray } from "vee-validate";

const { fields: workExperienceFields } = useFieldArray("workExperience");
</script>

<template>
  <div class="space-y-4">
    <SectionLabel
      label="Трудовая деятельность (укажите в обратном хронологическом порядке 3 последних места Вашей работы)"
    />

    <div class="grid gap-y-4 grid-cols-1">
      <FormCard
        v-for="(workExperience, index) in workExperienceFields"
        :key="workExperience.key"
        class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 items-start"
      >
        <FormInput
          label="Дата начала"
          placeholder="Дата начала"
          :name="`workExperience.${index}.startDate`"
        />
        <FormInput
          label="Дата окончания"
          placeholder="Дата окончания"
          :name="`workExperience.${index}.endDate`"
        />
        <FormInput
          label="Название организации"
          placeholder="Название организации"
          :name="`workExperience.${index}.organization`"
          class="md:col-span-2"
        />
        <FormInput
          label="Должность"
          placeholder="Должность"
          :name="`workExperience.${index}.position`"
          class="md:col-span-2"
        />
        <FormInput
          label="Адрес"
          placeholder="Адрес"
          :name="`workExperience.${index}.address`"
          class="md:col-span-2"
        />
      </FormCard>
    </div>
  </div>
</template>

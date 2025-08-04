<script setup lang="ts">
import { useFieldArray } from "vee-validate";
import { WORK_EXPERIENCE_DEFAULT } from "~/constants/workExperienceDefault";

const {
  fields: workExperienceFields,
  push: pushWorkExperienceField,
  remove: removeWorkExperienceField,
} = useFieldArray("workExperience");
</script>

<template>
  <div class="space-y-4">
    <SectionLabel label="Трудовая деятельность" />

    <div class="grid gap-y-4 grid-cols-1">
      <FormCard
        v-for="(workExperience, index) in workExperienceFields"
        :key="workExperience.key"
        class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 items-start"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          :disabled="workExperienceFields.length === 1"
          class="justify-self-end md:col-span-2"
          @click="removeWorkExperienceField(index)"
        >
          <IconTrash class="w-4 h-4" />
        </Button>
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
      </FormCard>
      <Button
        type="button"
        @click="pushWorkExperienceField(WORK_EXPERIENCE_DEFAULT)"
      >
        Добавить
      </Button>
    </div>
  </div>
</template>

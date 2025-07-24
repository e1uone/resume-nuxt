<script setup lang="ts">
import { useFieldArray } from "vee-validate";
import { EDUCATION_DEFAULT } from "~/constants/educationDefault";

const {
  fields: educationFields,
  push: pushEducationField,
  remove: removeEducationField,
} = useFieldArray("education");
</script>

<template>
  <div class="space-y-4">
    <SectionLabel label="Образование" />

    <div v-auto-animate class="grid gap-y-4 grid-cols-1">
      <FormCard
        v-for="(education, index) in educationFields"
        :key="education.key"
        class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 items-start"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          :disabled="educationFields.length === 1"
          class="justify-self-end md:col-span-2"
          @click="removeEducationField(index)"
        >
          <IconTrash class="w-4 h-4" />
        </Button>

        <FormInput
          label="Учебное заведение, факультет, форма обучения"
          placeholder="Учебное заведение, факультет, форма обучения"
          :name="`education.${index}.university`"
          class="md:col-span-2"
        />
        <FormInput
          label="Специальность, квалификация"
          placeholder="Специальность, квалификация"
          :name="`education.${index}.specialization`"
          class="md:col-span-2"
        />
        <FormInput
          label="Год поступления"
          placeholder="Год поступления"
          :name="`education.${index}.yearOfAdmission`"
        />
        <FormInput
          label="Год окончания"
          placeholder="Год окончания"
          :name="`education.${index}.yearOfGraduation`"
        />
      </FormCard>

      <Button type="button" @click="pushEducationField(EDUCATION_DEFAULT)">
        Добавить
      </Button>

      <FormTextArea
        label="Дополнительное образование:"
        placeholder="Дополнительное образование:"
        name="additionalEducation"
      />
      <FormTextArea
        label="Знание иностранных языков, степень владения (свободно, разговорный, со словарем):"
        placeholder="Знание иностранных языков, степень владения (свободно, разговорный, со словарем):"
        name="foreignLanguage"
      />
    </div>
  </div>
</template>

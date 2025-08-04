<script setup lang="ts">
import { useFieldArray } from "vee-validate";
import { FAMILY_MEMBERS_DEFAULT } from "~/constants/familyMembersDefault";

const {
  fields: familyMembersFields,
  push: pushFamilyMemberField,
  remove: removeFamilyMemberField,
} = useFieldArray("familyMembers");
</script>

<template>
  <div class="space-y-4">
    <SectionLabel
      label="Сведения о близких родственниках (муж, жена, отец, мать, братья, сестры, дети)"
    />

    <div v-auto-animate class="grid gap-y-4 grid-cols-1">
      <FormCard
        v-for="(familyMember, index) in familyMembersFields"
        :key="familyMember.key"
        class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 items-start"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          :disabled="familyMembersFields.length === 1"
          class="justify-self-end md:col-span-2"
          @click="removeFamilyMemberField(index)"
        >
          <IconTrash class="w-4 h-4" />
        </Button>

        <FormInput
          label="Степень родства"
          placeholder="Степень родства"
          :name="`familyMembers.${index}.relativeDegree`"
        />
        <FormInput
          label="ФИО"
          placeholder="ФИО"
          :name="`familyMembers.${index}.fullName`"
        />
        <FormInput
          label="Дата рождения"
          placeholder="Дата рождения"
          :name="`familyMembers.${index}.birthDate`"
          mask="##.##.####"
          use-masked-value
        />
        <FormInput
          label="Место работы"
          placeholder="Место работы"
          :name="`familyMembers.${index}.workPlace`"
        />
        <FormInput
          label="Должность"
          placeholder="Должность"
          :name="`familyMembers.${index}.position`"
        />
        <FormInput
          label="Телефон"
          placeholder="Телефон"
          :name="`familyMembers.${index}.phoneNumber`"
          mask="+7 (###) ###-##-##"
        />
        <FormInput
          label="Адрес"
          class="md:col-span-2"
          placeholder="Адрес"
          :name="`familyMembers.${index}.address`"
        />
      </FormCard>

      <Button
        type="button"
        @click="pushFamilyMemberField(FAMILY_MEMBERS_DEFAULT)"
      >
        Добавить
      </Button>
    </div>
  </div>
</template>

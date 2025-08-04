<script setup lang="ts">
const militaryServiceOptions = [
  { value: "1", label: "Проходил службу" },
  { value: "2", label: "Не служил" },
  { value: "3", label: "Офицер запаса" },
];
</script>

<template>
  <div class="space-y-4">
    <SectionLabel label="Персональные данные" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 items-start">
      <FormInput
        label="Дата рождения:"
        placeholder="Дата рождения:"
        name="personalData.birthDate"
        class="md:col-span-1"
        mask="##.##.####"
        use-masked-value
      />
      <FormInput
        label="Место рождения:"
        placeholder="Место рождения:"
        name="personalData.birthPlace"
        class="md:col-span-2"
      />
      <FormInput
        label="Гражданство (подданство). Если изменяли, то укажите, когда и по какой причине:"
        placeholder="Гражданство (подданство). Если изменяли, то укажите, когда и по какой причине:"
        name="personalData.citizenship"
        class="md:col-span-3"
      />
      <FormInput
        label="Если изменяли фамилию, имя или отчество, то укажите их, а также когда, где и по какой причине:"
        placeholder="Если изменяли фамилию, имя или отчество, то укажите их, а также когда, где и по какой причине:"
        name="personalData.fullNameChangeReason"
        class="md:col-span-3"
      />
      <FormInput
        label="Паспорт (серия, номер):"
        placeholder="Паспорт (серия, номер):"
        name="personalData.passport"
        mask="## ## ######"
      />
      <FormInput
        label="Дата выдачи:"
        placeholder="Дата выдачи:"
        name="personalData.passportDate"
        mask="##.##.####"
        use-masked-value
      />
      <FormInput
        label="Кем выдан:"
        placeholder="Кем выдан:"
        name="personalData.passportFrom"
      />
      <FormInput
        label="ИНН:"
        placeholder="ИНН:"
        name="personalData.inn"
        mask="############"
        class="md:col-span-2"
      />
      <FormInput
        label="СНИЛС:"
        placeholder="СНИЛС:"
        name="personalData.snils"
        class="md:col-span-1"
        mask="### ### ### ##"
      />
      <FormSelect
        label="Отношение к воинской обязанности и воинское звание:"
        placeholder="Отношение к воинской обязанности и воинское звание:"
        name="personalData.militaryService"
        class="md:col-span-3"
        :options="militaryServiceOptions"
      />
      <FormTextArea
        label="Адрес регистрации:"
        placeholder="Адрес регистрации:"
        name="personalData.registrationAddress"
        class="md:col-span-3"
      />
      <FormTextArea
        label="Адрес фактического проживания:"
        placeholder="Адрес фактического проживания:"
        name="personalData.factAddress"
        class="md:col-span-3"
      />
    </div>
  </div>
</template>

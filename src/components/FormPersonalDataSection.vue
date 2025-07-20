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
        name="birthDate"
        class="md:col-span-1"
      />
      <FormInput
        label="Место рождения:"
        placeholder="Место рождения:"
        name="birthPlace"
        class="md:col-span-2"
      />
      <FormInput
        label="Гражданство (подданство). Если изменяли, то укажите, когда и по какой причине:"
        placeholder="Гражданство (подданство). Если изменяли, то укажите, когда и по какой причине:"
        name="citizenship"
        class="md:col-span-3"
      />
      <FormInput
        label="Если изменяли фамилию, имя или отчество, то укажите их, а также когда, где и по какой причине:"
        placeholder="Если изменяли фамилию, имя или отчество, то укажите их, а также когда, где и по какой причине:"
        name="fullNameChangeReason"
        class="md:col-span-3"
      />
      <FormInput
        label="Паспорт (серия, номер):"
        placeholder="Паспорт (серия, номер):"
        name="passport"
      />
      <FormInput
        label="Дата выдачи:"
        placeholder="Дата выдачи:"
        name="passportDate"
      />
      <FormInput
        label="Кем выдан:"
        placeholder="Кем выдан:"
        name="passportFrom"
      />
      <FormInput
        label="ИНН:"
        placeholder="ИНН:"
        name="inn"
        class="md:col-span-2"
      />
      <FormInput
        label="СНИЛС:"
        placeholder="СНИЛС:"
        name="snils"
        class="md:col-span-1"
      />
      <FormSelect
        label="Отношение к воинской обязанности и воинское звание:"
        placeholder="Отношение к воинской обязанности и воинское звание:"
        name="militaryService"
        class="md:col-span-3"
        :options="militaryServiceOptions"
      />
      <FormTextArea
        label="Адрес регистрации:"
        placeholder="Адрес регистрации:"
        name="registrationAddress"
        class="md:col-span-3"
      />
      <FormTextArea
        label="Адрес фактического проживания:"
        placeholder="Адрес фактического проживания:"
        name="factAddress"
        class="md:col-span-3"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 items-start">
    <FormInput
      label="Фамилия"
      placeholder="Фамилия"
      name="candidateData.lastName"
    />
    <FormInput label="Имя" placeholder="Имя" name="candidateData.firstName" />
    <FormInput
      label="Отчество"
      placeholder="Отчество"
      name="candidateData.surname"
    />
    <FormInput
      label="Кандидат на должность"
      placeholder="Кандидат на должность"
      name="candidateData.candidate"
      class="md:col-span-3"
    />
    <FormInput
      label="Номер телефона"
      placeholder="Номер телефона"
      name="candidateData.phoneNumber"
      class="md:col-span-1"
    />
    <FormInput
      label="Адрес электронной почты"
      placeholder="Адрес электронной почты"
      name="candidateData.email"
      class="md:col-span-2"
    />
  </div>
</template>

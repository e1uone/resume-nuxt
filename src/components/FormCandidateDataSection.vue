<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 items-start">
    <FormInput label="Фамилия" placeholder="Фамилия" name="lastName" />
    <FormInput label="Имя" placeholder="Имя" name="firstName" />
    <FormInput label="Отчество" placeholder="Отчество" name="surname" />
    <FormInput
      label="Кандидат на должность"
      placeholder="Кандидат на должность"
      name="candidate"
      class="md:col-span-3"
    />
    <FormInput
      label="Номер телефона"
      placeholder="Номер телефона"
      name="phoneNumber"
      class="md:col-span-1"
    />
    <FormInput
      label="Адрес электронной почты"
      placeholder="Адрес электронной почты"
      name="email"
      class="md:col-span-2"
    />
  </div>
</template>

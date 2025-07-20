<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

import { toast } from "vue-sonner";
import { FAMILY_MEMBERS_DEFAULT } from "~/constants/familyMembersDefault";

const formSchema = toTypedSchema(
  z.object({
    lastName: z.string().min(2).max(50),
    firstName: z.string().min(2).max(50),
    surname: z.string().min(2).max(50),
    candidate: z.string().min(2).max(50),
    phoneNumber: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    birthDate: z.string().min(2).max(50),
    birthPlace: z.string().min(2).max(50),
    citizenship: z.string().min(2).max(50),
    fullNameChangeReason: z.string().min(2).max(50),
    passport: z.string().min(2).max(50),
    passportDate: z.string().min(2).max(50),
    passportFrom: z.string().min(2).max(50),
    inn: z.string().min(2).max(50),
    snils: z.string().min(2).max(50),
    militaryService: z.string().min(1).max(50),

    registrationAddress: z.string().min(2).max(50),
    factAddress: z.string().min(2).max(50),
    education: z.array(
      z.object({
        yearOfAdmission: z.string().min(2).max(50),
        yearOfGraduation: z.string().min(2).max(50),
        university: z.string().min(2).max(50),
        specialization: z.string().min(2).max(50),
      }),
    ),
    additionalEducation: z.string().min(2).max(50),
    foreignLanguage: z.string().min(2).max(50),
    workExperience: z.array(
      z.object({
        startDate: z.string().min(2).max(50),
        endDate: z.string().min(2).max(50),
        organization: z.string().min(2).max(50),
        position: z.string().min(2).max(50),
        address: z.string().min(2).max(50),
      }),
    ),
    familyMembers: z.array(
      z.object({
        relativeDegree: z.string().min(2).max(50),
        fullName: z.string().min(2).max(50),
        birthDate: z.string().min(2).max(50),
        workPlace: z.string().min(2).max(50),
        position: z.string().min(2).max(50),
        phoneNumber: z.string().min(2).max(50),
        address: z.string().min(2).max(50),
      }),
    ),
    programSkills: z.object({
      wordLevel: z.string().optional(),
      excelLevel: z.string().optional(),
      powerpointLevel: z.string().optional(),
      googleSheetsLevel: z.string().optional(),
      adobeLevel: z.string().optional(),
      windowsLevel: z.string().optional(),
      bitrixLevel: z.string().optional(),
      consultantLevel: z.string().optional(),
      garantLevel: z.string().optional(),
      cryptoProLevel: z.string().optional(),
      wtvareLevel: z.string().optional(),
      icLevel: z.string().optional(),
      stakhanoveLevel: z.string().optional(),
      myWarehouseLevel: z.string().optional(),
      sqlLevel: z.string().optional(),
      cppLevel: z.string().optional(),
      generalLevel: z.string().optional(),
    }),
    workingStyle: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
  }),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    education: [
      {
        yearOfAdmission: "",
        yearOfGraduation: "",
        university: "",
        specialization: "",
      },
    ],
    workExperience: [
      {
        startDate: "",
        endDate: "",
        organization: "",
        position: "",
        address: "",
      },
      {
        startDate: "",
        endDate: "",
        organization: "",
        position: "",
        address: "",
      },
      {
        startDate: "",
        endDate: "",
        organization: "",
        position: "",
        address: "",
      },
    ],
    familyMembers: [FAMILY_MEMBERS_DEFAULT],
  },
});

const onSubmit = handleSubmit(
  (values) => {
    console.log(values);
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  },
  (values) => {
    console.log(values);
    toast("Error()", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  },
);
</script>

<template>
  <form class="space-y-6 py-4" @submit="onSubmit">
    <p class="text-2xl text-center">Анкета Кандидата</p>
    <FormCandidatePhoto />
    <FormCandidateDataSection />
    <FormPersonalDataSection />
    <FormEducationSection />
    <FormWorkExperienceSection />
    <FormFamilyMembersSection />
    <FormGeneralQuestionsSection />
    <FormProgramSkillsSection />
    <FormRankingSection />

    <Button type="submit">Submit</Button>
  </form>
</template>

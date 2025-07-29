<script setup lang="ts">
import type { FormActionType } from "~/types/formActionType";
import type FormActions from "~/components/FormActions.vue";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { ref, useTemplateRef } from "vue";
import DocumentTemplate from "~/components/document-template/DocumentTemplate.vue";
import { toast } from "vue-sonner";
import { DEBUG_INITIAL_VALUES } from "~/constants/debugInitialValues";
import { RESUME_FORM_INITIAL_VALUES } from "~/constants/resumeFormInitialValues";
import { RESUME_FORM_SCHEMA } from "~/constants/resumeFormSchema";

const config = useRuntimeConfig();
const isDevMode = config.app.buildId === "dev";
const debugMode = ref<boolean>(localStorage.getItem("debugMode") === "true");

const documentTemplateRef = useTemplateRef<typeof DocumentTemplate>(
  "documentTemplateRef",
);

const formActionsRef = useTemplateRef<typeof FormActions>("formActionsRef");

const formSchema = toTypedSchema(RESUME_FORM_SCHEMA);

const formAction = ref<FormActionType>();

const { resetForm, handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: debugMode.value
    ? DEBUG_INITIAL_VALUES
    : RESUME_FORM_INITIAL_VALUES,
});

const handleFormSubmit = handleSubmit(
  (values) => {
    toast("Успешно!", {
      description: "Документ подготавливается...",
    });

    if (formAction.value === "pdf") {
      documentTemplateRef.value?.saveToPdf(values);
    }

    // if (formAction.value === "word") {
    //   documentTemplateRef.value?.saveDocx(values);
    // }

    // if (formAction.value === "print") {
    //   documentTemplateRef.value?.print(values);
    // }
  },
  () => {
    toast("Ошибка!", {
      description:
        "Пожалуйста, заполните все обязательные поля и проверьте их правильность",
    });
  },
);

const handleFormAction = (action: FormActionType) => {
  if (action === "reset") {
    resetForm();
  } else {
    formAction.value = action;
    handleFormSubmit();
  }
};

const toggleDebugMode = () => {
  localStorage.setItem("debugMode", debugMode.value ? "false" : "true");
  window.location.reload();
};

onMounted(() => {
  if (debugMode.value === true) {
    formActionsRef.value?.$el.scrollIntoView({
      block: "center",
    });
  }
});
</script>

<template>
  <form class="space-y-6 py-4" @submit.prevent>
    <p class="text-2xl text-center">Анкета Кандидата</p>
    <FormCandidatePhoto name="candidateData.photo" />
    <FormCandidateDataSection />
    <FormPersonalDataSection />
    <FormEducationSection />
    <FormWorkExperienceSection />
    <FormFamilyMembersSection />
    <FormGeneralQuestionsSection />
    <FormProgramSkillsSection />
    <FormRankingSection />
    <FormActions ref="formActionsRef" @submit="handleFormAction" />
    <Button v-if="isDevMode" @click="toggleDebugMode">
      Debug Mode: {{ debugMode }}
    </Button>
  </form>
  <DocumentTemplate ref="documentTemplateRef" />
</template>

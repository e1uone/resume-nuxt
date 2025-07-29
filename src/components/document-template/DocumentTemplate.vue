<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import DocumentHeaderSection from "~/components/document-template/DocumentHeaderSection.vue";
import DocumentPersonalInformation from "~/components/document-template/DocumentPersonalInformation.vue";
import DocumentEducationSection from "~/components/document-template/DocumentEducationSection.vue";
import DocumentWorkExperienceSection from "~/components/document-template/DocumentWorkExperienceSection.vue";
import DocumentFamilyMembersSection from "~/components/document-template/DocumentFamilyMembersSection.vue";
import DocumentGeneralInformationSection from "~/components/document-template/DocumentGeneralInformationSection.vue";
import html2pdf from "html2pdf.js";
import { HTML2CANVAS_SUPPORTED_PROPERTIES } from "~/constants/html2canvasSupportedProperties";

const resumeFormData = ref<ResumeFormData>();
const resumeTemplateRef = useTemplateRef<HTMLDivElement>("resumeTemplateRef");

const saveToPdf = async (data: ResumeFormData): Promise<void> => {
  resumeFormData.value = data;

  await nextTick();

  const element = resumeTemplateRef.value;

  if (!element) {
    console.error("Element not found");
    return;
  }

  // Convert computed styles to inline styles to fix tailwind issue
  computedStyleToInlineStyle(element, {
    recursive: true,
    properties: HTML2CANVAS_SUPPORTED_PROPERTIES,
    // prettier-ignore
    excludeProperties: [
          'width', 'height',
          'max-width', 'min-width',
          // 'display',
          // 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
          // 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
          // 'box-sizing',
          // 'position', 'right', 'left', 'top', 'bottom'
    ],
  });

  const clonedElement = element.cloneNode(true) as HTMLDivElement;
  clonedElement.style.display = "block";

  // A4 size is 210mm x 297mm
  const options = {
    margin: 20,
    pagebreak: {
      mode: ["avoid-all", "css"],
    },
    filename: "test.pdf",
    image: { type: "jpeg", quality: 0.5 },
    html2canvas: {
      scale: 2,
      logging: false,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      compress: true, // why is this not working as expected :?
    },
  };

  await html2pdf().set(options).from(clonedElement).save();

  clonedElement.remove();
};

const print = (data: ResumeFormData) => {
  resumeFormData.value = data;

  // TODO: print
  nextTick(() => {
    // window.print();
  });
};

const saveDocx = (data: ResumeFormData) => {
  resumeFormData.value = data;

  // TODO: save to docx
};

defineExpose({ saveToPdf, print, saveDocx });
</script>

<template>
  <div
    ref="resumeTemplateRef"
    class="resume-template hidden w-[210mm] max-w-[100%] min-h-[297mm] mx-auto bg-white shadow-lg"
  >
    <template v-if="resumeFormData">
      <DocumentHeaderSection :resume-form-data="resumeFormData" />
      <DocumentPersonalInformation :resume-form-data="resumeFormData" />
      <DocumentEducationSection :resume-form-data="resumeFormData" />
      <DocumentWorkExperienceSection :resume-form-data="resumeFormData" />
      <DocumentFamilyMembersSection :resume-form-data="resumeFormData" />
      <DocumentGeneralInformationSection :resume-form-data="resumeFormData" />
      <DocumentProgramSkillsSection :resume-form-data="resumeFormData" />
      <DocumentRankingSection :resume-form-data="resumeFormData" />

      <div class="flex justify-between">
        <DocumentSignatureField />
        <DocumentSignatureField />
      </div>
    </template>
  </div>
</template>

<style scoped>
.resume-template {
  font-family: "Times New Roman", Times, serif;

  :deep(ul li) {
    list-style-type: none;
  }
  :deep(ul li:before) {
    content: "• ";
    margin-left: -1em;
  }

  :deep(ol li) {
    list-style-type: none;
  }

  :deep(ol li:before) {
    content: "- ";
    margin-left: -1em;
  }
}
</style>

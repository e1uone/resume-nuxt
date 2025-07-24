<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import DocumentHeaderSection from "~/components/document-template/DocumentHeaderSection.vue";
import DocumentPersonalInformation from "~/components/document-template/DocumentPersonalInformation.vue";
import DocumentEducationSection from "~/components/document-template/DocumentEducationSection.vue";
import DocumentWorkExperienceSection from "~/components/document-template/DocumentWorkExperienceSection.vue";
import DocumentFamilyMembersSection from "~/components/document-template/DocumentFamilyMembersSection.vue";
import DocumentGeneralInformationSection from "~/components/document-template/DocumentGeneralInformationSection.vue";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

const jsPdfOptions = {
  unit: "mm" as const,
  orientation: "portrait" as const,
  format: "a4",
};

const resumeFormData = ref<ResumeFormData>();

const saveToPdf = async (data: ResumeFormData) => {
  try {
    resumeFormData.value = data;

    // Wait for the next tick to ensure DOM is updated
    await nextTick();

    // Add a small delay to ensure all assets are loaded
    await new Promise((resolve) => setTimeout(resolve, 500));

    const element = document.getElementById("resume-template");
    if (!element) {
      console.error("Element not found");
      return;
    }

    const pdfDoc = new jsPDF(jsPdfOptions);
    const pageWidth = pdfDoc.internal.pageSize.getWidth();
    const pageHeight = pdfDoc.internal.pageSize.getHeight();
    const margin = 10; // 10mm margin
    const contentWidth = pageWidth - 2 * margin;

    // Get all section elements
    const sections = Array.from(element.querySelectorAll(".resume-section"));

    // Create a temporary container for rendering
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "absolute";
    tempContainer.style.left = "-9999px";
    tempContainer.style.top = "0";
    tempContainer.style.width = `${contentWidth}mm`;
    tempContainer.style.background = "white";
    tempContainer.style.padding = "20px";
    tempContainer.style.boxSizing = "border-box";
    document.body.appendChild(tempContainer);

    let currentY = margin;
    let currentPage = 0;

    const addNewPage = () => {
      if (currentPage > 0) {
        pdfDoc.addPage();
      }
      currentY = margin;
      currentPage++;
    };

    // Add first page
    addNewPage();

    // Process each section
    for (const section of sections) {
      if (!section.textContent?.trim()) continue;

      // Clone the section and append to temp container
      const sectionClone = section.cloneNode(true) as HTMLElement;
      tempContainer.innerHTML = "";

      // Function to copy only the necessary computed styles
      const copyComputedStyles = (source: HTMLElement, target: HTMLElement) => {
        // Only copy specific style properties that we need
        const styleProps = [
          "color",
          "background-color",
          "font-size",
          "font-family",
          "font-weight",
          "line-height",
          "text-align",
          "padding",
          "margin",
          "border",
          "border-radius",
          "width",
          "height",
          "display",
          "flex-direction",
          "justify-content",
          "align-items",
          "gap",
          "flex-wrap",
          "flex",
          "flex-grow",
          "flex-shrink",
          "border-bottom",
          "border-top",
          "border-left",
          "border-right",
          "border-color",
          "border-width",
          "border-style",
        ];

        const computedStyle = window.getComputedStyle(source);

        // Apply only the styles we care about
        styleProps.forEach((prop) => {
          const value = computedStyle.getPropertyValue(prop);
          if (value) {
            target.style.setProperty(
              prop,
              value,
              computedStyle.getPropertyPriority(prop),
            );
          }
        });

        // Process child elements
        for (let i = 0; i < source.children.length; i++) {
          const sourceChild = source.children[i];
          const targetChild = target.children[i];
          if (
            sourceChild &&
            targetChild &&
            sourceChild instanceof HTMLElement &&
            targetChild instanceof HTMLElement
          ) {
            copyComputedStyles(sourceChild, targetChild);
          }
        }
      };

      // Add the clone to the document to compute styles
      const tempStyleContainer = document.createElement("div");
      tempStyleContainer.style.visibility = "hidden";
      tempStyleContainer.style.position = "absolute";
      document.body.appendChild(tempStyleContainer);
      tempStyleContainer.appendChild(sectionClone);

      // Force layout calculation
      void sectionClone.offsetHeight;

      // Copy the computed styles with proper type assertion
      copyComputedStyles(section as HTMLElement, sectionClone);

      // Clean up
      document.body.removeChild(tempStyleContainer);

      // Reset any problematic styles that might hide the content
      sectionClone.style.visibility = "";
      sectionClone.style.position = "";
      sectionClone.style.top = "";

      // Add to temp container
      tempContainer.appendChild(sectionClone);

      // Add a small delay to ensure rendering
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Add a small delay to ensure all styles are applied
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Render section to canvas with minimal processing
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true,
        width: contentWidth * 3.78,
        windowWidth: 1200,
        scrollX: 0,
        scrollY: 0,
        // Disable html2canvas's built-in style processing
        ignoreElements: () => false,
        backgroundColor: null,
        removeContainer: true,
        foreignObjectRendering: false,
        onclone: (clonedDoc) => {
          // Force layout calculation
          const offset = clonedDoc.body.offsetHeight;
          return offset;
        },
      });

      // Calculate dimensions
      const imgData = canvas.toDataURL("image/png");
      const imgHeight = (canvas.height * contentWidth) / canvas.width;

      // Check if we need a new page for this section
      if (currentY + imgHeight > pageHeight - margin) {
        addNewPage();
      }

      // Add section to PDF
      pdfDoc.addImage(
        imgData,
        "PNG",
        margin,
        currentY,
        contentWidth,
        imgHeight,
        undefined,
        "FAST",
      );

      // Update current Y position
      currentY += imgHeight + 10; // Add some space between sections

      // Add page break if we're close to the bottom
      if (currentY > pageHeight - 20) {
        addNewPage();
      }
    }

    // Clean up
    document.body.removeChild(tempContainer);

    // Save the PDF
    pdfDoc.save("resume.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

const print = (data: ResumeFormData) => {
  resumeFormData.value = data;

  // TODO: print
  nextTick(() => {
    window.print();
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
    id="resume-template"
    class="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg p-[25mm] box-border"
  >
    <div v-if="resumeFormData" class="max-w-[160mm] mx-auto">
      <!-- Header Section -->
      <div class="resume-section">
        <DocumentHeaderSection :resume-form-data="resumeFormData" />
      </div>
      <!-- Personal Information -->
      <div class="resume-section">
        <DocumentPersonalInformation :resume-form-data="resumeFormData" />
      </div>

      <!-- Education Section -->
      <div class="resume-section">
        <DocumentEducationSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Work Experience Section -->
      <div class="resume-section">
        <DocumentWorkExperienceSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Family Members Section -->
      <div class="resume-section">
        <DocumentFamilyMembersSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Additional Information Section -->
      <div class="resume-section">
        <DocumentGeneralInformationSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Program Skills Section -->
      <div class="resume-section">
        <DocumentProgramSkillsSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Ranking Section -->
      <div class="resume-section">
        <DocumentRankingSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Signature Field -->
      <div class="flex justify-between">
        <DocumentSignatureField />
        <DocumentSignatureField />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Only keep print-specific styles here */
@page {
  size: A4;
  margin: 0;
}

@media print {
  .resume-container {
    box-shadow: none;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
}
</style>

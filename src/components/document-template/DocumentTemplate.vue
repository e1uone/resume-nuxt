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

// jsPDF options are now defined inline where used

const resumeFormData = ref<ResumeFormData>();

// Type for html2canvas options
type Html2CanvasOptions = {
  scale: number;
  useCORS: boolean;
  allowTaint: boolean;
  width: number;
  windowWidth: number;
  scrollX: number;
  scrollY: number;
  backgroundColor: string | null;
  removeContainer: boolean;
  foreignObjectRendering: boolean;
  logging: boolean;
  onclone?: (document: Document, element: HTMLElement) => void;
};

// Function to copy computed styles from source to target element
const copyComputedStyles = (source: HTMLElement, target: HTMLElement) => {
  // List of style properties to copy
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
    "background",
    "box-shadow",
    "text-decoration",
    "text-transform",
    "white-space",
    "word-break",
    "overflow",
    "position",
    "top",
    "left",
    "right",
    "bottom",
    "z-index",
    "opacity",
    "visibility",
    "box-sizing",
    "grid-template-columns",
    "grid-template-rows",
    "grid-column",
    "grid-row",
    "grid-area",
    "gap",
    "row-gap",
    "column-gap",
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

// Helper function to get element's height in mm
const getElementHeight = (element: HTMLElement, width: number) => {
  const clone = element.cloneNode(true) as HTMLElement;

  // Create a container to properly measure the element
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.visibility = "hidden";
  container.style.width = `${width}mm`;
  container.style.pointerEvents = "none";
  container.style.contain = "layout style paint";

  // Add the clone to the container
  container.appendChild(clone);
  document.body.appendChild(container);

  // Copy computed styles to ensure Tailwind classes are applied
  copyComputedStyles(element, clone);

  // Force layout calculation
  const height = clone.offsetHeight;

  // Clean up
  document.body.removeChild(container);

  // Convert pixels to mm (1mm ≈ 3.78px at 96dpi)
  return height / 3.78;
};

// Function to split content that would overflow the page
const splitContent = async (
  element: HTMLElement,
  maxHeight: number,
  contentWidth: number,
  _pageHeight: number, // Unused parameter
  _margin: number, // Unused parameter
) => {
  const sections: HTMLElement[] = [];
  let currentSection: HTMLElement | null = null;
  let currentHeight = 0;

  // Process each child element
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i] as HTMLElement;
    if (!child.textContent?.trim()) continue;

    const childHeight = getElementHeight(child, contentWidth);

    // If this is the first element or adding this child would exceed the page
    if (!currentSection || currentHeight + childHeight > maxHeight) {
      // If we have a current section, push it to sections
      if (currentSection) {
        sections.push(currentSection);
      }

      // Create a new section with proper styling
      currentSection = document.createElement("div");
      currentSection.className = "resume-section";
      currentSection.style.width = `${contentWidth}mm`;
      currentSection.style.margin = "0";
      currentSection.style.padding = "0";
      currentSection.style.boxSizing = "border-box";
      currentHeight = 0;
    }

    // Clone the child and copy its styles
    const childClone = child.cloneNode(true) as HTMLElement;
    copyComputedStyles(child, childClone);

    // Add the cloned child to the current section
    currentSection.appendChild(childClone);
    currentHeight += childHeight;
  }

  // Add the last section if it's not empty
  if (currentSection && currentSection.children.length > 0) {
    sections.push(currentSection);
  }

  return sections;
};

const saveToPdf = async (data: ResumeFormData): Promise<void> => {
  try {
    resumeFormData.value = data;
    await nextTick();

    const element = document.getElementById("resume-template");
    if (!element) {
      console.error("Element not found");
      return;
    }

    // Set up PDF document with A4 dimensions (210mm x 297mm)
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const _pageWidth = pdfDoc.internal.pageSize.getWidth(); // 210mm
    const pageHeight = pdfDoc.internal.pageSize.getHeight(); // 297mm
    const margin = 15; // 15mm margins
    const contentWidth = 180; // Fixed width to ensure consistent rendering
    const maxContentHeight = pageHeight - 2 * margin;

    // Create a temporary container for rendering
    const tempContainer = document.createElement("div");
    Object.assign(tempContainer.style, {
      position: "absolute",
      left: "-9999px",
      top: "0",
      width: `${contentWidth}mm`,
      background: "white",
      padding: "20px",
      boxSizing: "border-box",
    });
    document.body.appendChild(tempContainer);

    let currentY = margin;
    let currentPage = 0;

    const addNewPage = (): void => {
      if (currentPage > 0) {
        pdfDoc.addPage();
      } else {
        currentPage = 1;
      }
      currentY = margin;
    };

    // Add first page
    addNewPage();

    // Process each section
    const sections = Array.from(
      element.querySelectorAll<HTMLElement>(".resume-section"),
    );
    for (const section of sections) {
      if (!section.textContent?.trim()) continue;

      // Clone the section for processing
      const sectionClone = section.cloneNode(true) as HTMLElement;

      // Split the section into parts that fit on a single page
      const sectionParts = await splitContent(
        sectionClone,
        maxContentHeight,
        contentWidth,
        pageHeight,
        margin,
      );

      // Process each part of the section
      for (const part of sectionParts) {
        tempContainer.innerHTML = "";

        // Create a wrapper to ensure proper styling
        const wrapper = document.createElement("div");
        Object.assign(wrapper.style, {
          width: `${contentWidth}mm`,
          boxSizing: "border-box",
        });

        wrapper.appendChild(part);
        tempContainer.appendChild(wrapper);

        // Ensure all styles are applied
        copyComputedStyles(part, wrapper);

        // Add a small delay to ensure rendering
        await new Promise<void>((resolve) => setTimeout(resolve, 50));

        // Make the container visible temporarily for rendering
        tempContainer.style.visibility = "visible";
        tempContainer.style.opacity = "1";
        tempContainer.style.position = "absolute";
        tempContainer.style.left = "0";
        tempContainer.style.top = "0";
        tempContainer.style.width = `${contentWidth}mm`;
        tempContainer.style.background = "#ffffff";
        tempContainer.style.zIndex = "9999";

        // Calculate dimensions for better quality rendering
        const targetDpi = 300; // Target DPI for better quality
        const scale = targetDpi / 96; // Scale factor based on standard 96dpi

        // Calculate pixel dimensions
        const mmToPx = 3.78; // Conversion factor from mm to pixels at 96dpi
        const _pixelWidth = contentWidth * mmToPx * (targetDpi / 96); // Keep for future use

        // Set container width to match content width
        tempContainer.style.width = `${contentWidth}mm`;
        tempContainer.style.maxWidth = `${contentWidth}mm`;
        tempContainer.style.overflow = "hidden"; // Prevent any content from overflowing

        // Render to canvas with optimized settings
        const options: Html2CanvasOptions = {
          scale: scale, // Use calculated scale for better quality
          useCORS: true,
          allowTaint: true,
          width: contentWidth * mmToPx, // Base width at 96dpi
          windowWidth: 1200,
          scrollX: 0,
          scrollY: 0,
          backgroundColor: "#FFFFFF",
          removeContainer: false,
          foreignObjectRendering: true, // Better for text rendering
          logging: true, // Keep logging for debugging
          // Remove unsupported options that might cause issues
          // dpi and letterRendering are not standard html2canvas options
          // and can be handled through CSS instead
          onclone: (clonedDoc: Document, element: HTMLElement) => {
            // Apply styles to ensure proper rendering
            const elements = element.querySelectorAll("*");
            elements.forEach((el) => {
              if (el instanceof HTMLElement) {
                // Skip hidden elements
                const style = window.getComputedStyle(el);
                // Type-safe check for hidden property
                const isHidden =
                  "hidden" in el && typeof el.hidden === "boolean"
                    ? el.hidden
                    : false;

                if (
                  style.display === "none" ||
                  style.visibility === "hidden" ||
                  style.opacity === "0" ||
                  isHidden
                ) {
                  return;
                }

                // Copy computed styles
                copyComputedStyles(el, el);

                // Ensure visibility and proper rendering
                el.style.visibility = "visible";
                el.style.opacity = "1";
                el.style.boxSizing = "border-box";

                // Force repaint for better rendering
                void el.offsetHeight;
              }
            });

            // Add print-specific styles
            const style = document.createElement("style");
            style.textContent = `
              @media print {
                * {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                  color-adjust: exact !important;
                }
              }
              body, html {
                width: ${contentWidth}mm !important;
                min-height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                background: white !important;
              }
              * {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
            `;
            clonedDoc.head.appendChild(style);
          },
        };

        // Render to canvas
        const canvas = await html2canvas(tempContainer, options);

        // Verify canvas has content
        if (!canvas || canvas.width === 0 || canvas.height === 0) {
          throw new Error("Canvas rendered with zero dimensions");
        }

        // Calculate dimensions maintaining aspect ratio
        const imgData = canvas.toDataURL("image/png", 1.0);

        // Calculate height to maintain aspect ratio with content width
        const aspectRatio = canvas.height / canvas.width;
        const finalHeight = contentWidth * aspectRatio;

        // Ensure minimum height
        const minHeight = 10; // 10mm minimum height
        const finalHeightWithMin = Math.max(finalHeight, minHeight);

        // Add new page if needed, ensuring we don't exceed page height
        if (currentY + finalHeightWithMin > pageHeight - margin) {
          addNewPage();
        }

        // Add image to PDF with proper dimensions and settings
        // Add image to PDF with exact dimensions
        pdfDoc.addImage(
          imgData,
          "PNG",
          margin,
          currentY,
          contentWidth,
          finalHeightWithMin,
          undefined,
          "FAST",
        );

        // Update current Y position with small gap
        currentY += finalHeightWithMin + 5; // 5mm gap between sections

        // Add new page if we're close to the bottom
        if (currentY > pageHeight - 30) {
          addNewPage();
        }
      }
    }

    // Clean up
    try {
      if (document.body.contains(tempContainer)) {
        document.body.removeChild(tempContainer);
      }
    } catch (e) {
      console.warn("Error during cleanup:", e);
    }

    // Save the PDF
    try {
      pdfDoc.save("resume.pdf");
    } catch (e) {
      console.error("Error saving PDF:", e);
      throw e;
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error; // Re-throw to allow error handling by the caller
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

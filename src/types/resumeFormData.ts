import type { z } from "~/utils/zod";
import type { RESUME_FORM_SCHEMA } from "~/constants/resumeFormSchema";

export type ResumeFormData = z.infer<typeof RESUME_FORM_SCHEMA>;

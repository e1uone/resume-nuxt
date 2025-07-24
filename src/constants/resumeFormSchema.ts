import { z } from "~/utils/zod";

export const RESUME_FORM_SCHEMA = z.object({
  candidateData: z.object({
    lastName: z.string().max(50),
    firstName: z.string().max(50),
    surname: z.string().max(50),
    candidate: z.string().max(50),
    phoneNumber: z.string().max(50),
    email: z.string().max(50),
  }),

  personalData: z.object({
    birthDate: z.string().max(50),
    birthPlace: z.string().max(50),
    citizenship: z.string().max(50),
    fullNameChangeReason: z.string().max(50).optional(),
    passport: z.string().max(50),
    passportDate: z.string().max(50),
    passportFrom: z.string().max(50),
    inn: z.string().max(50),
    snils: z.string().max(50),
    militaryService: z.string().max(50),
    registrationAddress: z.string().max(50),
    factAddress: z.string().max(50),
  }),

  education: z
    .array(
      z.object({
        yearOfAdmission: z.string().min(1, "Обязательное поле").max(50),
        yearOfGraduation: z.string().min(1, "Обязательное поле").max(50),
        university: z.string().min(1, "Обязательное поле").max(50),
        specialization: z.string().min(1, "Обязательное поле").max(50),
      }),
    )
    .min(1, "Добавьте хотя бы одно образование"),
  additionalEducation: z.string().max(500),
  foreignLanguage: z.string().max(50),

  workExperience: z.array(
    z.object({
      startDate: z.string().min(1, "Обязательное поле").max(50),
      endDate: z.string().min(1, "Обязательное поле").max(50),
      organization: z.string().min(1, "Обязательное поле").max(50),
      position: z.string().min(1, "Обязательное поле").max(50),
      address: z.string().min(1, "Обязательное поле").max(50),
    }),
  ),
  familyMembers: z.array(
    z.object({
      relativeDegree: z.string().min(1, "Обязательное поле").max(50),
      fullName: z.string().min(1, "Обязательное поле").max(50),
      birthDate: z.string().min(1, "Обязательное поле").max(50),
      workPlace: z.string().min(1, "Обязательное поле").max(50),
      position: z.string().min(1, "Обязательное поле").max(50),
      phoneNumber: z.string().min(1, "Обязательное поле").max(50),
      address: z.string().min(1, "Обязательное поле").max(50),
    }),
  ),
  generalQuestions: z.object({
    individualEntrepreneur: z.string(),
    criminalRecord: z.string(),
    debt: z.string().max(500),
    relativesCriminalRecords: z.string().max(500),
    companyKnowledge: z.string().max(500),
    vacancyQuestion: z.string().max(500),
    skillsQuestion: z.string().max(500),

    readyDate: z.string(),
    readyDateOther: z.string().max(200).optional(),

    workingStyle: z
      .array(z.string())
      .refine((value) => value.length >= 1 && value.length <= 2, {
        message: "Выберите 1–2 варианта.",
      }),
    workingStyleOther: z.string().max(200).optional(),

    workingCollective: z.string(),
    workingCollectiveOther: z.string().max(200).optional(),
    workingCollectiveQuestion: z.string().max(500),

    teamworkPreference: z.string().max(500),

    professionalGrowthOpportunities: z.array(z.string()),
    professionalGrowthOpportunitiesOther: z.string().max(200).optional(),

    workChallenge: z.string().max(500),
    conflictResolution: z.string().max(500),
    stressManagement: z.string().max(500),

    keyAchievements: z.string().max(500),
    positionGoals: z.string().max(500),
  }),
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
    generalLevel: z.string(),
  }),
  ranking: z.object({
    location: z.string(),
    finance: z.string(),
    atmosphere: z.string(),
    growth: z.string(),
    workload: z.string(),
    career: z.string(),
    learning: z.string(),
    reputation: z.string(),
    dynamic: z.array(
      z.object({
        label: z.string(),
        rank: z.string().min(1, "Обязательное поле"),
      }),
    ),
  }),
});

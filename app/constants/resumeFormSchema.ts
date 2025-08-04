import { z } from "~/utils/zod";
import {
  dateValidator,
  fileValidator,
  innValidator,
  validateSNILS,
  isValidYear,
  isValidFutureYear,
} from "~/utils/validators";

export const RESUME_FORM_SCHEMA = z.object({
  candidateData: z.object({
    lastName: z.string().max(50),
    firstName: z.string().max(50),
    surname: z.string().max(50),
    candidate: z.string().max(50),
    phoneNumber: z.string().min(10).max(10),
    email: z.string().max(50).email(),
    photo: z
      .any()
      .optional()
      .refine(
        fileValidator,
        "Поддерживаются только .jpg, .jpeg, .png и .webp форматы.",
      ),
  }),

  personalData: z.object({
    birthDate: z.string().refine(dateValidator, "Неверная дата"),
    birthPlace: z.string().max(50),
    citizenship: z.string().max(50),
    fullNameChangeReason: z.string().max(50).optional(),
    passport: z.string().min(10).max(10),
    passportDate: z.string().refine(dateValidator, "Неверная дата"),
    passportFrom: z.string().max(50),
    inn: z.string().refine(innValidator, "Неверный ИНН"),
    snils: z.string().refine(validateSNILS, "Неверный СНИЛС"),
    militaryService: z.string(),
    registrationAddress: z.string().max(50),
    factAddress: z.string().max(50),
  }),

  education: z
    .array(
      z
        .object({
          yearOfAdmission: z
            .string()
            .refine((val) => isValidYear(val), "Неверный год"),
          yearOfGraduation: z
            .string()
            .refine((val) => isValidFutureYear(val), "Неверный год"),
          university: z.string().min(1, "Обязательное поле").max(100),
          specialization: z.string().min(1, "Обязательное поле").max(100),
        })
        .refine(
          (data) => {
            if (!data.yearOfAdmission || !data.yearOfGraduation) {
              return true;
            }
            return (
              Number(data.yearOfGraduation) >= Number(data.yearOfAdmission)
            );
          },
          {
            message:
              "Год окончания должен быть больше или равен году поступления",
            path: ["yearOfGraduation"],
          },
        ),
    )
    .min(1, "Добавьте хотя бы одно образование"),
  additionalEducation: z.string().max(500).optional(),
  foreignLanguage: z.string().max(500).optional(),

  workExperience: z.array(
    z
      .object({
        startDate: z.string().refine(dateValidator, "Неверная дата"),
        endDate: z.string().refine(dateValidator, "Неверная дата"),
        organization: z.string().min(1, "Обязательное поле").max(100),
        position: z.string().min(1, "Обязательное поле").max(100),
        address: z.string().min(1, "Обязательное поле").max(100),
      })
      .refine(
        (data) => {
          if (!data.startDate || !data.endDate) {
            return true;
          }
          return new Date(data.startDate) < new Date(data.endDate);
        },
        {
          message: "Дата окончания должна быть больше даты начала",
          path: ["endDate"],
        },
      ),
  ),

  familyMembers: z.array(
    z.object({
      relativeDegree: z.string().min(1, "Обязательное поле").max(50),
      fullName: z.string().min(1, "Обязательное поле").max(50),
      birthDate: z.string().refine(dateValidator, "Неверная дата"),
      workPlace: z.string().min(1, "Обязательное поле").max(100),
      position: z.string().min(1, "Обязательное поле").max(100),
      phoneNumber: z.string().min(10).max(10),
      address: z.string().min(1, "Обязательное поле").max(100),
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

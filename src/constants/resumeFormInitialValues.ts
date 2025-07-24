import { FAMILY_MEMBERS_DEFAULT } from "~/constants/familyMembersDefault";
import { EDUCATION_DEFAULT } from "~/constants/educationDefault";

export const RESUME_FORM_INITIAL_VALUES = {
  education: [EDUCATION_DEFAULT],
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
};

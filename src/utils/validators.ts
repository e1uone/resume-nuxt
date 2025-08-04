import { ACCEPTED_IMAGE_MIME_TYPES } from "~/constants/acceptedImageMimeTypes";

export const dateValidator = (value: string) => {
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
    return false;
  }

  const [day, month, year] = value.split(".").map(Number);

  if (month < 1 || month > 12) {
    return false;
  }
  if (day < 1 || day > 31) {
    return false;
  }

  const date = new Date(year, month - 1, day);

  // Check if the date is valid (accounts for month length, leap years, etc.)
  const isValidDate =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValidDate) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

export const fileValidator = (file: File) => {
  return !file || ACCEPTED_IMAGE_MIME_TYPES.includes(file.type);
};

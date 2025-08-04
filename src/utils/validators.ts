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

const checkSumINN = {
  business(inn: number[]): boolean {
    return (
      inn.length === 10 &&
      inn[9] ===
        ((2 * inn[0] +
          4 * inn[1] +
          10 * inn[2] +
          3 * inn[3] +
          5 * inn[4] +
          9 * inn[5] +
          4 * inn[6] +
          6 * inn[7] +
          8 * inn[8]) %
          11) %
          10
    );
  },
  entrepreneur(inn: number[]): boolean {
    return (
      inn.length === 12 &&
      inn[10] ===
        ((7 * inn[0] +
          2 * inn[1] +
          4 * inn[2] +
          10 * inn[3] +
          3 * inn[4] +
          5 * inn[5] +
          9 * inn[6] +
          4 * inn[7] +
          6 * inn[8] +
          8 * inn[9]) %
          11) %
          10 &&
      inn[11] ===
        ((3 * inn[0] +
          7 * inn[1] +
          2 * inn[2] +
          4 * inn[3] +
          10 * inn[4] +
          3 * inn[5] +
          5 * inn[6] +
          9 * inn[7] +
          4 * inn[8] +
          6 * inn[9] +
          8 * inn[10]) %
          11) %
          10
    );
  },
};

export const innValidator = (value: string | number): boolean => {
  const inn = String(value).split("").map(Number);

  return checkSumINN.business(inn) || checkSumINN.entrepreneur(inn);
};

export function validateSNILS(value: string): boolean {
  // Extract the check digit (last 2 digits)
  const checkSum = parseInt(value.slice(9), 10);

  // Calculate the sum for the first 9 digits
  const sum = value
    .substring(0, 9)
    .split("")
    .reduce((acc, digit, index) => {
      return acc + parseInt(digit, 10) * (9 - index);
    }, 0);

  // Validate according to SNILS rules
  return (
    (sum < 100 && sum === checkSum) ||
    ((sum === 100 || sum === 101) && checkSum === 0) ||
    (sum > 101 &&
      (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0)))
  );
}

export const isValidYear = (value: string): boolean => {
  return (
    /^\d{4}$/.test(value) &&
    Number(value) >= 1900 &&
    Number(value) <= new Date().getFullYear()
  );
};

export const isValidFutureYear = (value: string): boolean => {
  return (
    /^\d{4}$/.test(value) &&
    Number(value) >= 1900 &&
    Number(value) <= new Date().getFullYear() + 5
  );
};

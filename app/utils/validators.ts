import { ACCEPTED_IMAGE_MIME_TYPES } from "~/constants/acceptedImageMimeTypes";

export const dateValidator = (value: string) => {
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
    return false;
  }

  const [day, month, year] = value.split(".").map(Number);

  if (!day || !month || !year) {
    return false;
  }

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
    if (inn.length !== 10) {
      return false;
    }

    // prettier-ignore
    const [
      n0, n1, n2, n3, n4,
      n5, n6, n7, n8, n9
    ] = inn as [
      number, number, number, number, number,
      number, number, number, number, number
    ];
    const checksum =
      ((2 * n0 +
        4 * n1 +
        10 * n2 +
        3 * n3 +
        5 * n4 +
        9 * n5 +
        4 * n6 +
        6 * n7 +
        8 * n8) %
        11) %
      10;

    return n9 === checksum;
  },
  entrepreneur(inn: number[]): boolean {
    if (inn.length !== 12) {
      return false;
    }
    // prettier-ignore
    const [
      n0, n1, n2, n3, n4,
      n5, n6, n7, n8, n9, n10, n11
    ] = inn as [
      number, number, number, number, number,
      number, number, number, number, number,
      number, number
    ];

    return (
      n10 ===
        ((7 * n0 +
          2 * n1 +
          4 * n2 +
          10 * n3 +
          3 * n4 +
          5 * n5 +
          9 * n6 +
          4 * n7 +
          6 * n8 +
          8 * n9) %
          11) %
          10 &&
      n11 ===
        ((3 * n0 +
          7 * n1 +
          2 * n2 +
          4 * n3 +
          10 * n4 +
          3 * n5 +
          5 * n6 +
          9 * n7 +
          4 * n8 +
          6 * n9 +
          8 * n10) %
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

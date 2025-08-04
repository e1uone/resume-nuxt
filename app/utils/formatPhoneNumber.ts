export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return "";
  }

  // Format phone to +7 (977) 816-65-41
  return `+7 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatPhoneNumber = (phoneNumberInput: string) => {
  let formatted = "";
  for (let i = 0; i < phoneNumberInput.length; i++) {
    formatted += phoneNumberInput.charAt(i);

    if ((i + 1) % 2 === 0 && i < phoneNumberInput.length - 1) {
      formatted += "-";
    }
  }

  return formatted;
};

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();}

export const formatPhoneNumber = (phoneNumberInput) => {
    let formatted = '';
    for (let i = 0; i < number.length; i++) {
        formatted += number.charAt(i);

        if ((i + 1) % 2 === 0 && i < phoneNumberInput.length - 1) {
            formatted += '-';
        }
    }

    return formatted;
}
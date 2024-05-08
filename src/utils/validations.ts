import { allCities } from "./all-cities";

export function isEmailValid(emailAddress: string) {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}
export function isNumberValid(formattedNumber: string) {
  if (typeof formattedNumber !== "string" || formattedNumber.length < 7) {
    return false;
  }

  const regex = /^\d*$/;
  return !!formattedNumber.match(regex);
}

export function isCityValid(city: string) {
  if (allCities.includes(city)) {
    return true;
  }
}

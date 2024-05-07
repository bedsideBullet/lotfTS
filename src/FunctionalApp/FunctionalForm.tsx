import { FormEvent, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalTextInput } from "./FunctionalTextInput";
import { FunctionalPhoneInput } from "./FunctionalPhoneInput";
import { isEmailValid, isNumberValid } from "../utils/validations";
import { allCities } from "../utils/all-cities";
import { FunctionalCityInput } from "./FunctionalCityInput";
import { UserInformation } from "../types";
import { capitalize } from "../utils/transformations";


type onSubmit = { onSubmit: (UserInformation: UserInformation) => void };

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = ({ onSubmit }: onSubmit) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState(["", "", "", ""]);
  const formattedNumber = phoneNumberInput.join("");
  const numberDisplay = phoneNumberInput.join("-");

  const isFirstNameValid = firstName.length > 2;
  const isLastNameValid = lastName.length > 2;
  const isEmailValidFlag = isEmailValid(email);
  const isCityValid = allCities.includes(city);
  const isPhoneNumberValid = isNumberValid(formattedNumber);

  const shouldShowFirstNameError = isSubmitted && !isFirstNameValid;
  const shouldShowLastNameError = isSubmitted && !isLastNameValid;
  const shouldShowEmailError = isSubmitted && !isEmailValidFlag;
  const shouldShowCityError = isSubmitted && !isCityValid;
  const shouldShowPhoneNumberError = isSubmitted && !isPhoneNumberValid;

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
    setPhoneNumberInput(["", "", "", ""]);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isEmailValidFlag ||
      !isCityValid ||
      !isPhoneNumberValid
    ) {
      alert("Bad Inputs");
      return
    }

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValidFlag &&
      isCityValid &&
      isPhoneNumberValid
    ) {
      const userData: UserInformation = {
        firstName,
        lastName,
        email,
        city,
        numberDisplay,
      };

      if (onSubmit) {
        onSubmit(userData);
      }

      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <u>
        <h3>User Information Form</h3>
      </u>
      <FunctionalTextInput
        labelText="First Name:"
        inputProps={{
          placeholder: "Bilbo",
          value: firstName,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(capitalize(e.target.value)),
        }}
      />
      <ErrorMessage
        message={firstNameErrorMessage}
        show={shouldShowFirstNameError}
      />

      <FunctionalTextInput
        labelText="Last Name:"
        inputProps={{
          placeholder: "Baggins",
          value: lastName,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(capitalize(e.target.value)),
        }}
      />
      <ErrorMessage
        message={lastNameErrorMessage}
        show={shouldShowLastNameError}
      />

      <FunctionalTextInput
        labelText="Email:"
        inputProps={{
          placeholder: "bilbo-baggins@adventurehobbits.ne",
          value: email,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value),
        }}
      />
      <ErrorMessage message={emailErrorMessage} show={shouldShowEmailError} />

      <FunctionalCityInput
        labelText={"City:"}
        inputProps={{
          placeholder: "Hobbiton",
          value: city,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setCity(capitalize(e.target.value)),
        }}
      />
      <ErrorMessage message={cityErrorMessage} show={shouldShowCityError} />

      <FunctionalPhoneInput
        labelText={"Phone:"}
        phoneNumberInput={phoneNumberInput}
        setPhoneNumberInput={setPhoneNumberInput}
      />

      <ErrorMessage
        message={phoneNumberErrorMessage}
        show={shouldShowPhoneNumberError}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

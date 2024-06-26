import { Component, FormEvent } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassTextInput } from "./ClassTextInput";
import { ClassPhoneInput } from "./ClassPhoneInput";
import { isEmailValid, isNumberValid, isCityValid } from "../utils/validations";
import { ClassCityInput } from "./ClassCityInput";
import { UserInformation } from "../types";
import { capitalize, formatPhoneNumber } from "../utils/transformations";

type ClassFormProps = {
  onSubmit: (user: UserInformation) => void;
};

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component<ClassFormProps> {
  state = {
    isSubmitted: false,
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumberInput: ["", "", "", ""],
  };

  reset = () => {
    this.setState({
      isSubmitted: false,
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phoneNumberInput: ["", "", "", ""],
    });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ isSubmitted: true });

    const { firstName, lastName, email, city, phoneNumberInput } = this.state;

    const isFirstNameValid = firstName.length > 2;
    const isLastNameValid = lastName.length > 2;
    const isEmailValidFlag = isEmailValid(email);
    const isCityValidFlag = isCityValid(city);
    const formattedNumber = phoneNumberInput.join("");
    const isPhoneNumberValid = isNumberValid(formattedNumber);
    const numberDisplay = formatPhoneNumber(formattedNumber);

    const isFormValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValidFlag &&
      isCityValidFlag &&
      isPhoneNumberValid;

    if (isFormValid) {
      const userData: UserInformation = {
        firstName,
        lastName,
        email,
        city,
        numberDisplay,
      };
      this.props.onSubmit(userData);
      this.reset();
    } else {
      alert("Bad Inputs");
    }
  };

  render() {
    const { isSubmitted, firstName, lastName, email, city, phoneNumberInput } =
      this.state;

    const isFirstNameValid = firstName.length > 2;
    const isLastNameValid = lastName.length > 2;
    const isEmailValidFlag = isEmailValid(email);
    const isCityValidFlag = isCityValid(city);
    const isPhoneNumberValid = isNumberValid(phoneNumberInput.join(""));

    const shouldShowFirstNameError = isSubmitted && !isFirstNameValid;
    const shouldShowLastNameError = isSubmitted && !isLastNameValid;
    const shouldShowEmailError = isSubmitted && !isEmailValidFlag;
    const shouldShowCityError = isSubmitted && !isCityValidFlag;
    const shouldShowPhoneNumberError = isSubmitted && !isPhoneNumberValid;

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>
        <ClassTextInput
          labelText="First Name:"
          inputProps={{
            placeholder: "Bilbo",
            value: firstName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ firstName: capitalize(e.target.value) }),
          }}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={shouldShowFirstNameError}
        />

        <ClassTextInput
          labelText="Last Name:"
          inputProps={{
            placeholder: "Baggins",
            value: lastName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ lastName: capitalize(e.target.value) }),
          }}
        />
        <ErrorMessage
          message={lastNameErrorMessage}
          show={shouldShowLastNameError}
        />

        <ClassTextInput
          labelText="Email:"
          inputProps={{
            placeholder: "bilbo-baggins@adventurehobbits.ne",
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ email: e.target.value }),
          }}
        />
        <ErrorMessage message={emailErrorMessage} show={shouldShowEmailError} />

        <ClassCityInput
          labelText={"City:"}
          inputProps={{
            placeholder: "Hobbiton",
            value: city,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ city: capitalize(e.target.value) }),
          }}
        />
        <ErrorMessage message={cityErrorMessage} show={shouldShowCityError} />

        <ClassPhoneInput
          labelText={"Phone:"}
          phoneNumberInput={phoneNumberInput}
          setPhoneNumberInput={(input) =>
            this.setState({ phoneNumberInput: input })
          }
        />

        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={shouldShowPhoneNumberError}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

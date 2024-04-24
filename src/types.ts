export type UserInformation = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  numberDisplay: string;
  onSubmit: (userInfo: UserInformation) => void;
};

export type FunctionalInputProps = {
  labelText: string;
  inputProps: any;
};

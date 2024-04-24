import { FunctionalInputProps } from "../types";

export const FunctionalTextInput = ({ labelText, inputProps }: FunctionalInputProps) => {
  return (
    <div className="input-wrap">
      <label>{labelText}</label>
      <input {...inputProps} />
    </div>
  );
};

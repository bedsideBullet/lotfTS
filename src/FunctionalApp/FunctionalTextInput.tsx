import { ComponentProps } from "react";

export type FunctionalInputProps = {
  labelText: string;
  inputProps: ComponentProps<"input">;
};

export const FunctionalTextInput = ({
  labelText,
  inputProps,
}: FunctionalInputProps) => {
  return (
    <div className="input-wrap">
      <label>{labelText}</label>
      <input {...inputProps} />
    </div>
  );
};

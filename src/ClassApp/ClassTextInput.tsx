import { Component } from "react";
import { FunctionalInputProps } from "../types";

export class ClassTextInput extends Component<FunctionalInputProps> {
  render() {
    const { labelText, inputProps } = this.props;

    return (
      <div className="input-wrap">
        <label>{labelText}</label>
        <input {...inputProps} />
      </div>
    );
  }
}

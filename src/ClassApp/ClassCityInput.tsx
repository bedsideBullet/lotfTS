import { Component } from "react";
import { allCities } from "../utils/all-cities";
import { FunctionalInputProps } from "../types";

export class ClassCityInput extends Component<FunctionalInputProps> {
  render() {
    const { labelText, inputProps } = this.props;

    return (
      <div className="input-wrap">
        <label>{labelText}</label>
        <input
          list="city-list"
          placeholder="Type or select a city"
          {...inputProps}
        />
        <datalist id="city-list">
          {allCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </datalist>
      </div>
    );
  }
}

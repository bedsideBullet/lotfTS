import { allCities } from "../utils/all-cities";
import { FunctionalInputProps } from "../FunctionalApp/FunctionalTextInput";

export const FunctionalCityInput = ({
  labelText,
  inputProps,
}: FunctionalInputProps) => {
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
};

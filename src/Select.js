import React from "react";

const Select = ({ inputOptions, inputValue }) => {
  debugger;
  const optionsWithEmptyValue = [{}, ...inputOptions];
  debugger;
  return (
    <select>
      {optionsWithEmptyValue.map((inputOption) => {
        const { uuid, name } = inputOption;
        const isSelected = uuid === inputValue;

        return (
          <option
            name="home_team_uuid"
            value={inputOption.uuid}
            selected={isSelected}
          >
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

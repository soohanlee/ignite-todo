import React from "react";
import { Option, Select } from "../../../style/TodoList";
import { FilterType, IFilter } from "../../../type/todoType";

interface Props {
  filter: FilterType;
  options: Array<IFilter>;
  onChange: (value: string) => void;
}

const SelectComponent = ({ filter, options, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Select data-cy="select" value={filter} onChange={handleChange}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectComponent;

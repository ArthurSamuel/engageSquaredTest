import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
  TextField,
} from "@fluentui/react";
import * as React from "react";

interface IFilter {
  onSearch(text: string): void;
  onChangeType(item: IDropdownOption): void;
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

export const optionsType: IDropdownOption[] = [
  { key: "road", text: "Road" },
  { key: "corridors", text: "Corridors" },
];

export default function Filter({ onChangeType, onSearch }: IFilter) {
  return (
    <div>
      <Dropdown
        defaultSelectedKey={optionsType[0].key}
        defaultValue={optionsType[0].key}
        placeholder="Select an option"
        label="Road or Corridors"
        options={optionsType}
        styles={dropdownStyles}
        onChange={(e, v) => v && onChangeType(v)}
      />
      <TextField
        label="Search"
        placeholder="Search"
        onChange={(e, v) => onSearch(v || "")}
      />
    </div>
  );
}

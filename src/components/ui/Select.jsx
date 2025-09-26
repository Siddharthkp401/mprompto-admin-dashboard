import React from "react";
import Select from "react-select";

export default function CustomSelect({
  value,
  onChange,
  options,
  className,
  ...props
}) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "128px", // w-32
      height: "32px", // h-8
      minHeight: "32px",
      fontSize: "12px", // text-xs
      border: "1px solid #1994BE",
      borderRadius: "6px", // rounded-md
      paddingLeft: "8px", // pl-2
      paddingRight: "24px", // pr-6
      boxShadow: state.isFocused
        ? "0 0 0 2px rgba(59, 130, 246, 0.5), 0px 0px 20px 0px rgba(0, 0, 0, 0.05)"
        : "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
      "&:hover": {
        border: "1px solid #1994BE",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0",
      height: "100%",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0 8px",
      color: "#1994BE",
      "&:hover": {
        color: "#1994BE",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 50,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      borderRadius: "6px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "12px",
      padding: "8px 12px",
      backgroundColor: state.isSelected
        ? "#3B82F6"
        : state.isFocused
        ? "#EFF6FF"
        : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:hover": {
        backgroundColor: state.isSelected ? "#3B82F6" : "#EFF6FF",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#374151",
      fontSize: "12px",
    }),
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={className}>
      <Select
        value={selectedOption}
        onChange={(option) => onChange(option?.value || "")}
        options={options}
        styles={customStyles}
        isSearchable={false}
        placeholder="Select..."
        {...props}
      />
    </div>
  );
}

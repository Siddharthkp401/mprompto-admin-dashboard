import React from "react";

export default function Select({
  value,
  onChange,
  options,
  className,
  ...props
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-32 h-8 text-xs border border-gray-300 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        className || ""
      }`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

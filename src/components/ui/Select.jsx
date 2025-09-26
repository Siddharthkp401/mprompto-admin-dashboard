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
      className={`w-32 h-8 text-xs border border-[#1994BE] rounded-md pl-2 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white ${
        className || ""
      }`}
      style={{
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%231994BE'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 6px center",
        backgroundSize: "16px",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
      }}
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

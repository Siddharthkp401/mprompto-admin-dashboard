import React, { useState } from "react";
import CustomSelect from "./Select";

export default function SelectExample() {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "10", label: "10" },
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold">Enhanced Select Component</h3>
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium">Rows per page:</label>
        <CustomSelect
          value={selectedValue}
          onChange={setSelectedValue}
          options={options}
          className="w-32"
        />
      </div>
      <p className="text-sm text-gray-600">
        Selected value: {selectedValue || "None"}
      </p>
    </div>
  );
}

import { useState } from "react";
import Select from "../../components/ui/Select";

export default function MapData({ csvColumns = [], csvFirstRowData = {} }) {
  const [fieldMappings, setFieldMappings] = useState({
    productId: "Product ID",
    productName: "Product Name",
    category: "Category",
    url: "Url",
  });

  const systemFields = [
    { key: "productId", label: "Product ID" },
    { key: "productName", label: "Product Name" },
    { key: "category", label: "Category" },
    { key: "url", label: "Url" },
  ];

  // Use dynamic CSV columns passed from parent component
  // If no columns are provided, show a default message
  const displayColumns =
    csvColumns.length > 0
      ? csvColumns
      : [{ value: "", label: "No CSV file uploaded" }];

  const sampleData = {
    productId: "101",
    productName: "shoe",
    category: "Foot ware",
    url: "https://example.com/shoe-101",
  };

  // Function to handle field mapping changes
  const handleFieldMappingChange = (fieldKey, selectedColumn) => {
    setFieldMappings((prev) => ({
      ...prev,
      [fieldKey]: selectedColumn,
    }));
  };

  // Function to get the first row data for a mapped field
  const getFirstRowDataForField = (fieldKey) => {
    const mappedColumn = fieldMappings[fieldKey];
    if (mappedColumn && csvFirstRowData[mappedColumn] !== undefined) {
      return csvFirstRowData[mappedColumn];
    }
    return sampleData[fieldKey]; // Fallback to sample data
  };

  return (
    <div className="space-y-4">
      {csvColumns.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            Please upload a CSV file in the previous step to see column
            mappings.
          </p>
        </div>
      )}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-r border-gray-200">
                Fields in System
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-r border-gray-200">
                Columns in File (CSV)
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-r border-gray-200"></th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">
                Columns Row Data
              </th>
            </tr>
          </thead>
          <tbody>
            {systemFields.map((field) => (
              <tr key={field.key} className="border-b border-gray-200">
                {/* System Field */}
                <td className="px-6 py-4 border-r border-gray-200">
                  <span className="text-gray-700 font-medium">
                    {field.label}
                  </span>
                </td>

                {/* CSV Column Mapping */}
                <td className="px-6 py-4 border-r border-gray-200">
                  <div className="space-y-2">
                    <Select
                      value={fieldMappings[field.key]}
                      onChange={(e) =>
                        handleFieldMappingChange(field.key, e.target.value)
                      }
                      options={displayColumns}
                      className="w-full"
                      disabled={csvColumns.length === 0}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 border-r border-gray-200">
                  <input
                    placeholder="Replace Empty Values"
                    type="text"
                    className="w-full"
                  />
                </td>

                {/* First Row Data */}
                <td className="px-6 py-4">
                  <span className="text-gray-700">
                    {getFirstRowDataForField(field.key)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

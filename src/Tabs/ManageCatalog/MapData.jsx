import { useState } from "react";
import Select from "../../components/ui/Select";

export default function MapData() {
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

  const csvColumns = [
    { value: "Product ID", label: "Product ID" },
    { value: "Product Name", label: "Product Name" },
    { value: "Category", label: "Category" },
    { value: "Url", label: "Url" },
    { value: "Price", label: "Price" },
    { value: "Description", label: "Description" },
  ];

  const sampleData = {
    productId: "101",
    productName: "shoe",
    category: "Foot ware",
    url: "https://example.com/shoe-101",
  };

  return (
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
          {systemFields.map((field, index) => (
            <tr key={field.key} className="border-b border-gray-200">
              {/* System Field */}
              <td className="px-6 py-4 border-r border-gray-200">
                <span className="text-gray-700 font-medium">{field.label}</span>
              </td>

              {/* CSV Column Mapping */}
              <td className="px-6 py-4 border-r border-gray-200">
                <div className="space-y-2">
                  <Select
                    value={fieldMappings[field.key]}
                    // onChange={(e) => handleFieldMappingChange(field.key, e.target.value)}
                    options={csvColumns}
                    className="w-full"
                  />
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-200">
                <input placeholder="Replace Empty Values" type="text" className="w-full" />
              </td>

              {/* Sample Data */}
              <td className="px-6 py-4">
                <span className="text-gray-700">{sampleData[field.key]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

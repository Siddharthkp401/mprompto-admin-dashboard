import React from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

export default function CurationQualityControl() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Curation & Quality Control</h1>
        <p className="text-gray-600">
          Identify and manage curation and quality control entries in your catalog.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center py-12">
          <HiOutlineDocumentDuplicate className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Curation & Quality Control</h3>
          <p className="text-gray-600">This feature is coming soon.</p>
        </div>
      </div>
    </div>
  );
}

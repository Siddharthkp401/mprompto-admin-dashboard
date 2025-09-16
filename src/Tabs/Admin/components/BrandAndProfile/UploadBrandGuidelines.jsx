import React from "react";
import Button from "../../../../components/ui/Button";

const UploadBrandGuidelines = () => (
  <div className="max-w-2xl mx-auto">
    {/* Upload Area */}
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center mb-8">
      <div className="text-gray-500 mb-2">
        Drag & Drop or{" "}
        <button className="text-cyan-500 hover:text-cyan-600 font-medium">
          Upload file
        </button>{" "}
        to upload
      </div>
      <div className="text-sm text-gray-400 mb-1">Max size : 10mb</div>
      <div className="text-sm text-gray-400">Supported : PDF, Word files</div>
    </div>
    {/* OR Divider */}
    <div className="flex items-center justify-center mb-8">
      <div className="flex-1 h-px bg-gray-200"></div>
      <span className="px-4 text-gray-500 font-medium">OR</span>
      <div className="flex-1 h-px bg-gray-200"></div>
    </div>
    {/* Add Brand Details Button */}
    <div className="text-center mb-16">
      <Button
        variant="outline"
        size="lg"
        className="px-8 py-3 text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent"
      >
        Add Your Brand Details
      </Button>
    </div>
  </div>
);

export default UploadBrandGuidelines; 
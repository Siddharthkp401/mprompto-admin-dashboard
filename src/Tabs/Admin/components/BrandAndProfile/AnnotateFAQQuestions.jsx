import React from "react";

const AnnotateFAQQuestions = () => (
  <div className="flex-1 px-8 py-8 mx-auto">
    <h2 className="text-2xl font-semibold text-gray-800 mb-8">
      Upload Your FAQ Questions and Answers
    </h2>

    <div className="max-w-2xl mx-auto">
      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center mb-8">
        <div className="text-gray-500 mb-2">
          Drag & Drop or{" "}
          <button className="text-cyan-500 hover:text-cyan-600 font-medium">
            Choose file
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

      {/* FAQ Input Section */}
      <div className="mb-16">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          FAQs Questions And Answers
        </label>
        <textarea
          rows={12}
          placeholder="Example :
Question-1 What is UrbanGlow's mission?
Answer-1 UrbanGlow's mission is to provide sustainable, innovative, and stylish solutions."
          className="w-full px-4 py-4 border-2 border-cyan-200 rounded-lg focus:border-cyan-500 focus:outline-none resize-none text-gray-600"
          defaultValue="Example :
Question-1 What is UrbanGlow's mission?
Answer-1 UrbanGlow's mission is to provide sustainable, innovative, and stylish solutions."
        />
      </div>
    </div>
  </div>
);

export default AnnotateFAQQuestions;

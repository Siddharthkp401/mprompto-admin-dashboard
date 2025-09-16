import React from "react";

const ReviewExtractedData = () => (
//   <div className="max-w-2xl mx-auto text-center">
    <div className="flex-1 px-8 py-8 mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Brand Details
        </h2>
        <p className="text-gray-600">
          we have processed brand guidelines successfully & we would like to
          request you to edit incase of any details which needs to be added.
        </p>
      </div>

      <div className="space-y-6">
        {/* Brand Name & Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand Name & Industry
          </label>
          <input
            type="text"
            defaultValue="Sony"
            className="w-full px-4 py-3 border-2 border-cyan-200 rounded-lg focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Short Brand Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Brand Description
            </label>
            <textarea
              rows={4}
              defaultValue="At Sony, we push boundaries to deliver unforgettable entertainment and cutting-edge technology."
              className="w-full px-4 py-3 border-2 border-cyan-200 rounded-lg focus:border-cyan-500 focus:outline-none resize-none"
            />
          </div>

          {/* Brand Traits */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand Traits
            </label>
            <div className="border-2 border-cyan-200 rounded-lg p-4 min-h-[120px]">
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Trust", "Quality", "Bold", "Authenticity"].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm"
                    >
                      {trait}
                      <button className="text-cyan-500 hover:text-cyan-700">
                        ×
                      </button>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Communication Style */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Communication Style
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="communicationStyle"
                  value="formal"
                  defaultChecked
                  className="w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                />
                <span className="ml-2 text-gray-700">Formal</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="communicationStyle"
                  value="semi-formal"
                  className="w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                />
                <span className="ml-2 text-gray-700">Semi-Formal</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="communicationStyle"
                  value="casual"
                  className="w-4 h-4 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                />
                <span className="ml-2 text-gray-700">Casual</span>
              </label>
            </div>
          </div>

          {/* Tone of Voice */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tone of Voice
            </label>
            <div className="border-2 border-cyan-200 rounded-lg p-4 min-h-[80px]">
              <div className="flex flex-wrap gap-2">
                {["Friendly", "Professional"].map((tone) => (
                  <span
                    key={tone}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm"
                  >
                    {tone}
                    <button className="text-cyan-500 hover:text-cyan-700">
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Specific Do's */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specific Do's
            </label>
            <div className="border-2 border-cyan-200 rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  Be polite, empathetic, and respectful
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  Use natural, conversational language
                </li>
              </ul>
            </div>
          </div>

          {/* Specific Don'ts */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specific Don'ts
            </label>
            <div className="border-2 border-cyan-200 rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  Don't use robotic or overly formal tone
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  Don't ignore user context or tone
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Phrases & Responses */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sample Phrases & Responses
          </label>
          <textarea
            rows={4}
            placeholder="Enter sample phrases and responses..."
            className="w-full px-4 py-3 border-2 border-cyan-200 rounded-lg focus:border-cyan-500 focus:outline-none resize-none"
          />
        </div>
      </div>
    </div>
//   </div>
);

export default ReviewExtractedData;

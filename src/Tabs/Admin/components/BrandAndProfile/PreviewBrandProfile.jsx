import React from "react";
import Button from "../../../../components/ui/Button";

const PreviewBrandProfile = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Upload Your Brand Guidelines
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-cyan-500 hover:text-cyan-600 hover:bg-cyan-50"
          >
            Edit Icon
          </Button>
        </div>

        <div className="max-w-4xl space-y-8">
          {/* Brand Name & Industry */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Brand Name & Industry
            </h3>
            <p className="text-lg font-semibold text-gray-900">Sony</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Short Brand Description */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Short Brand Description
              </h3>
              <p className="text-gray-900 leading-relaxed">
                At Sony, we push boundaries to deliver unforgettable
                entertainment and cutting-edge technology.
              </p>
            </div>

            {/* Key Values & Traits */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Key Values & Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Trust", "Quality", "Bold", "Authenticity"].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Communication Style */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Communication Style
              </h3>
              <p className="text-gray-900 font-medium">Formal</p>
            </div>

            {/* Tone of Voice */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Tone of Voice
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Friendly", "Professional"].map((tone) => (
                  <span
                    key={tone}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tone}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Specific Do's */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Specific Do's
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-900">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Be polite, empathetic, and respectful</span>
                </li>
                <li className="flex items-start text-gray-900">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Use natural, conversational language</span>
                </li>
              </ul>
            </div>

            {/* Specific Don'ts */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Specific Don'ts
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-900">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Don't use robotic or overly formal tone</span>
                </li>
                <li className="flex items-start text-gray-900">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Don't ignore user context or tone</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sample Phrases & Responses */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              Sample Phrases & Responses
            </h3>
            <p className="text-gray-900 font-medium">
              Hi there! We're excited you're here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBrandProfile;

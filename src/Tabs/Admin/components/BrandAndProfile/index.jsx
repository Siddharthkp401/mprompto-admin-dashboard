import React, { useState } from "react";
import Button from "../../../../components/ui/Button";
import UploadBrandGuidelines from "./UploadBrandGuidelines";
import ReviewExtractedData from "./ReviewExtractedData";
import AnnotateFAQQuestions from "./AnnotateFAQQuestions";
import PreviewBrandProfile from "./PreviewBrandProfile";

const steps = [
  {
    id: 1,
    title: "Upload Brand Guidelines",
    subtitle: "Your brand's look, feel, and voice",
  },
  {
    id: 2,
    title: "Review Extracted Data",
    subtitle: "Verify logos, colors, and voice tone",
  },
  {
    id: 3,
    title: "Annotate FAQ Questions",
    subtitle: "Lorem Ipsum is simply",
  },
];

const BrandAndProfile = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };
  const handleCancel = () => {
    setActiveStep(1);
  };

  let MainContent;
  if (activeStep === 1) MainContent = <UploadBrandGuidelines />;
  else if (activeStep === 2) MainContent = <ReviewExtractedData />;
  else if (activeStep === 3) MainContent = <AnnotateFAQQuestions />;
  else if (activeStep === 4) MainContent = <PreviewBrandProfile />;

  return (
    <div className="flex-1 flex flex-col h-full min-h-0">
      {/* Progress Steps (Header) */}
      {activeStep !== 4 && (
        <div className="px-8 py-6 bg-white sticky top-0 z-10">
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => {
              const isActive = step.id === activeStep;
              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center gap-4 px-6 py-4 rounded-lg ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isActive
                          ? "border-white bg-white text-cyan-500"
                          : "border-gray-400"
                      }`}
                    >
                      {isActive && (
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{step.title}</div>
                      <div
                        className={`text-sm ${
                          isActive ? "text-cyan-100" : "text-gray-400"
                        }`}
                      >
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gray-200 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content Area (Dynamic) */}
      <div className="flex-1 px-8 py-8 overflow-y-auto">{MainContent}</div>

      {/* Bottom Actions (Footer) */}
      <div className="px-8 py-6 bg-white border-t border-gray-200 sticky bottom-0 z-10">
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="lg"
            className="px-8 bg-transparent"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <div className="flex gap-2">
            {activeStep > 1 && (
              <Button
                variant="outline"
                size="lg"
                className="px-8 bg-transparent"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            {activeStep < steps.length ? (
              <Button
                size="lg"
                className="px-8 bg-cyan-500 hover:bg-cyan-600"
                onClick={handleNext}
              >
                Next: {steps[activeStep].title}
              </Button>
            ) : (
              <Button
                onClick={() => setActiveStep(4)}
                size="lg"
                className="px-8 bg-cyan-500 hover:bg-cyan-600"
              >
                Finish
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAndProfile;

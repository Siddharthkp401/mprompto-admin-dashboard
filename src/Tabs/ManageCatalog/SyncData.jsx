import { useState } from "react";
import { LuDownload as DownloadIcon } from "react-icons/lu";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function SyncData() {
  const [urlType, setUrlType] = useState("single");
  const [url, setUrl] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Choose Sync Method",
      subtitle: "Select how you want to sync your data",
      active: true,
    },
    {
      id: 2,
      title: "Map Data",
      subtitle: "Match your fields with the catalog format",
      active: false,
    },
    {
      id: 3,
      title: "Sync Completed",
      subtitle: "All records are now up to date",
      active: false,
    },
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file selection
      console.log("File selected:", e.target.files[0]);
    }
  };

  const handleNext = () => {
    console.log("Next clicked");
    // Handle next step logic
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Handle cancel logic
  };

  const handleSampleCSVDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement("a");
    link.href = "/sample-catalog.csv";
    link.download = "sample-catalog.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-6 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Sync Data
          </h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-full p-4 rounded-lg border-2 ${
                  step.active
                    ? "bg-[#188FB7] text-white border-[#188FB7]"
                    : "bg-gray-100 text-gray-500 border-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs opacity-75">{step.subtitle}</div>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center px-4">
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Upload CSV Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Upload a CSV file
            </h2>
            <Button
              onClick={handleSampleCSVDownload}
              className="flex gap-2 text-center items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm"
            >
              Sample CSV
              <DownloadIcon className="h-4 w-4 mr-2 text-[#188FB7]" />
            </Button>
          </div>

          <Card>
            <div
              className={`p-12 border-2 border-dashed rounded-lg text-center ${
                dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-2">
                <p className="text-gray-600">
                  Drag & Drop or{" "}
                  <label className="text-[#188FB7] cursor-pointer hover:text-blue-600">
                    Choose file
                    <input
                      type="file"
                      className="hidden"
                      accept=".csv"
                      onChange={handleFileSelect}
                    />
                  </label>{" "}
                  to upload
                </p>
                <p className="text-sm text-gray-500">Max size: 10mb</p>
              </div>
            </div>
          </Card>
        </div>

        {/* API Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            API (Connect via API for real-time sync)
          </h2>
          <div>
            <Button className="bg-[#188FB7] hover:bg-[#188FB7] text-white">
              Configure API
            </Button>
          </div>
        </div>

        {/* URL Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            URL (Provide a URL)
          </h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <p className="text-gray-700">
                What is the URL of your external support content?
              </p>

              {/* URL Type Toggle */}
              <div className="flex items-center space-x-2 ml-auto">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    urlType === "single"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setUrlType("single")}
                >
                  Single url
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    urlType === "multiple"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setUrlType("multiple")}
                >
                  Multiple url
                </button>
              </div>
            </div>

            {/* URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter URL
              </label>
              <input
                type="url"
                placeholder="Example: https://myapi.example.com/sync/catalog"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-center space-x-4">
          <Button
            onClick={handleCancel}
            className="px-8 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg"
          >
            Cancel
          </Button>
          <Button
            onClick={handleNext}
            className="px-8 py-2 bg-[#188FB7] hover:bg-[#188FB7] text-white rounded-lg"
          >
            Next: Map Data
          </Button>
        </div>
      </div>
    </div>
  );
}

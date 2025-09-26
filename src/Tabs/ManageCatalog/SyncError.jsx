import React from "react";
import Button from "../../components/ui/Button";
import { LuDownload as DownloadIcon } from "react-icons/lu";

export default function SyncError() {
  return (
    <>
      {/* Action Required banner */}
      <div className="flex items-center gap-3 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-3 rounded-xl mb-6">
        <div className="h-7 w-7 rounded-full text-white font-bold bg-[#E41E2E] flex items-center justify-center">
          i
        </div>
        <span className="font-medium text-[#3D4344]">Action Required</span>
      </div>

      {/* Error card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-gray-700">
              <p className="font-medium">
                Some records could not be processed due to missing or invalid
                details.
              </p>
              <p className="mt-4">
                Please choose how you&apos;d like to continue with the import.
              </p>
            </div>
            <div>
              <Button
                className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                style={{
                  boxShadow: "0px 0px 7.2px 0px rgba(0, 0, 0, 0.1)",
                }}
                // onClick={handleDownloadErrorLog}
              >
                <span className="mr-2">Download Error Log</span>
                <DownloadIcon className="h-5 w-5 text-[#188FB7]" />
              </Button>
            </div>
          </div>

          {/* Radio choices */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="errorResolution"
                className="h-4 w-4 text-cyan-600"
                // checked={errorResolution === "autofix"}
                // onChange={() => setErrorResolution("autofix")}
              />
              <span className="text-gray-800">
                Auto-fix missing fields and continue import
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="errorResolution"
                className="h-4 w-4 text-cyan-600"
                // checked={errorResolution === "skip"}
                // onChange={() => setErrorResolution("skip")}
              />
              <span className="text-gray-800">
                Skip the records with errors and proceed
              </span>
            </label>
          </div>

          {/* Errors table */}
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-600">
                  <th className="px-6 py-3 text-sm font-medium">Product ID</th>
                  <th className="px-6 py-3 text-sm font-medium">Product</th>
                  <th className="px-6 py-3 text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {/* {errorRows.map((row) => ( */}
                  <tr key={1}>
                    <td className="px-6 py-3 text-gray-800">{1}</td>
                    <td className="px-6 py-3 text-gray-800">{1}</td>
                    <td className="px-6 py-3 text-gray-700">{1}</td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

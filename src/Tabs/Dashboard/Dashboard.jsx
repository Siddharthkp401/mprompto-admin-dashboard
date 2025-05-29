import React from "react";
import TopMetricsPanel from "./components/TopMetricsPanel";
import TopPerformingNudges from "./components/TopPerformingNudges";
import TopResponses from "./components/TopResponses";
import Button from "../../components/ui/Button";

export default function Dashboard({ setActiveTab }) {
  return (
    <div className="space-y-6">
      <TopMetricsPanel />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[43%]">
          <TopPerformingNudges />
        </div>
        <div className="w-full lg:w-[57%]">
          <TopResponses />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => setActiveTab("analytics")}
          className="w-48 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        >
          Explore Insights
        </Button>
      </div>
    </div>
  );
}

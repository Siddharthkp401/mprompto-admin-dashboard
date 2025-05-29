import React, { useState } from "react";
import Card from "../../../components/ui/Card";
import Select from "../../../components/ui/Select";

const nudges = [
  { id: "Nudges-1", percentage: 97 },
  { id: "Nudges-22", percentage: 40 },
  { id: "Nudges-3", percentage: 37 },
  { id: "Nudges-5", percentage: 88 },
  { id: "Nudges-6", percentage: 78 },
  { id: "Nudges-4", percentage: 44 },
  { id: "Nudges-8", percentage: 10 },
];

export default function TopPerformingNudges() {
  const [selectedFilter, setSelectedFilter] = useState("Users");

  return (
    <Card>
      <div className="flex flex-row items-center justify-between pb-2 pt-4 px-6">
        <h3 className="text-lg font-medium">Top Performing Nudges</h3>
        <Select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          options={[
            { value: "Users", label: "Users" },
            { value: "Products", label: "Products" },
            { value: "Categories", label: "Categories" },
          ]}
        />
      </div>
      <div className="px-6 pb-4">
        <div className="space-y-3">
          {nudges.map((nudge) => (
            <div key={nudge.id} className="flex items-center justify-between">
              <div className="text-sm font-medium">{nudge.id}</div>
              <div className="flex items-center">
                <div className="text-xs font-medium text-emerald-500 bg-[#20C37433] rounded-full px-6">
                  {nudge.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

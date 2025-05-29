import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { FaCircleInfo as Info } from "react-icons/fa6";
import Card from "../../../components/ui/Card";

const metrics = [
  {
    title: "Engagement Rate",
    value: "248",
    change: "+132%",
    data: [
      { value: 40 },
      { value: 30 },
      { value: 45 },
      { value: 50 },
      { value: 45 },
      { value: 60 },
      { value: 55 },
    ],
    color: "#36CFCF",
  },
  {
    title: "Added cart value",
    value: "100",
    change: "+132%",
    data: [
      { value: 30 },
      { value: 40 },
      { value: 35 },
      { value: 45 },
      { value: 35 },
      { value: 50 },
      { value: 45 },
    ],
    color: "#FFDD33",
  },
  {
    title: "Conversion value",
    value: "105",
    change: "+132%",
    data: [
      { value: 35 },
      { value: 30 },
      { value: 40 },
      { value: 45 },
      { value: 50 },
      { value: 45 },
      { value: 60 },
    ],
    color: "#36CFCF",
  },
  {
    title: "Total sales achieved by mPrompto",
    value: "345",
    change: "+132%",
    data: [
      { value: 30 },
      { value: 40 },
      { value: 35 },
      { value: 45 },
      { value: 35 },
      { value: 50 },
      { value: 45 },
    ],
    color: "#FFDD33",
  },
];

export default function TopMetricsPanel() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Top Metrics Panel</h2>
        <div className="text-sm text-gray-500">Number of Last 7 Days</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <div className="flex flex-row items-center justify-between pb-2 pt-4 px-6">
              <h3 className="text-sm font-medium text-gray-500">
                {metric.title}
              </h3>
              <div className="flex items-center text-xs font-medium">
                <p className="text-[#1994BE]">{metric.change}</p>
                <Info className="h-4 w-4 ml-1" />
              </div>
            </div>
            <div className="px-6 pb-4">
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="h-16 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metric.data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={metric.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import Card from "../../components/ui/Card";
import Select from "../../components/ui/Select";
import CircularProgress from "../../components/ui/CircularProgress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import CohortChart from "./components/CohortChart";
import TopPerformingNudges from "../Dashboard/components/TopPerformingNudges";
import TopResponses from "../Dashboard/components/TopResponses";
import AddImg from "../../assets/addedcart.png";
import Saledaided from "../../assets/salesaided.png";

export default function Analytics() {
  const [category, setCategory] = useState("All Category");
  const [product, setProduct] = useState("All Product");
  const [dateRange, setDateRange] = useState("01/03/2025 - 31/03/2025");

  const data = [
    { month: "02", value1: 15, value2: 10 },
    { month: "03", value1: 20, value2: 15 },
    { month: "04", value1: 25, value2: 20 },
    { month: "05", value1: 35, value2: 25 },
    { month: "06", value1: 40, value2: 35 },
    { month: "07", value1: 42, value2: 32 },
    { month: "08", value1: 38, value2: 30 },
    { month: "09", value1: 60, value2: 40 },
    { month: "10", value1: 58, value2: 45 },
    { month: "11", value1: 55, value2: 48 },
    { month: "12", value1: 70, value2: 45 },
  ];

  const metrics = [
    {
      title: "Visitors",
      value: "932",
      increase: "565.7",
    },
    {
      title: "Nudge React",
      value: "395",
      increase: "348.9",
    },
    {
      title: "Added in Cart",
      value: "381",
      increase: null, // No increase shown in the image
    },
    {
      title: "Average engagement time",
      value: "1m 50s",
      increase: "250.1",
    },
  ];

  return (
    <div className="space-y-6">
      <>
        {/* Header with filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-[18px] font-semibold text-[#3d4344]">
            Analytics by
          </h2>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={[
                { value: "All Category", label: "All Category" },
                { value: "Electronics", label: "Electronics" },
                { value: "Clothing", label: "Clothing" },
                { value: "Home", label: "Home" },
              ]}
              className="w-full md:w-48"
            />
            <Select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              options={[
                { value: "All Product", label: "All Product" },
                { value: "Smartphones", label: "Smartphones" },
                { value: "Laptops", label: "Laptops" },
                { value: "Accessories", label: "Accessories" },
              ]}
              className="w-full md:w-48"
            />
            <Select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              options={[
                {
                  value: "01/03/2025 - 31/03/2025",
                  label: "01/03/2025 - 31/03/2025",
                },
                {
                  value: "01/02/2025 - 28/02/2025",
                  label: "01/02/2025 - 28/02/2025",
                },
                {
                  value: "01/01/2025 - 31/01/2025",
                  label: "01/01/2025 - 31/01/2025",
                },
              ]}
              className="w-full md:w-64"
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Circular Progress Charts - Left Section (40%) */}
          <div className="w-full lg:w-[43%]">
            <div className="w-full flex gap-4 mb-6">
              <div className="flex-1">
                <MetricCard
                  icon={<img src={AddImg} className="h-6 w-6 text-gray-600" />}
                  value="494"
                  label="Added cart value"
                  className="px-[20px] py-[18px]"
                />
              </div>
              <div className="flex-1">
                <MetricCard
                  icon={
                    <img src={Saledaided} className="h-6 w-6 text-gray-600" />
                  }
                  value="491"
                  label="Sales aided by mPrompto"
                  className="px-[20px] py-[18px]"
                />
              </div>
            </div>

            <Card>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Total Site Nudge React
                  </h3>
                  <button className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <CircularProgress percentage={81} color="#0891b2" />
                    <p className="mt-4 text-sm font-medium text-gray-700">
                      Audience Reached
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <CircularProgress percentage={62} color="#0891b2" />
                    <p className="mt-4 text-sm font-medium text-gray-700">
                      Total Interactions
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <CircularProgress percentage={22} color="#0891b2" />
                    <p className="mt-4 text-sm font-medium text-gray-700">
                      Unit sales aided by mprompto
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Line Chart - Right Section (60%) */}
          <div className="w-full lg:w-[57%]">
            <Card className="w-full p-[23px]">
              {/* Metrics Section */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <p className="text-gray-500 text-[11px]">{metric.title}</p>
                    <p className="font-semibold text-[16px]">{metric.value}</p>
                    {metric.increase && (
                      <p className="text-green-500 flex items-center text-[10px]">
                        {metric.increase}
                        <CiSettings className="h-4 w-4 ml-1" />
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Chart Section */}
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue1"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#FF8A00"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FFF5EB"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f5f5f5"
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF" }}
                    />
                    <YAxis
                      orientation="right"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF" }}
                      domain={[0, 80]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value1"
                      stroke="#FF8A00"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValue1)"
                      activeDot={{
                        r: 6,
                        fill: "#FF8A00",
                        stroke: "#FFFFFF",
                        strokeWidth: 2,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value2"
                      stroke="#FF8A00"
                      strokeWidth={2}
                      fillOpacity={0}
                      activeDot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[43%]">
            <TopPerformingNudges />
          </div>
          <div className="w-full lg:w-[57%]">
            <TopResponses />
          </div>
        </div>

        <CohortChart />
      </>
    </div>
  );
}

// Metric Card Component
function MetricCard({ icon, value, label, trend, trendUp, className }) {
  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between h-full w-full">
        {/* Icon on the left */}
        <div className="bg-[#1994BE26] p-3 rounded-full flex items-center justify-center">
          {icon}
        </div>

        {/* Text content aligned to right (end) */}
        <div className="flex flex-col items-end justify-center">
          <h3 className="text-[34px] font-bold text-gray-800">{value}</h3>
          <p className="text-[13px] text-gray-500">{label}</p>
          {trend && (
            <p
              className={`text-xs mt-1 ${
                trendUp ? "text-green-500" : "text-red-500"
              }`}
            >
              {trendUp ? "↑" : "↓"} {trend}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

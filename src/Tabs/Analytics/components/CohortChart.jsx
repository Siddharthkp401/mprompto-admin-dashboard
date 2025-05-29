import React, { useState } from "react";
import Card from "../../../components/ui/Card";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import { Sankey } from "react-vis";
import "react-vis/dist/style.css";

export default function CohortChart() {
  // State for filters
  const [dateRange, setDateRange] = useState("01/03/2025 - 31/03/2025");
  const [intentCohort, setIntentCohort] = useState("Intent Cohort");
  const [category, setCategory] = useState("Category");
  const [productPage, setProductPage] = useState("Product Page");
  const [addedCart, setAddedCart] = useState("Added Cart or Not");

  // Sankey diagram data
  const NODES = [
    { name: "18/04/2025" },
    { name: "User Logged In" },
    { name: "Category: Electronics" },
    { name: "Category: Clothing" },
    { name: "Category: Essentials" },
    { name: "Product Page: Smartphone" },
    { name: "Product Page: Laptop" },
    { name: "Product Page: T-Shirts" },
    { name: "Product Page: Shoes" },
    { name: "Product Page: Groceries" },
    { name: "Product Page: Health" },
    { name: "Add to Cart" },
    { name: "Not Added" },
  ];

  const LINKS = [
    { source: 0, target: 1, value: 100 },
    { source: 1, target: 2, value: 40 },
    { source: 1, target: 3, value: 30 },
    { source: 1, target: 4, value: 30 },
    { source: 2, target: 5, value: 20 },
    { source: 2, target: 6, value: 20 },
    { source: 3, target: 7, value: 15 },
    { source: 3, target: 8, value: 15 },
    { source: 4, target: 9, value: 15 },
    { source: 4, target: 10, value: 15 },
    { source: 5, target: 11, value: 15 },
    { source: 5, target: 12, value: 5 },
    { source: 6, target: 11, value: 15 },
    { source: 6, target: 12, value: 5 },
    { source: 7, target: 11, value: 10 },
    { source: 7, target: 12, value: 5 },
    { source: 8, target: 11, value: 5 },
    { source: 8, target: 12, value: 10 },
    { source: 9, target: 11, value: 5 },
    { source: 9, target: 12, value: 10 },
    { source: 10, target: 11, value: 5 },
    { source: 10, target: 12, value: 10 },
  ];

  // Color palette for the nodes
  const nodeColors = [
    "#FFA500", // Orange for date
    "#5D5FEF", // Purple for user logged in
    "#7986CB", // Blue-purple for Electronics category
    "#FF8A65", // Orange-red for Clothing category
    "#81C784", // Green for Essentials category
    "#B39DDB", // Light purple for Smartphone
    "#4DB6AC", // Teal for Laptop
    "#FF8A65", // Orange-red for T-Shirts
    "#FFB74D", // Light orange for Shoes
    "#4DB6AC", // Teal for Groceries
    "#81D4FA", // Light blue for Health
    "#4CAF50", // Green for Add to Cart
    "#F44336", // Red for Not Added
  ];

  // Generate colors for links based on source node
  const getLinkColor = (link) => {
    return nodeColors[link.source];
  };

  // Handle generate button click
  const handleGenerate = () => {
    console.log("Generating chart with filters:", {
      dateRange,
      intentCohort,
      category,
      productPage,
      addedCart,
    });
    // In a real app, this would fetch new data based on filters
  };

  // Handle reset button click
  const handleReset = () => {
    setDateRange("01/03/2025 - 31/03/2025");
    setIntentCohort("Intent Cohort");
    setCategory("Category");
    setProductPage("Product Page");
    setAddedCart("Added Cart or Not");
  };

  return (
    <div className="space-y-6">
      {/* Filter controls */}
      <div className="flex flex-wrap gap-3">
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
          className="w-full sm:w-auto"
        />
        <Select
          value={intentCohort}
          onChange={(e) => setIntentCohort(e.target.value)}
          options={[
            { value: "Intent Cohort", label: "Intent Cohort" },
            { value: "Purchase Intent", label: "Purchase Intent" },
            { value: "Browse Intent", label: "Browse Intent" },
          ]}
          className="w-full sm:w-auto"
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: "Category", label: "Category" },
            { value: "Electronics", label: "Electronics" },
            { value: "Clothing", label: "Clothing" },
            { value: "Essentials", label: "Essentials" },
          ]}
          className="w-full sm:w-auto"
        />
        <Select
          value={productPage}
          onChange={(e) => setProductPage(e.target.value)}
          options={[
            { value: "Product Page", label: "Product Page" },
            { value: "Smartphone", label: "Smartphone" },
            { value: "Laptop", label: "Laptop" },
            { value: "T-Shirts", label: "T-Shirts" },
          ]}
          className="w-full sm:w-auto"
        />
        <Select
          value={addedCart}
          onChange={(e) => setAddedCart(e.target.value)}
          options={[
            { value: "Added Cart or Not", label: "Added Cart or Not" },
            { value: "Added to Cart", label: "Added to Cart" },
            { value: "Not Added", label: "Not Added" },
          ]}
          className="w-full sm:w-auto"
        />
        <Button
          className="bg-[#1994BE] flex text-center items-center justify-center hover:bg-blue-600 h-[30px] text-white"
          onClick={handleGenerate}
        >
          Generate
        </Button>
        <Button
          className="bg-white h-[30px] flex text-center items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>

      {/* Chart card */}
      <Card>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Cohort Chart here
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

          {/* Sankey diagram */}
          <div className="h-[450px] w-full">
            <Sankey
              nodes={NODES.map((node, i) => ({
                ...node,
                color: nodeColors[i],
              }))}
              links={LINKS.map((link) => ({
                ...link,
                color: getLinkColor(link),
                opacity: 0.7,
              }))}
              width={1200}
              height={450}
              nodeWidth={20}
              nodePadding={50}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
              align="justify"
              layout={24}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

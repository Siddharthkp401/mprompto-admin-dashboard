import React, { useState } from "react";
import {
  FaArrowUp as ArrowUp,
  FaArrowDown as ArrowDown,
} from "react-icons/fa6";
import FootwareIcon from "../../assets/footware.png";
import FoodIcon from "../../assets/food.png";
import BeveragesIcon from "../../assets/beverages.png";
import GroomingIcon from "../../assets/grooming.png";
import FashionIcon from "../../assets/fashion.png";
import HealthIcon from "../../assets/health.png";

export default function Setup() {
  // Category data
  const categories = [
    {
      name: "Audio & wearables",
      icon: "headphones",
      records: 25,
      trend: "up",
      highlighted: true,
    },
    {
      name: "Foot ware",
      icon: "boot",
      records: 18,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Food",
      icon: "shopping-bag",
      records: 32,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Beverages",
      icon: "coffee",
      records: 15,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Grooming",
      icon: "scissors",
      records: 12,
      trend: "down",
      highlighted: false,
    },
    {
      name: "Health & Wellness",
      icon: "pill",
      records: 28,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Fashion Accessories",
      icon: "watch",
      records: 22,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Foot ware",
      icon: "boot",
      records: 18,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Food",
      icon: "shopping-bag",
      records: 14,
      trend: "down",
      highlighted: false,
    },
    {
      name: "Beverages",
      icon: "coffee",
      records: 19,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Grooming",
      icon: "scissors",
      records: 9,
      trend: "down",
      highlighted: false,
    },
    {
      name: "Health & Wellness",
      icon: "pill",
      records: 16,
      trend: "down",
      highlighted: false,
    },
    {
      name: "Fashion Accessories",
      icon: "watch",
      records: 24,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Tech & Electronics",
      icon: "smartphone",
      records: 31,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Food",
      icon: "shopping-bag",
      records: 27,
      trend: "up",
      highlighted: false,
    },
    {
      name: "Beverages",
      icon: "coffee",
      records: 20,
      trend: "up",
      highlighted: false,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Category</h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCategories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            isSelected={selectedCategory === index}
            onClick={() => setSelectedCategory(index)}
          />
        ))}
      </div>
    </div>
  );
}
function CategoryCard({ category, isSelected, onClick }) {
  // Get the appropriate icon based on category
  const getIcon = (iconName) => {
    switch (iconName) {
      case "headphones":
        return <img src={FootwareIcon} alt="headphones" className="h-8 w-8" />;
      case "boot":
        return <img src={FootwareIcon} alt="headphones" className="h-8 w-8" />;
      case "shopping-bag":
        return <img src={FashionIcon} alt="headphones" className="h-8 w-8" />;
      case "coffee":
        return <img src={BeveragesIcon} alt="headphones" className="h-8 w-8" />;
      case "scissors":
        return <img src={GroomingIcon} alt="headphones" className="h-8 w-8" />;
      case "pill":
        return <img src={HealthIcon} alt="headphones" className="h-8 w-8" />;
      case "watch":
        return <img src={FashionIcon} alt="headphones" className="h-8 w-8" />;
      case "smartphone":
        return <img src={HealthIcon} alt="headphones" className="h-8 w-8" />;
      default:
        return <img src={FoodIcon} alt="headphones" className="h-8 w-8" />;
    }
  };

  return (
    <div
      className="relative rounded-lg shadow-sm cursor-pointer transition-all duration-200 bg-white hover:shadow-md overflow-hidden group"
      onClick={onClick}
    >
      {/* Arrow icons */}
      <div className="absolute top-4 right-4 z-10">
        {category.trend === "up" ? (
          <ArrowUp className="h-5 w-5 text-green-500" />
        ) : category.trend === "down" ? (
          <ArrowDown className="h-5 w-5 text-red-500" />
        ) : null}
      </div>

      {/* Hover curtain */}
      <div className="absolute inset-0 bg-[#1994BEB2] bg-opacity-70 flex flex-col items-center justify-center text-white text-[30px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <p>{category.records}</p>
        <p>Records</p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center h-full relative z-10">
        <div className="mb-2 p-8">{getIcon(category.icon)}</div>
        <div className="text-base text-gray-700 font-medium bg-[#00000005] w-full p-3">
          {category.name}
        </div>
      </div>
    </div>
  );
}

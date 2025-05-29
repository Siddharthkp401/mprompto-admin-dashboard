import React from "react";
import { LuSquareUserRound as Award } from "react-icons/lu";

export default function Admin() {
  const adminCards = [
    {
      id: "brand",
      title: "Brand & Profile Management",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "team",
      title: "Team & User Management",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "integrations",
      title: "Integrations & API",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "settings",
      title: "mPrompto Settings",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "tag",
      title: "mPrompto Tag Manager",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "billing",
      title: "Subscriptions & Billing",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminCards.map((card) => (
          <AdminCard key={card.id} title={card.title} icon={card.icon} />
        ))}
      </div>
    </div>
  );
}

function AdminCard({ title, icon }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 flex flex-col items-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-gray-800 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}

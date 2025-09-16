import React from "react";
import BrandIcon from "../../assets/brand-profile.png";
import TeamIcon from "../../assets/team-user.png";
import IntegrationsIcon from "../../assets/integrations-api.png";
import BillingIcon from "../../assets/billing.png";
import SecurityIcon from "../../assets/security.png";
import NotificationsIcon from "../../assets/notifications.png";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const adminCards = [
    {
      id: "brand",
      title: "Brand & Profile Management",
      icon: <img src={BrandIcon} className="h-6 w-6 text-gray-600" />,
      onClick: () => navigate("/admin/brand-profile"),
    },
    {
      id: "team",
      title: "Team & User Management",
      icon: <img src={TeamIcon} className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "integrations",
      title: "Integrations & API",
      icon: <img src={IntegrationsIcon} className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "settings",
      title: "mPrompto Settings",
      icon: <img src={IntegrationsIcon} className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "tag",
      title: "mPrompto Tag Manager",
      icon: <img src={IntegrationsIcon} className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "billing",
      title: "Subscriptions & Billing",
      icon: <img src={BillingIcon} className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: <img src={SecurityIcon} className="h-6 w-6 text-gray-600" />,
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: <img src={NotificationsIcon} className="h-6 w-6 text-gray-600" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminCards.map((card) => (
          <AdminCard
            key={card.id}
            title={card.title}
            icon={card.icon}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
}

function AdminCard({ title, icon, onClick }) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6 flex flex-col items-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-gray-800 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}

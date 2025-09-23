import { React, useState, useEffect } from "react";
import { FiAlertTriangle as AlertIcon } from "react-icons/fi";
import { FaCheck as CheckIcon } from "react-icons/fa";
import loaderImage from "../../assets/loader-skeleton.gif";
import Select from "../../components/ui/Select";

export default function SyncCompleted() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const syncStats = {
    totalRecords: 50,
    inserts: 48,
    updated: 2,
    skipped: 0,
  }

  const syncedData = [
    {
      id: 101,
      product: "Running Shoes",
      category: "Footwear",
      url: "www.sony.com/runningshoes",
    },
    {
      id: 102,
      product: "Organic Oats",
      category: "Food",
      url: "www.sony.com/organic-oats",
    },
    {
      id: 103,
      product: "Sparkling Soda",
      category: "Beverages",
      url: "www.sony.com/sparkling-soda",
    },
    {
      id: 104,
      product: "Leather Wallet",
      category: "Fashion Accessories",
      url: "www.sony.com/leather-wallet",
    },
  ];

  useEffect(() => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isSyncing ? (
        <>
          {/* Warning Message */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <AlertIcon className="h-5 w-5 text-orange-500 mr-3" />
              <span className="text-orange-800 font-medium">
                Data is syncing, please do not refresh the page.
              </span>
            </div>
          </div>

          {/* Loading Content Area */}
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Loading Placeholders */}
            <img
              src={loaderImage}
              alt="Loading"
              className="w-96 h-96 object-cover"
            />
          </div>
        </>
      ) : (
        <>
          {/* Success Message */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-green-800 font-medium">
                🎉 Data synchronization finished. You may now verify the data
                and continue your process.
              </span>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-sm text-gray-500 mb-1">Total Records</div>
              <div className="text-3xl font-bold text-blue-500">
                {syncStats.totalRecords}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Inserts</div>
              <div className="text-3xl font-bold text-blue-500">
                {syncStats.inserts}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Updated</div>
              <div className="text-3xl font-bold text-blue-500">
                {syncStats.updated.toString().padStart(2, "0")}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Skipped</div>
              <div className="text-3xl font-bold text-blue-500">
                {syncStats.skipped.toString().padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    <div className="flex items-center">
                      Product ID
                      {/* <ChevronUp className="h-4 w-4 ml-1" /> */}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    URLs
                  </th>
                </tr>
              </thead>
              <tbody>
                {syncedData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-3"
                        />
                        <span className="text-gray-900">{item.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{item.product}</td>
                    <td className="px-6 py-4 text-gray-900">{item.category}</td>
                    <td className="px-6 py-4 text-gray-900">{item.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Rows per page:</span>
              <Select
                // value={rowsPerPage}
                // onChange={(e) => setRowsPerPage(e.target.value)}
                options={[
                  { value: "10", label: "10" },
                  { value: "25", label: "25" },
                  { value: "50", label: "50" },
                ]}
                className="w-20"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
                {"<"}
              </button>
              {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <span className="px-3 py-1 text-sm text-gray-500">...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

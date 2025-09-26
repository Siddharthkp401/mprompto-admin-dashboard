import { React, useState, useMemo } from "react";
import { BsSliders as Sliders } from "react-icons/bs";
import { FaChevronLeft as ChevronLeft } from "react-icons/fa6";
import { FaChevronRight as ChevronRight } from "react-icons/fa";
import { IoMdMore as MoreVertical } from "react-icons/io";
import { useTable, useSortBy, usePagination } from "react-table";

const stats = [
  { id: "todo", label: "My To Do List", value: "02" },
  { id: "all", label: "All Product", value: "50", active: true },
  { id: "unprocessed", label: "Un-Processed", value: "48" },
  { id: "inactive", label: "Inactive Product", value: "02" },
  { id: "active", label: "Active Product", value: "48" },
];

const data = [
  {
    id: 101,
    product: "Running Shoes",
    category: "Footwear",
    processing: "PROCESSING",
    ecommerce: "ACTIVE",
  },
  {
    id: 102,
    product: "Organic Oats",
    category: "Food",
    processing: "PROCESSING",
    ecommerce: "ACTIVE",
  },
  {
    id: 103,
    product: "Sparkling Soda",
    category: "Beverages",
    processing: "PROCESSING",
    ecommerce: "IN ACTIVE",
  },
  {
    id: 104,
    product: "Leather Wallet",
    category: "Fashion Accessories",
    processing: "PROCESSING",
    ecommerce: "ACTIVE",
  },
];

export default function ManageProducts() {
  const [query, setQuery] = useState("");

  const columns = useMemo(
    () => [
      {
        id: "select",
        Header: () => <span className="sr-only">Select</span>,
        Cell: () => (
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            aria-label="Select row"
          />
        ),
        disableSortBy: true,
      },
      {
        accessor: "id",
        Header: ({ column }) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-400">↕</span>
            Product ID
          </div>
        ),
        Cell: ({ value }) => <span className="text-gray-800">{value}</span>,
      },
      {
        accessor: "product",
        Header: ({ column }) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-400">↕</span>
            Product
          </div>
        ),
        Cell: ({ value }) => <span className="text-gray-800">{value}</span>,
      },
      {
        accessor: "category",
        Header: ({ column }) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-400">↕</span>
            Category
          </div>
        ),
        Cell: ({ value }) => <span className="text-gray-800">{value}</span>,
      },
      {
        accessor: "processing",
        Header: ({ column }) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-400">↕</span>
            Processing Status
          </div>
        ),
        Cell: ({ value }) => (
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            {value}
          </span>
        ),
      },
      {
        accessor: "ecommerce",
        Header: ({ column }) => (
          <div className="flex items-center gap-2">
            <span className="text-gray-400">↕</span>
            Ecommerce Status
          </div>
        ),
        Cell: ({ value }) => {
          return value === "ACTIVE" ? (
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              ACTIVE
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              IN ACTIVE
            </span>
          );
        },
      },
      {
        id: "actions",
        Header: "Action",
        Cell: () => (
          <button
            className="relative h-9 w-9 rounded-lg border border-gray-200 text-gray-500 hover:!bg-gray-50"
            style={{ backgroundColor: "white", color: "#6b7280" }}
          >
            <MoreVertical
              size={16}
              color="#6b7280"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </button>
        ),
        disableSortBy: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex, pageSize },
    setPageSize,
    gotoPage,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Manage Product</h1>
      </div>

      {/* Stat tiles */}
      <div className="flex gap-6">
        {stats.map((s) => (
          <div
            key={s.id}
            className={`relative rounded-xl ${
              s.active ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } shadow-sm border ${
              s.active ? "border-gray-800" : "border-gray-200"
            } px-6 py-4 w-[260px] max-w-full`}
          >
            <div
              className={`text-sm ${
                s.active ? "text-white/80" : "text-gray-500"
              }`}
            >
              {s.label}
            </div>
            <div
              className={`mt-1 text-3xl font-bold ${
                s.active ? "text-white" : "text-gray-900"
              }`}
            >
              {s.value}
            </div>
            {s.active && (
              <div className="absolute left-1/2 -bottom-1.5 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm bg-gray-800" />
            )}
          </div>
        ))}
      </div>

      {/* Search and filter bar */}
      <div className="relative rounded-2xl bg-white p-4 shadow-sm border border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="ml-3 relative h-10 w-10 rounded-full border border-gray-200 !bg-white text-gray-500 hover:!bg-gray-50"
            title="Filters"
            style={{ backgroundColor: "white", color: "#6b7280" }}
          >
            <Sliders
              size={16}
              color="#6b7280"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </button>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup, groupIndex) => (
                <tr key={groupIndex} className="bg-gray-50">
                  {headerGroup.headers.map((column, colIndex) => (
                    <th
                      key={colIndex}
                      className={`px-6 py-4 text-left text-gray-600 font-medium ${
                        column.id === "select" ? "w-14" : ""
                      }`}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="bg-white">
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr key={index} className="border-t border-gray-200">
                    {row.cells.map((cell, cellIndex) => {
                      return (
                        <td key={cellIndex} className="px-6 py-4">
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Bottom controls */}
          <div className="flex items-center justify-between px-6 py-4">
            {/* Rows per page */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Rows per page:</span>
              <div className="relative">
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  className="h-9 rounded-lg border border-gray-300 bg-white px-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-2">
              <button
                className="relative h-9 w-9 rounded-lg border border-gray-200 text-gray-600 hover:!bg-gray-50"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                aria-label="Previous page"
                style={{ backgroundColor: "white", color: "#4b5563" }}
              >
                <ChevronLeft
                  size={16}
                  color="#4b5563"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </button>
              {pageOptions.slice(0, 5).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => gotoPage(pageNum)}
                  className={`h-9 w-9 rounded-lg text-sm ${
                    pageIndex === pageNum
                      ? "bg-blue-500 text-white"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {pageNum + 1}
                </button>
              ))}
              {pageOptions.length > 5 && (
                <>
                  <span className="px-1 text-gray-500">…</span>
                  {pageOptions.slice(-2).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => gotoPage(pageNum)}
                      className="h-9 w-9 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {pageNum + 1}
                    </button>
                  ))}
                </>
              )}
              <button
                className="relative h-9 w-9 rounded-lg border border-gray-200 text-gray-600 hover:!bg-gray-50"
                onClick={() => nextPage()}
                disabled={!canNextPage}
                aria-label="Next page"
                style={{ backgroundColor: "white", color: "#4b5563" }}
              >
                <ChevronRight
                  size={16}
                  color="#4b5563"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

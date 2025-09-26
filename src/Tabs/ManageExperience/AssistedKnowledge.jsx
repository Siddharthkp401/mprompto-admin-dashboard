import { useState, useRef, useEffect } from "react";
import { IoMdMore as MoreVertical } from "react-icons/io";
import Button from "../../components/ui/Button";

function useOutsideClick(ref, onOutside) {
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onOutside?.();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onOutside]);
}

export default function AssistedKnowledge() {
  const [policies, setPolicies] = useState([
    { id: "pol-1", name: "soni-policy-nope.pdf" },
    { id: "pol-2", name: "term-and-condition.pdf" },
    { id: "pol-3", name: "privacy-policy.pdf" },
  ]);
  const [faqs, setFaqs] = useState([
    { id: "faq-1", name: "Product-question-answer.csv" },
  ]);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [selected, setSelected] = useState({}); // {id: boolean}

  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setOpenMenuId(null));

  const toggleSelect = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownload = (file) => {
    console.log("Download:", file.name);
    setOpenMenuId(null);
  };

  const handleDelete = (file, type) => {
    if (type === "policies") {
      setPolicies((prev) => prev.filter((f) => f.id !== file.id));
    } else {
      setFaqs((prev) => prev.filter((f) => f.id !== file.id));
    }
    setOpenMenuId(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Assisted Knowledge
        </h1>
        <Button className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white flex items-center">
          + Add New
        </Button>
      </div>

      <div className="rounded-3xl bg-white border border-gray-200 shadow-sm">
        {/* Policies Section */}
        <Section
          title="Policies"
          rows={policies}
          selected={selected}
          onToggleSelect={toggleSelect}
          openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          onDownload={(f) => handleDownload(f)}
          onDelete={(f) => handleDelete(f, "policies")}
        />

        {/* FAQs Section */}
        <Section
          title="FAQs Documents"
          rows={faqs}
          selected={selected}
          onToggleSelect={toggleSelect}
          openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          onDownload={(f) => handleDownload(f)}
          onDelete={(f) => handleDelete(f, "faqs")}
          className="mt-6"
        />
      </div>
    </div>
  );
}

function Section({
  title,
  rows,
  selected,
  onToggleSelect,
  openMenuId,
  setOpenMenuId,
  onDownload,
  onDelete,
  className = "",
}) {
  return (
    <div className={`px-3 sm:px-6 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800 pt-6 pb-3">{title}</h2>

      <div className="rounded-2xl overflow-hidden border border-gray-100">
        {/* Header Row */}
        <div className="grid grid-cols-[1fr_auto] bg-blue-50">
          <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300"
              aria-label="Select all"
            />
            <span className="text-sm font-medium text-gray-700">
              Document Name {"\u2219"}{" "}
            </span>
          </div>
          <div className="flex items-center justify-end px-4 sm:px-6 py-3 text-sm font-medium text-gray-700">
            Action
          </div>
        </div>

        {/* Rows */}
        <ul className="divide-y divide-gray-100">
          {rows.map((file) => (
            <Row
              key={file.id}
              file={file}
              checked={!!selected[file.id]}
              onToggle={() => onToggleSelect(file.id)}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              onDownload={() => onDownload(file)}
              onDelete={() => onDelete(file)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Row({
  file,
  checked,
  onToggle,
  openMenuId,
  setOpenMenuId,
  onDownload,
  onDelete,
}) {
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => {
    if (openMenuId === file.id) setOpenMenuId(null);
  });

  return (
    <li className="grid grid-cols-[1fr_auto] items-center">
      <div className="flex items-center gap-3 px-4 sm:px-6 py-4">
        <input
          type="checkbox"
          className="h-5 w-5 rounded border-gray-300"
          checked={checked}
          onChange={onToggle}
          aria-label={`Select ${file.name}`}
        />
        <span className="text-gray-800">{file.name}</span>
      </div>
      <div className="relative flex items-center justify-end px-4 sm:px-6 py-2">
        <button
          className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          onClick={() => setOpenMenuId(openMenuId === file.id ? null : file.id)}
          aria-label="Row actions"
        >
          <MoreVertical className="h-4 w-4" />
        </button>

        {/* Actions Menu */}
        {openMenuId === file.id && (
          <div
            ref={menuRef}
            className="absolute right-4 top-12 w-56 rounded-xl border border-gray-200 bg-white shadow-xl z-10"
          >
            <button
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
              onClick={onDownload}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100">
                <MoreVertical className="h-4 w-4" />
              </span>
              <span>Download</span>
            </button>
            <div className="h-px bg-gray-100" />
            <button
              className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50"
              onClick={onDelete}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-100">
                <MoreVertical className="h-4 w-4" />
              </span>
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

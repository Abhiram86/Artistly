"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownMenuProps {
  label: string;
  items?: string[];
  children?: React.ReactNode;
}

export default function DropdownMenu({
  label,
  items = [],
  children,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700"
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="mt-2 px-4 py-2 bg-zinc-900 rounded-md shadow space-y-2">
          {children
            ? children
            : items.map((item) => (
                <div key={item} className="text-sm text-zinc-100">
                  {item}
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

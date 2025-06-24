"use client";

import { extractFilter } from "@/lib/extractFilter";
import { createContext, useEffect, useState } from "react";

export interface FilterType {
  category: {
    Dancer: boolean;
    Singer: boolean;
    DJ: boolean;
    Speaker: boolean;
  };
  location: string | null;
  priceRange: {
    min: number | null;
    max: number | null;
  };
}

interface FilterContextType {
  filter: FilterType | null;
  setFilter: React.Dispatch<React.SetStateAction<FilterType | null>>;
}

export const FilterContext = createContext<FilterContextType>({
  filter: null,
  setFilter: () => {},
});

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<FilterType | null>(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filter = extractFilter(searchParams);
    setFilter(filter);
    console.log(filter);
  }, []);
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

import { FilterType } from "@/context/FilterContext";

export function makeSearchParams(filter: FilterType): string {
  const params = new URLSearchParams();

  // Convert selected categories into CSV
  const selectedCategories = Object.entries(filter.category)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  if (selectedCategories.length > 0) {
    params.set("category", selectedCategories.join(","));
  }

  if (filter.location) {
    params.set("location", filter.location);
  }

  if (filter.priceRange.min !== null) {
    params.set("priceMin", filter.priceRange.min.toString());
  }

  if (filter.priceRange.max !== null) {
    params.set("priceMax", filter.priceRange.max.toString());
  }

  return params.toString();
}

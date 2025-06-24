import { FilterType } from "@/context/FilterContext";

export function extractFilter(searchParams: URLSearchParams): FilterType {
  const categoryParam = searchParams.get("category") || "";
  const categoryList = categoryParam.split(",").map((c) => c.trim());

  return {
    category: {
      Dancer: categoryList.includes("Dancer"),
      Singer: categoryList.includes("Singer"),
      DJ: categoryList.includes("DJ"),
      Speaker: categoryList.includes("Speaker"),
    },
    location: searchParams.get("location") || null,
    priceRange: {
      min: searchParams.get("priceMin")
        ? Number(searchParams.get("priceMin"))
        : null,
      max: searchParams.get("priceMax")
        ? Number(searchParams.get("priceMax"))
        : null,
    },
  };
}

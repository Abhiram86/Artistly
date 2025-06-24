import { Artist } from "./artists";
import { FilterType } from "@/context/FilterContext";

export const filterArtists = (data: Artist[], filter: FilterType): Artist[] => {
  return data.filter((artist) => {
    // 1. Category Filtering
    const selectedCategories = Object.keys(filter.category).filter((key) => {
      const keyAsCategory = key as keyof FilterType["category"];
      return filter.category[keyAsCategory];
    });

    if (
      selectedCategories.length > 0 &&
      !artist.category.some((cat) => selectedCategories.includes(cat))
    ) {
      return false;
    }

    // 2. Location Filtering
    if (
      filter.location &&
      artist.location.toLowerCase() !== filter.location.toLowerCase()
    ) {
      return false;
    }

    // 3. Price Range Filtering
    if (
      filter.priceRange.min !== null &&
      artist.priceRange.max < filter.priceRange.min
    ) {
      return false;
    }

    if (
      filter.priceRange.max !== null &&
      artist.priceRange.min > filter.priceRange.max
    ) {
      return false;
    }

    return true;
  });
};

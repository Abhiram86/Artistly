import { Artist } from "./artists";
import { FilterType } from "@/context/FilterContext";

export const filterArtists = (data: Artist[], filter: FilterType): Artist[] => {
  return data.filter((artist) => {
    // 1. Category Filtering
    const selectedCategories = Object.keys(filter.category).filter(
      (key) => filter.category[key]
    );
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(artist.category)
    ) {
      return false; // Artist's category is not among the selected ones
    }

    // 2. Location Filtering
    if (
      filter.location &&
      artist.location.toLocaleLowerCase() !==
        filter.location.toLocaleLowerCase()
    ) {
      return false; // Artist's location does not match the filter
    }

    // 3. Price Range Filtering
    if (
      filter.priceRange.min !== null &&
      artist.priceRange.max < filter.priceRange.min
    ) {
      return false; // Artist's max price is below the filter's min
    }
    if (
      filter.priceRange.max !== null &&
      artist.priceRange.min > filter.priceRange.max
    ) {
      return false; // Artist's min price is above the filter's max
    }

    return true; // Artist passes all active filters
  });
};

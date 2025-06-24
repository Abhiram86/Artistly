import React from "react";
import { Artist } from "@/lib/artists";
import ArtistCard from "./ArtistCard";
import { FilterType } from "@/context/FilterContext";
import { filterArtists } from "@/lib/filterArtists";

export default function ArtistGrid({
  data,
  filter,
}: {
  data: Artist[];
  filter: FilterType;
}) {
  const filteredData = filterArtists(data, filter);
  // console.log(filteredData);
  return (
    <div className="w-full flex justify-center flex-wrap gap-4 mx-auto">
      {filteredData.map((artist) => (
        <ArtistCard key={artist.id} data={artist} />
      ))}
    </div>
  );
}

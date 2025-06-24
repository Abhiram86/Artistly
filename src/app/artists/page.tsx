import { fetchArtists } from "@/api/fetchArtists";
import ArtistGrid from "@/components/Artist/ArtistGrid";
import FilterList from "@/components/FilterList";
import { FilterProvider } from "@/context/FilterContext";
import { Artist } from "@/lib/artists";
import { extractFilter } from "@/lib/extractFilter";
import React from "react";

export default async function Artists({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const artists = (await fetchArtists()) as Artist[];
  const params = await searchParams;
  const urlString = new URLSearchParams(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value)])
  ).toString();

  const filter = extractFilter(new URLSearchParams(urlString));

  return (
    <section className="mt-8 md:mt-2 space-y-2 p-4">
      <FilterProvider>
        <FilterList />
        <ArtistGrid data={artists} filter={filter} />
      </FilterProvider>
    </section>
  );
}

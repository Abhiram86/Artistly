import { fetchSubmissions } from "@/api/fetchSubmissions";
import ArtistTable from "@/components/Artist/ArtistTable";
import { Artist } from "@/lib/artists";
import React from "react";

export default async function Dashboard() {
  const artistSubmissions = (await fetchSubmissions()) as Artist[];
  return (
    <section className="p-4 mt-6 md:mt-0 max-w-272 w-full mx-auto space-y-6">
      <div className="w-fit">
        <h1 className="text-3xl text-start font-semibold text-pretty">
          Artist Submissions
        </h1>
      </div>
      {artistSubmissions.length > 0 ? (
        <div className="mx-auto">
          <ArtistTable data={artistSubmissions} />
        </div>
      ) : (
        <p>No submissions yet</p>
      )}
    </section>
  );
}

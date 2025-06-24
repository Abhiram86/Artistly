"use client";

import React from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { Artist } from "@/lib/artists";

export default function ArtistTableView({ data }: { data: Artist }) {
  return (
    <Button
      onClick={() => console.log(data)}
      variant={"link"}
      className="cursor-pointer text-sky-600 flex items-center gap-1"
    >
      <p>View</p>
      <ExternalLink className="w-4 h-4" />
    </Button>
  );
}

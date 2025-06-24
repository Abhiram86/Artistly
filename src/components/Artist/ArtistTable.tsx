import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Artist } from "@/lib/artists";
import PriceRange from "../PriceRange";
import ArtistTableView from "./ArtistTableView";

export default function ArtistTable({ data }: { data: Artist[] }) {
  return (
    <Table>
      <TableCaption>{data.length} artist submissions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-neutral-50">Name</TableHead>
          <TableHead className="text-neutral-50">Category</TableHead>
          <TableHead className="text-neutral-50">Location</TableHead>
          <TableHead className="text-neutral-50">Price</TableHead>
          <TableHead className="text-neutral-50"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="divide-neutral-700">
        {data.map((artist) => (
          <TableRow key={artist.id} className="hover:bg-neutral-800">
            <TableCell>{artist.name}</TableCell>
            <TableCell>{artist.category}</TableCell>
            <TableCell>{artist.location}</TableCell>
            <TableCell className="font-medium">
              <PriceRange
                min={artist.priceRange.min}
                max={artist.priceRange.max}
              />
            </TableCell>
            <TableCell>
              <ArtistTableView data={artist} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

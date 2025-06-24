import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Artist } from "@/lib/artists";
import Image from "next/image";
import { Banknote, ExternalLink, MapPin, Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import PriceRange from "../PriceRange";

export default function ArtistCard({ data }: { data: Artist }) {
  return (
    <Card className="bg-neutral-800 w-72 py-2 border-neutral-700">
      <CardHeader className="px-2">
        <Image
          src={data.image ?? "/img/default_profile.jpeg"}
          alt={data.name}
          width={50}
          height={50}
          priority
          className="w-72 rounded-lg h-48 object-cover"
        />
        <p className="text-neutral-50 text-lg font-medium">{data.name}</p>
      </CardHeader>
      <div className="text-neutral-50">
        <CardContent className="px-2 flex flex-col">
          <div className="flex gap-2 items-center">
            <Settings2 className="w-4 h-4" />
            <p>{data.category}</p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin className="w-4 h-4" />
            <p>{data.location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Banknote className="w-4 h-4" />
            <PriceRange min={data.priceRange.min} max={data.priceRange.max} />
          </div>
        </CardContent>
      </div>
      <CardFooter className="px-2 text-neutral-50">
        <Button variant={"secondary"} className="w-full cursor-pointer">
          <p className="flex items-center gap-1">
            Ask for quote{" "}
            <span>
              <ExternalLink className="w-4 h-4" />
            </span>
          </p>
        </Button>
      </CardFooter>
    </Card>
  );
}

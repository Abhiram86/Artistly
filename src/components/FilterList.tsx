"use client";

import { SlidersHorizontal } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogClose, DialogHeader } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { FilterContext, FilterType } from "@/context/FilterContext";
import { makeSearchParams } from "@/lib/makeSearchParams";
import { useRouter } from "next/navigation";

export default function FilterList() {
  const [open, setOpen] = useState(false);
  const { filter, setFilter } = useContext(FilterContext);

  const [selectedCategory, setSelectedCategory] = useState<
    Pick<FilterType, "category">
  >({
    category: {
      Dancer: true,
      Singer: true,
      DJ: true,
      Speaker: true,
    },
  });

  const [location, setLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 100000,
  });

  const router = useRouter();

  const handleToggleCategory = (category: keyof FilterType["category"]) => {
    setSelectedCategory((prev) => ({
      ...prev,
      category: {
        ...prev.category,
        [category]: !prev.category[category],
      },
    }));
  };

  const categories = Object.keys(selectedCategory.category) as (
    | "Dancer"
    | "Singer"
    | "DJ"
    | "Speaker"
  )[];

  useEffect(() => {
    if (filter) {
      setSelectedCategory({ category: filter.category });
      setLocation(filter.location ?? "");
      setPriceRange({
        min: filter.priceRange.min ?? 0,
        max: filter.priceRange.max ?? 100000,
      });
    }
  }, [filter]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newFilter: FilterType = {
            category: selectedCategory.category,
            location: location.length > 0 ? location : null,
            priceRange: {
              min: Number.isNaN(priceRange.min) ? null : priceRange.min,
              max: Number.isNaN(priceRange.max) ? null : priceRange.max,
            },
          };
          setFilter(newFilter);
          const params = filter && makeSearchParams(newFilter);
          router.push(`/artists?${params}`);
          console.log(newFilter);
          setOpen(false);
        }}
      >
        <DialogTrigger className="flex items-center fixed gap-1 bg-zinc-800 px-3 py-1.5 rounded-md hover:bg-zinc-700 cursor-pointer">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </DialogTrigger>
        <DialogContent className="sm:max-w-224 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-zinc-800 rounded-md ring-1 ring-zinc-700">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-start text-xl font-semibold">
              Filters
            </DialogTitle>
            <DialogDescription className="text-start text-sm font-light text-zinc-400">
              Add suitable filters to your search
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h2>Category</h2>
              <div className="flex space-x-4 gap-1">
                {categories.map((cat) => (
                  <div key={cat} className="flex items-center gap-1">
                    <Checkbox
                      name={cat}
                      onCheckedChange={() => handleToggleCategory(cat)}
                      id={cat}
                      checked={selectedCategory.category[cat]}
                    />
                    <Label htmlFor={cat}>{cat}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                name="location"
                placeholder="ex. Mumbai"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <h2>Price Range</h2>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price-min">Min</Label>
                  <Input
                    id="price-min"
                    name="priceRangeMin"
                    type="number"
                    placeholder="min value"
                    value={String(priceRange.min)}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        min: parseInt(e.target.value),
                      }))
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price-max">Max</Label>
                  <Input
                    id="price-max"
                    name="priceRangeMax"
                    type="number"
                    placeholder="max value"
                    value={String(priceRange.max)}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        max: parseInt(e.target.value),
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              variant={"secondary"}
              type="submit"
              className="flex-1 cursor-pointer"
            >
              Apply Filters
            </Button>
            <DialogClose
              asChild
              className="flex-1 ring ring-zinc-800 cursor-pointer hover:bg-zinc-800"
            >
              <Button>Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

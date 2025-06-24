"use client";

import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const categories = ["Singers", "Dancers", "Speakers", "DJ"] as const;

const CategoryEnum = z.enum(categories);

const languages = [
  "Hindi",
  "English",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Kannada",
  "Marathi",
  "Bengali",
  "Gujarati",
  "Odia",
  "Punjabi",
  "Urdu",
] as const;

const LanguageEnum = z.enum(languages);

const OnboardFormSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    bio: z.string().min(1, "Bio is required"),
    category: z.array(CategoryEnum).min(1, "Select at least one category"),
    language: z.array(LanguageEnum).min(1, "Select at least one language"),
    Fee: z.object({
      min: z.number().min(0, "Min fee must be a non-negative number"),
      max: z.number().min(0, "Max fee must be a non-negative number"),
    }),

    profileImage: z
      .any()
      .refine(
        (fileList) => {
          if (!fileList || !(fileList instanceof FileList)) return false;
          const file = fileList.item(0);
          if (!file) return true;
          return file.type.startsWith("image/");
        },
        {
          message: "Please upload a valid image file",
        }
      )
      .optional(),
    location: z.string().min(1, "Location is required"),
  })
  .superRefine((data, ctx) => {
    if (data.Fee.max < data.Fee.min) {
      ctx.addIssue({
        path: ["Fee", "max"],
        code: z.ZodIssueCode.custom,
        message: "Max fee must be ≥ min fee",
      });
    }
  });

export default function Onboard() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(OnboardFormSchema),
  });
  const onSubmit = (data: z.infer<typeof OnboardFormSchema>) =>
    console.log(data);

  return (
    <div className="px-4">
      <div className="mt-16 md:mt-8 space-y-2 sm:max-w-187 w-full mx-auto ring-2 ring-zinc-700 p-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-medium">Onboard as an Artist</h1>
          <p className="text-zinc-400 text-sm">
            Fill all the details caretfully
          </p>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Name</Label>
            <Input
              className="border-zinc-700 bg-zinc-800"
              id="email"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="bio">Bio</Label>
            <Input
              className="border-zinc-700 bg-zinc-800"
              id="bio"
              {...register("bio")}
            />
            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="Category">Category</Label>
            <Dropdown
              control={control}
              name="category"
              label="Category"
              options={categories}
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="languages">Languages Spoken</Label>
            <Dropdown
              control={control}
              name="language"
              label="Languages"
              options={languages}
            />
            {errors.language && (
              <p className="text-sm text-red-500">{errors.language.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="fee">Fee Range</Label>
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col">
                <Input
                  className="border-zinc-700 bg-zinc-800"
                  type="number"
                  {...register("Fee.min", { valueAsNumber: true })}
                />
                {errors.Fee && errors.Fee.min && (
                  <p className="text-sm text-red-500">
                    {errors.Fee.min.message}
                  </p>
                )}
              </div>
              <div className="flex-1 flex flex-col">
                <Input
                  className="border-zinc-700 bg-zinc-800"
                  type="number"
                  {...register("Fee.max", { valueAsNumber: true })}
                />
                {errors.Fee && errors.Fee.max && (
                  <p className="text-sm text-red-500">
                    {errors.Fee.max.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="profileImage">Profile Image (optional)</Label>
            <Input
              className="border-zinc-700 bg-zinc-800 file:text-neutral-50 file:px-2 text-neutral-400 file:cursor-pointer"
              id="profileImage"
              type="file"
              {...register("profileImage")}
            />
            {errors.profileImage && errors.profileImage.message && (
              <p className="text-sm text-red-500">
                {errors.profileImage.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="location">Location</Label>
            <Input
              className="border-zinc-700 bg-zinc-800"
              id="location"
              {...register("location")}
            />
            {errors.location && (
              <p className="text-sm text-red-500">{errors.location.message}</p>
            )}
          </div>
          <Button
            type="submit"
            variant={"secondary"}
            className="w-full cursor-pointer"
          >
            Apply as an Artist
          </Button>
        </form>
      </div>
    </div>
  );
}

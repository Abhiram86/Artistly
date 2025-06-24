import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description: string;
  imagSrc: string;
}

export default function CategoryCard({ data }: { data: CategoryCardProps }) {
  return (
    <Card className="bg-neutral-800 border-neutral-700 shadow-sm shadow-neutral-600">
      <CardHeader>
        <CardTitle className="text-neutral-50">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={data.imagSrc}
          alt={data.title}
          width={500}
          height={500}
          className="w-48 rounded-lg h-48 object-cover"
        />
      </CardContent>
    </Card>
  );
}

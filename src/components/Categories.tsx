import React from "react";

export default function Categories({ categories }: { categories: string[] }) {
  return <p>{categories.join(", ")}</p>;
}

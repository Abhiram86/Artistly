import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category() {
  return (
    <>
      <CategoryCard
        data={{
          title: "Singers",
          description: "Singers are the artists of vocals",
          imagSrc: "/img/sing.jpg",
        }}
      />
      <CategoryCard
        data={{
          title: "Dancers",
          description: "Dance is the art of movement.",
          imagSrc: "/img/dance.jpg",
        }}
      />
      <CategoryCard
        data={{
          title: "Speaker",
          description: "Speakers are the artists of thoughts",
          imagSrc: "/img/speaker.jpg",
        }}
      />
      <CategoryCard
        data={{
          title: "DJ",
          description: "DJs are the artists of vibe",
          imagSrc: "/img/dj.jpg",
        }}
      />
    </>
  );
}

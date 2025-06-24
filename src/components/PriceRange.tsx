import React from "react";

export default function PriceRange({ min, max }: { min: number; max: number }) {
  return (
    <p>
      ₹{min} - ₹{max}
    </p>
  );
}

import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="flex gap-2">
        <p>Loading </p>
        <LoaderCircle className="animate-spin" />
      </div>
    </div>
  );
}

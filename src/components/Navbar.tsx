// import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  return (
    <header className="md:p-4 md:border-b border-neutral-700">
      <nav className="hidden justify-between md:flex">
        <h1>Artistly</h1>
        <ul className="flex gap-4">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/artists">
            Artists
          </Link>
          <Link className="hover:underline" href="/onboard">
            Onboard
          </Link>
          <Link className="hover:underline" href="/dashboard">
            Dashboard
          </Link>
        </ul>
      </nav>
      {/* <Menu className="md:hidden relative left-4 top-2" /> */}
    </header>
  );
}

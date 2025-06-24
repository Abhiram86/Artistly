"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <aside>
      <nav
        className={`fixed z-20 space-y-2 block md:hidden top-0 p-2 w-56 left-0 h-full bg-zinc-800 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Menu className="ml-2 cursor-pointer" onClick={() => setOpen(!open)} />
        <div className="flex flex-col h-[calc(100dvh-3rem)] justify-between">
          <ul className="flex flex-col space-x-2">
            <Link href={"/"} className="w-full">
              <li className="p-2 text-sm rounded-sm hover:bg-neutral-100 hover:text-neutral-950">
                Home
              </li>
            </Link>
            <Link href={"/artists"} className="w-full">
              <li className="p-2 text-sm rounded-sm hover:bg-neutral-100 hover:text-neutral-950">
                Artists
              </li>
            </Link>
            <Link href={"/onboard"} className="w-full">
              <li className="p-2 text-sm rounded-sm hover:bg-neutral-100 hover:text-neutral-950">
                Onboard
              </li>
            </Link>
            <Link href={"/dashboard"} className="w-full">
              <li className="p-2 text-sm rounded-sm hover:bg-neutral-100 hover:text-neutral-950">
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <Menu
        className="absolute md:hidden top-2 left-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      />
    </aside>
  );
}

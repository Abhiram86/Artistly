import Category from "@/components/Category/Category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="p-4 mt-6 md:mt-0 divide-y max-w-272 mx-auto divide-neutral-600 space-y-6">
      <section>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="space-y-2 w-fit">
            <h1 className="text-3xl font-semibold text-pretty">
              Discover Talented Artists Around You
            </h1>
            <p className="text-lg font-medium text-neutral-500">
              Book singers, DJs, dancers, speakers and more for your next big
              event.”
            </p>
          </div>
          <Image
            src={"/img/party.jpg"}
            alt="party"
            width={800}
            height={800}
            priority
            className="rounded-lg w-full max-w-226 ring-2 ring-red-500"
          />
        </div>
        <div className="flex justify-center my-6">
          <Link
            href={"/artists"}
            className="bg-neutral-50 w-full max-w-226 text-center text-neutral-950 text-sm px-4 py-2 rounded-md hover:bg-neutral-200"
          >
            Explore Artists
          </Link>
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-4">
        <Category />
      </section>
    </div>
  );
}

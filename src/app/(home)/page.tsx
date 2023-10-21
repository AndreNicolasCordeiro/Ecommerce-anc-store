"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <>
      <div className="p-5">
        <Image
          src="/banner01.png"
          height={0}
          width={0}
          className="h-auto w-full rounded-2xl"
          sizes="100vw"
          alt="Desconto de até 50% de desconto nesse mês!"
        />

        <div className="mt-8">
          <Categories />
        </div>
      </div>
    </>
  );
}

import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import PromoBanner from "./components/promo-banner";
import TitleSection from "./components/title-section";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  const speakers = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "speakers",
      },
    },
  });

  return (
    <>
      <div className="flex flex-col gap-8 py-8">
        <PromoBanner src="/banner01.png" alt="Desconto de até 50% nesse mês!" />

        <div className="mt-8 px-5">
          <Categories />
        </div>

        <div className="mt-8">
          <TitleSection>Ofertas</TitleSection>
          <ProductList products={deals} />
        </div>

        <PromoBanner src="/banner02.png" alt="Black Friday 50% off" />

        <div className="mt-8">
          <TitleSection>Keyboards</TitleSection>
          <ProductList products={keyboards} />
        </div>

        <div className="mt-8">
          <TitleSection>Mouses</TitleSection>
          <ProductList products={mouses} />
        </div>

        <div className="mt-8">
          <TitleSection>Speakers</TitleSection>
          <ProductList products={speakers} />
        </div>
      </div>
    </>
  );
}

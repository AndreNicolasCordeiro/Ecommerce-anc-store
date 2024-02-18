import { prismaClient } from "@/lib/prisma";
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

  const chevrolet = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "chevrolet",
      },
    },
  });

  const volkswagen = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "volkswagen",
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
        <PromoBanner src="/backdrop.jpg" alt="Desconto de até 50% nesse mês!" />

        <div className="mt-8 px-5">
          <Categories />
        </div>

        <div className="mt-8">
          <TitleSection>Ofertas</TitleSection>
          <ProductList products={deals} />
        </div>

        <PromoBanner src="/banner02.png" alt="Black Friday 50% off" />

        <div className="mt-8">
          <TitleSection>Chevrolet</TitleSection>
          <ProductList products={chevrolet} />
        </div>

        <div className="mt-8">
          <TitleSection>Volkswagen</TitleSection>
          <ProductList products={volkswagen} />
        </div>
      </div>
    </>
  );
}

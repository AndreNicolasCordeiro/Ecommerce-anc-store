import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-image";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <>
      <div className="">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
      </div>
    </>
  );
};

export default ProductDetailsPage;

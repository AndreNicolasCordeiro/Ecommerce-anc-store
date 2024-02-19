import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <Link href={`/product/${product.slug}`}>
        <div className="flex min-w-[156px] flex-col gap-4">
          <div className="relative flex h-[10rem] overflow-hidden w-full items-center justify-center rounded-lg bg-accent  border-2 border-transparent transition duration-300 hover:border-primary">
            <Image
              src={product.imageUrls[0]}
              height={0}
              width={0}
              sizes="100vw"
              className="h-full w-full"
              style={{
                objectFit: "cover",
              }}
              alt={product.name}
            />

            {product.discountPercentage > 0 && (
              <DiscountBadge className="absolute left-3 top-3">
                {product.discountPercentage}
              </DiscountBadge>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              {product.name}
            </p>

            <div className="flex items-center gap-2">
              {product.discountPercentage > 0 ? (
                <>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                    R$ {product.formattedPrice}
                  </p>

                  <p className="opacity-75{ overflow-hidden text-ellipsis whitespace-nowrap text-sm text-xs line-through">
                    R$ {Number(product.basePrice).toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                  R$ {product.formattedPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;

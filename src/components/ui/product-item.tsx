import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowBigDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <Link href={`/product/${product.slug}`}>
        <div className="flex flex-col gap-4">
          <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
            <Image
              src={product.imageUrls[0]}
              height={0}
              width={0}
              sizes="100vw"
              className="h-[90px] max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
              alt={product.name}
            />

            {product.discountPercentage > 0 && (
              <Badge className="absolute left-2 top-2">
                <ArrowBigDown size={12} /> {product.discountPercentage}%
              </Badge>
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
                    R$ {product.totalPrice.toFixed(2)}
                  </p>

                  <p className="opacity-75{ overflow-hidden text-ellipsis whitespace-nowrap text-sm text-xs line-through">
                    R$ {Number(product.basePrice).toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                  R$ {product.basePrice.toFixed(2)}
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

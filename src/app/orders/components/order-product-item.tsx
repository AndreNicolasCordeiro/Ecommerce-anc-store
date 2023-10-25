import { computeProductTotalPrice } from "@/helpers/product"
import { OrderProduct, Prisma } from "@prisma/client"
import Image from "next/image"

interface OrderProductItemProps {
    orderProduct: Prisma.OrderProductGetPayload<{
        include: {
            product: true
        }
    }>
}

const OrderProductItem = ({orderProduct}: OrderProductItemProps) => {

    const productWithTotalPrice = computeProductTotalPrice(orderProduct.product)
    return (
        <div className="flex items-center gap-4">
            <div className="bg-accent rounded-lg w-[77px] h-[77px] flex items-center justify-center">
                <Image
                    src={orderProduct.product.imageUrls[0]}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
                    alt={orderProduct.product.name}
                />
            </div>

            <div className="flex flex-col gap-1 w-full">
            <div className="flex bg-accent px-3 py-1 rounded-md w-fit">
                            <p className="text-[10px]">Vendido e entregue por <span className="font-bold">ANC STORE</span></p>
                        </div>
                    <p className="text-xs">{orderProduct.product.name}</p>

                    <div className="flex items-center gap-1 justify-between">
                     <div className="flex items-center gap-1">
                        <p className="text-sm font-bold">R$ {productWithTotalPrice.totalPrice.toFixed(2)}</p>

                    {productWithTotalPrice.discountPercentage > 0 && (
                        <p className="opacity-70 line-through text-xs">R$ {Number(productWithTotalPrice.basePrice).toFixed(2)}</p>
                    )}
                    </div>

                    <p className="text-xs opacity-60">Qntd: {orderProduct.quantity}</p>
                    </div>
            </div>
        </div>
    )

}

export default OrderProductItem
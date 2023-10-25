import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { computeProductTotalPrice } from "@/helpers/product";
import { Order, Prisma } from "@prisma/client";
import {format} from 'date-fns';
import { useMemo } from "react";
import { getOrderStatus } from "../helpers/status";
import OrderProductItem from "./order-product-item";

interface OrderItemProps {
    order: Prisma.OrderGetPayload<{
        include: {
            orderProducts: {
                include: {product: true}
            }
        }
    }>
}

const OrderItem = ({order}: OrderItemProps) => {

    const subtotal = useMemo(() => {
        return order.orderProducts.reduce((acc, orderProduct) => {
            return acc + Number(orderProduct.product.basePrice) * orderProduct.quantity;
        }, 0)

    }, [order.orderProducts])

    const total = useMemo(() => {
        return order.orderProducts.reduce((acc, product) => {
        const productWithTotalPrice = computeProductTotalPrice(product.product)
            return acc + productWithTotalPrice.totalPrice * product.quantity;
        }, 0)

    }, [order.orderProducts])

    const totalDiscount = subtotal - total;
    
    return (
        <Card className="px-5">
            <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value={order.id}>
                    <AccordionTrigger>
                        <div className="flex flex-col gap-1 text-left">
                            <h2>Pedido com {order.orderProducts.length} produto(s)</h2>
                            <p className="opacity-60 text-xs">Feito em {format(order.createdAt, "d/MM/y 'às' HH:mm")}</p>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="font-bold">
                                <p>Status</p>
                                <p className="text-primary">{getOrderStatus(order.status)}</p>
                            </div>

                            <div>
                                <p className="font-bold">Data</p>
                                <p className="opacity-60">{format(order.createdAt, "dd/MM/y")}</p>
                            </div>

                            <div>
                                <p className="font-bold">Pagamento</p>
                                <p className="opacity-60">Cartão</p>
                            </div>
                        </div>

                        {order.orderProducts.map(orderProduct => (
                            <OrderProductItem orderProduct={orderProduct} key={orderProduct.id}/>
                        ))}

                        <div className="flex flex-col w-full gap-1 text-xs">
                            <Separator />
                        
                        <div className="flex w-full justify-between py-[10px]">
                            <p>Subtotal</p>
                            <p>R${subtotal.toFixed(2)}</p>
                        </div>
                        
                        <Separator />
                        <div className="flex w-full justify-between py-[10px]">
                            <p>Entrega</p>
                            <p>Grátis</p>
                        </div>
                    
                        <Separator />
                        <div className="flex w-full justify-between py-[10px]">
                            <p>Descontos</p>
                            <p>-R$ {totalDiscount.toFixed(2)}</p>
                        </div>

                        <Separator />
                        <div className="flex w-full justify-between py-[10px] text-sm font-bold">
                            <p>Total</p>
                            <p>R$ {total.toFixed(2)}</p>
                        </div>
                        </div>
                    </div>
                </AccordionContent>

                </AccordionItem>

               
            </Accordion>
        </Card>
    )

}

export default OrderItem;
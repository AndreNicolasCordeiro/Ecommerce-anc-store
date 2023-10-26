import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageCheck } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

export const dynamic = "force-dynamic"

async function OrderPage() {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
          <h2 className="font-bold">Acesso Negado!</h2>
          <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
        </div>
      );
    }

    const orders = await prismaClient.order.findMany({
        where: {
            userId: session.user.id,
        },
        include: {
            orderProducts: {
                include: {
                    product: true,
                }
            }
        }
    })

    return (
        <div className="p-5">
            <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.365rem] text-base font-bold uppercase"
        variant="outline"
      >
        <PackageCheck size={16} />
        Meus pedidos
      </Badge>


        <div className="flex flex-col gap-5 mt-5">
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
    </div>
    )
}

export default OrderPage;
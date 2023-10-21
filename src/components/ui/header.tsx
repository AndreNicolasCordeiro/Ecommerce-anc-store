import { HomeIcon, List, ListOrderedIcon, LogIn, MenuIcon, PercentCircle, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return (
        <>
        <Card className="flex p-5 justify-between p-[2rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <MenuIcon />
                 </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>

                <div className="mt-2 flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                    <LogIn size={16} />
                    Fazer Login
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2">
                    <HomeIcon size={16} />
                   Início
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2">
                    <PercentCircle size={16} />
                    Ofertas
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2">
                    <ListOrderedIcon size={16} />
                   Catálogo
                </Button>

                </div>
                </SheetContent>
            </Sheet>

            <h1 className="text-lg font-semibold"><span className="text-primary">ANC</span> Store</h1>

            <Button variant="outline" size="icon">
                <ShoppingCart/>
            </Button>
        </Card>
       </>
    );
}

export default Header;
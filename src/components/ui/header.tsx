"use client"

import { HomeIcon, List, ListOrderedIcon, LogIn, LogOut, MenuIcon, PercentCircle, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

import {signIn, signOut, useSession} from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }

    const handleLogoutClick = async () => {
        await signOut();
    }
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

                {status === 'authenticated' && data?.user &&(
                    <div className="flex flex-col">
                   <div className="flex items-center gap-2 my-4">
                     <Avatar>
                        <AvatarFallback>
                            {data.user.name?.[0].toUpperCase()}
                        </AvatarFallback>

                        {data.user.image && <AvatarImage src={data.user.image} />}
                    </Avatar>
                    <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas Compras!</p>
                    </div>

                   </div>
                   <Separator />
                   </div>
                )}    

                <div className="mt-2 flex flex-col gap-2">
                    {status === 'unauthenticated' && (
                        <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                        <LogIn size={16} />
                        Fazer Login
                    </Button>
                    )}
                
                {status === 'authenticated' && (
                    <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                    <LogOut size={16} />
                    Fazer Logout
                </Button>
                )}
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
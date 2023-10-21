import { MenuIcon, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return (
        <>
        <Card className="flex p-5 justify-between p-[2rem] items-center">
            <Button variant="outline" size="icon">
                <MenuIcon />
            </Button>

            <h1 className="text-lg font-semibold"><span className="text-primary">ANC</span> Store</h1>

            <Button variant="outline" size="icon">
                <ShoppingCart/>
            </Button>
        </Card>
       </>
    );
}

export default Header;
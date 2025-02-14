import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  CarFrontIcon,
  RocketIcon,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">...</div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-sx">
          <div>Subtotal:</div>
          <div>...</div>
        </div>

        <Separator className="my-5" />

        <div className="text-center">
          <Button>Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

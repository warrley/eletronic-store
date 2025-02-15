"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialog";

export const CartSidebar = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { cart } = useCartStore(state => state)
  
  let numberTotal = 0;


  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
    numberTotal += item.quantity
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
          {cart.length > 0 && 
            <div className="rounded-full absolute bg-red-600 -right-1 -top-1 size-5 text-xs text-white flex items-center justify-center">{numberTotal}</div>
          }
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">
          {cart.map(item => (
            <CartItem key={item.product.id} item={item}/>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-sx">
          <div>Subtotal:</div>
          <div>R$ {subtotal.toFixed(2)}</div>
        </div>

        <Separator className="my-5" />

        <div className="text-center">
          <Button onClick={() => setCheckoutOpen(true)} disabled={cart.length === 0}>Checkout</Button>
        </div>

        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen}/>
      </SheetContent>
    </Sheet>
  );
};

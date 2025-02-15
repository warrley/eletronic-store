import { useCartStore } from "@/store/cart-store"
import { Cart } from "@/types/cart"
import { Button } from "@/components/ui/button"
import { Minus, MinusIcon, MinusSquare, Plus, PlusIcon } from "lucide-react"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state => state)

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1)
    }

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1)
    }

    return (
        <div className="flex items-center gap-2">
            <Button onClick={handlePlusButton} className="size-5" variant="outline" size="icon"><PlusIcon className="size-3"/></Button>
            <div>{cartItem.quantity}</div>
            <Button onClick={handleMinusButton} className="size-5" variant="outline" size="icon"><MinusIcon className="size-3"/></Button>
        </div>
    )
}
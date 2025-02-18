import { useCartStore } from "@/store/cart-store"
import { userCheckoutStore } from "@/store/checkout-store"

export const generateMessage = () => {
    const { name, address } = userCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);

    let orderProducts = [];
    for (let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`)
    }

    return `**Dados do cliente:**
Name: ${name}
Address: ${address.street}, ${address.number}, (${address.complement})
${address.district}, ${address.city}/${address.state}
---------
**Order:** 
${orderProducts.join("\n")}`; 
}
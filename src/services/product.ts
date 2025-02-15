import { Product } from "@/types/product";
import { products } from "@/data/products"

export const getAllProduct = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
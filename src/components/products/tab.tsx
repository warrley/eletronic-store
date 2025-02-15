import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProduct } from "@/services/product";
import { Product } from "@/types/product";
import { PoductEmpty } from "@/components/products/empty"
import { ProductItem } from "./item";

type Tab = {
    title: string;
    value: string;
    products: Product[]
}

export const ProductsTab = async () => {
    const products = await getAllProduct();

    const tabs = [
        {
            title: 'Keyboards',
            value: "keyboard",
            products: products.filter(item => item.category === 'keyboard')
        },
        {
            title: 'Mouses',
            value: "mouse",
            products: products.filter(item => item.category === 'mouse')
        },
        {
            title: 'Headsets',
            value: "headset",
            products: products.filter(item => item.category === 'headset')
        },
        {
            title: 'Laptops',
            value: "laptop",
            products: products.filter(item => item.category === 'laptop')
        },
        {
            title: 'Monitors',
            value: "monitor",
            products: products.filter(item => item.category === 'monitor')
        }
    ];

    return (
        <Tabs defaultValue="keyboard">
            <TabsList className="flex">
                {tabs.map((item, index) => (
                    <TabsTrigger key={index} value={item.value} className="flex-1">{item.title}</TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((item, index) => (
               <TabsContent key={index} value={item.value} className="mt-6">
                    {item.products.length > 0 &&
                        <div  className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product} />
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && <PoductEmpty/>}
                </TabsContent>
            ))}
                

            
            <TabsContent value="tab2" className="mt-6">
                Content of TAB 2
            </TabsContent>
        </Tabs>
    );
}
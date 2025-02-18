import { userCheckoutStore } from "@/store/checkout-store"
import { Button } from "../ui/button";
import Link from "next/link";

export const StepFinish = () => {
    const { name } = userCheckoutStore(state => state);

    const message = 'oi, tudo bem';
    const linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURIComponent(message)}`

    return (
        <div className="text-center flex flex-col gap-4">
            <p>Perfect <strong>{name}</strong>!</p>
            <p>Now send your order to our WhatsApp to complete.</p>
            <Button>
                <Link target="_blank" href={linkZap} >Send to WhatsApp</Link>
            </Button>
        </div>
    )
}
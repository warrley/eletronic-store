import { userCheckoutStore } from "@/store/checkout-store"
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
    const { name } = userCheckoutStore(state => state);

    const message = generateMessage();
    const linkZap = `https://wa.me/5589981157290?text=${encodeURIComponent(message)}`

    return (
        <div className="text-center flex flex-col gap-4">
            <p>Perfect <strong>{name}</strong>!</p>
            <p>Now send your order to our WhatsApp to complete.</p>
            <Button>
                <a target="_blank" href={linkZap} >Send to WhatsApp</a>
            </Button>
        </div>
    )
}
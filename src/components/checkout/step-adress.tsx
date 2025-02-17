import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepAdress = ({ setStep }: Props) => {
    return (
        <div>...</div>
    )
}
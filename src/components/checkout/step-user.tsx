import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckoutStore } from "@/store/checkout-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, 'Fill in your name')
});

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepUser = ({ setStep }: Props) => {
    const { name, setName } = useCheckoutStore(state => state);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        setName(value.name);
        setStep("address");
    }

    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder="What's your name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} />
                
                <Button type="submit" variant="outline">Next</Button>
            </form>
        </Form>
    )
}
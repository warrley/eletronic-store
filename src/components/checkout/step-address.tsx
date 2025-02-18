import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form";
import { number, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { userCheckoutStore } from "@/store/checkout-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const formSchema = z.object({
    street: z.string().min(2, "Fill in the adress"),
    number: z.string().min(2, "Fill in the number"),
    complement: z.string().optional(),
    district: z.string().min(2, "Fill in the district"),
    city: z.string().min(2, "Fill in the city"),
    state: z.string().min(2, "Fill in the state"),
});

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepAddress = ({ setStep }: Props) => {
    const { address, setAddress } = userCheckoutStore(state => state);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { ...address }
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        setAddress(value)
        setStep("finish");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="street"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>street</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>number</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="complement"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>complement</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="district"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>district</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )} />
                    
                    <FormField control={form.control} name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>city</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )} />
                    
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>state</FormLabel>
                            <FormControl>
                                <Select defaultValue={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pi">Piauí</SelectItem>
                                        <SelectItem value="ce">Ceará</SelectItem>
                                        <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                )} />
                </div>

                <div className="flex justify-between mt-4">
                    <Button onClick={() => setStep("user")} type="submit" variant="link">Back</Button>
                    <Button onClick={() => onSubmit} type="submit" variant="default">Complete</Button>
                </div>
            </form>
        </Form>
    )
}
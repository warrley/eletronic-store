// import { CheckoutSteps } from "@/types/checkout-steps"
// import { Dispatch, SetStateAction } from "react"
// import { useForm } from "react-hook-form";
// import { number, z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { userCheckoutStore } from "@/store/checkout-store";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const formSchema = z.object({
//     street: z.string().min(2, "Fill the adress"),
//     number: z.string().min(2, "Fill the number"),
//     complement: z.string().optional(),
//     district: z.string().min(2, "Fill the distict"),
//     city: z.string().min(2, "Fill the city"),
//     state: z.string().min(2, "Fill the state"),
// });

// type Props = {
//     setStep: Dispatch<SetStateAction<CheckoutSteps>>
// }

// export const StepAddress = ({ setStep }: Props) => {
//     const { address, setAddress } = userCheckoutStore(state => state);

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: { ...address }
//     });

//     const onSubmit = (value: z.infer<typeof formSchema>) => {
//         setName(value.name);
//         setStep("adress");
//     }

//     return (
//         <Form {...form}>
//             <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
//                 <FormField control={form.control} name="name"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Your Name</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     autoFocus
//                                     placeholder="What's your name"
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage/>
//                         </FormItem>
//                     )} />
                
//                 <Button type="submit" variant="outline">Next</Button>
//             </form>
//         </Form>
//     )
// }
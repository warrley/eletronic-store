import { DialogContent, Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "../ui/progress"

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>...</DialogTitle>
                </DialogHeader>

                <Progress value={66} />
                
                <div className="flex flex-col gap-3">
                    ...
                </div>
            </DialogContent>
        </Dialog>
    )
}
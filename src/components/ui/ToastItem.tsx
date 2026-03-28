import { toastVariants } from "@/lib/ui/variants/toast.variants";
import { useToast } from "@/providers";

export function ToastItem({toast, onClose}) {
    const {toasts} = useToast();

    return (
        <div>
            <div className="flex-1">
                <div className="font-medium leading-none-mb-0 5">

                </div>
            </div>

            <div className="opacity-90"></div> 

            
        </div>
    )
}
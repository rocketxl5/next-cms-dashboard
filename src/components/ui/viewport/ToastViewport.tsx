import { ToastItem } from "../ToastItem";
import { useToast } from "@/providers";

export function ToastViewport() {
    const {toasts, removeToast} = useToast();

    return (
        <div className="fixed top-4 z-50 flex flex-col gap-2 w-80">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={removeToast} />
            ))}
        </div>
    )
}
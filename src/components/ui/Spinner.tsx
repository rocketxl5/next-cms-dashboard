'use client';

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { spinnerVariants,  SpinnerVariants} from "@/lib/ui/variants/spinner.variants";

type SpinnerProps = SpinnerVariants & {
    className?: string;
} 

export function Spinner({size, variant, className}: SpinnerProps) {
    return (
        <Loader2 
            className={cn(
                spinnerVariants({size, variant}),
                className
            )}
        />
    )
}
import { useContext } from "react"

import { CollapsibleContext } from "@/providers"

export function useCollapsible() {
    const context = useContext(CollapsibleContext);

    if(!context) {
        throw new Error('useCollapsible must be used within CollapsibleProvider');
    }

    return context;
}
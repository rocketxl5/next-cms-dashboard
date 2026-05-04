import { CollapsibleProvider, CollapsibleProviderProps } from "@/providers";

type CollapsibleRootProps = CollapsibleProviderProps;

export function Root(props: CollapsibleRootProps) {
    return <CollapsibleProvider {...props} />;
}
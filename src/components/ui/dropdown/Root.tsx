import { DropdownProvider, DropdownProviderProps } from '@/providers';

export function Root(props: DropdownProviderProps) {
  return <DropdownProvider {...props} />;
}

import { Button } from '@/components/ui';
import { SlidersHorizontal } from 'lucide-react';

import { UsersFiltersDialog } from './UsersFilterDialog';

import { useDialog } from '@/providers/hooks';

import { UsersToolbarContext } from '../../domain/users-dashboard-filters';

export function UsersFiltersMobileTrigger({ disabled, className }: UsersToolbarContext) {
  const { openDialog } = useDialog();

  const handleOpen = () => {
    openDialog({
      render: ({ dismiss }) => <UsersFiltersDialog onClose={dismiss} />,
    });
  };

  return (
    <Button variant='muted' textWeight='normal' height='md' className={className} disabled={disabled} onClick={handleOpen} >
      <span className="flex gap-2 items-center">Filters <SlidersHorizontal size={20} /></span>

    </Button>
  );
}

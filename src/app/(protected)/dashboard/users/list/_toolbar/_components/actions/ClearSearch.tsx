'use client';

import { Box, Button } from '@/components/ui';
import { SearchSlash } from 'lucide-react';

type ClearSearchProps = {
  isActive: boolean;
  onClick: () => void;
};

export function ClearSearch({ isActive, onClick }: ClearSearchProps) {
  return (
    <Box width="full" justify="between" align="center">
      <Button
        height="md"
        width="control"
        textWeight="normal"
        variant="contrast"
        onClick={onClick}
        disabled={!isActive}
        aria-label="Clear search and filters"
      >
        Clear Search
        {/* <SearchSlash size={20} /> */}
      </Button>
    </Box>
  );
}

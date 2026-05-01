'use client';

import { Box } from './layout';
import { DateSelector } from './DateSelector';

import { useSharedToggle } from '@/hooks/useSharedToggle';

import { inputToDate } from '@/lib/date';

import { DayPickerDisabled, SearchDateProps } from '@/types/shared';

export function SearchDate({ from, to, onSelect, maxDate }: SearchDateProps) {
  const toggle = useSharedToggle<'from' | 'to'>();

  const fromProps = toggle.register('from');
  const toProps = toggle.register('to');

  return (
    <Box width="fit" gap="lg">
      <Box gap="md">
        <DateSelector
          placeholder="From"
          dateKey={from.dateKey}
          value={from.value}
          disabled={maxDate ? { after: maxDate } : undefined}
          onSelect={onSelect}
          {...fromProps}
        />
        <DateSelector
          placeholder="To"
          dateKey={to.dateKey}
          value={to.value}
          disabled={
            {
              ...(from.value && { before: inputToDate(from.value) }),
              ...(maxDate && { after: maxDate }),
            } as DayPickerDisabled
          }
          onSelect={onSelect}
          {...toProps}
        />
      </Box>
    </Box>
  );
}

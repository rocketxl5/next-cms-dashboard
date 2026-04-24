'use client';

import { format } from 'date-fns';

import { Calendar } from 'lucide-react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { dateToInputString, inputToDate, isoToInput } from '@/lib/date';

import { DateInputProps } from '@/types/shared';

export function DateSelector({
  placeholder,
  dateKey,
  value,
  disabled,
  onSelect,
  isOpen,
  onToggle,
  ref,
}: DateInputProps) {
  const defaultClassNames = getDefaultClassNames();

  const selectedDate = value ? inputToDate(isoToInput(value)) : undefined;

  const handleSelect = (d?: Date) => {
    if (!d) {
      onSelect(dateKey, '');
      return;
    }

    const formatted = dateToInputString(d);

    onSelect(dateKey, formatted);
    onToggle();
  };

  return (
    <div className="relative" ref={ref}>
      <div
        className={cn(
          'h-full',
          'flex',
          'items-center',
          'cursor-pointer',
          'relative',
          'rounded-md',
          'border border-[hsl(var(--border))]',
          isOpen && [
            'border-[hsl(var(--border-focus))]',
            'ring-1',
            'ring-[hsl(var(--border-focus))]',
            'ring-inset',
          ],
        )}
        // className="relative my-auto cursor-pointer py-1 pl-2 border rounded-md border-[hsl(var(--border))]"
        onClick={onToggle}
      >
        <div
          className={cn(
            'min-w-38',
            'text-sm',
            'pr-12', // space for icon
            'pl-4',
            'border-0',
          )}
        >
          {selectedDate ? (
            format(selectedDate, 'MMM dd, yyyy')
          ) : (
            <span className="text-[hsl(var(--muted-foreground))]">
              {placeholder}
            </span>
          )}
        </div>
        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />
      </div>

      {/* Calendar popover */}
      {isOpen && (
        <div className="absolute z-50 mt-4">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            disabled={disabled}
            classNames={{
              root: `${defaultClassNames.root} bg-[hsl(var(--background))] p-2 rounded-md border border-[hsl(var(--background-muted))] shadow-lg`,
              nav: `${defaultClassNames.nav} absolute inset-0 flex items-center justify-between px-1`,
              caption_label: `${defaultClassNames.caption_label} mx-auto font-md`,
              button_previous: `
                stroke-[hsl(var(--foreground))]
                h-8 w-8 p-0 flex items-center justify-center rounded-md
            `,
              button_next: `
                stroke-[hsl(var(--foreground))]
                h-8 w-8 p-0 flex items-center justify-center rounded-md
            `,
              chevron: `${defaultClassNames.chevron}`,
              selected: `border-none bg-[hsl(var(--primary))] text-[hsl(var(--background))]`,
              today: `${defaultClassNames.today} border-none`,
            }}
          />
        </div>
      )}
    </div>
  );
}

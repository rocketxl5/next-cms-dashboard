'use client';

import { useState } from 'react';
import { format } from 'date-fns';

import { Calendar } from 'lucide-react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { dateToInputString, inputToDate, isoToInput } from '@/lib/date';

import { DateInputProps } from '@/types/shared';

export function DateInput({
  placeholder,
  dateKey,
  value,
  disabled,
  onSelect,
}: DateInputProps) {
  const [open, setOpen] = useState(false);
  const defaultClassNames = getDefaultClassNames();

  const selectedDate = value ? inputToDate(isoToInput(value)) : undefined;

  const handleSelect = (d?: Date) => {
    if (!d) {
      onSelect(dateKey, '');
      return;
    }

    const formatted = dateToInputString(d);

    onSelect(dateKey, formatted);
    setOpen(false);
  };

  return (
    <>
      {/* Input */}
      <div
        className={cn(
          'flex',
          'items-center',
          'cursor-pointer',
          'relative',
          'rounded-md',
          'border border-[hsl(var(--border))]',
          'focus-within:border-[hsl(var(--border-focus))]',
          'focus-within:ring-1',
          'focus-within:ring-[hsl(var(--border-focus))]',
          'focus-within:ring-inset',
        )}
        // className="relative my-auto cursor-pointer py-1 pl-2 border rounded-md border-[hsl(var(--border))]"
        onClick={() => setOpen((o) => !o)}
      >
        <input
          type="text"
          readOnly
          value={selectedDate ? format(selectedDate, 'MMM dd, yyyy') : ''}
          placeholder={placeholder}
          //   className="input pr-8 cursor-pointer text-sm border-0"
          className={cn(
            'w-full',
            'h-full',
            'bg-transparent',
            'text-sm',
            'pl-2',
            'pr-8', // leave space for icon
            'outline-none',
            'border-0',
          )}
        />

        <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      {/* Calendar popover */}
      {open && (
        <div className="absolute z-50 mt-8">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            disabled={disabled}
            classNames={{
              root: `${defaultClassNames.root} bg-[hsl(var(--background))] p-2 rounded-md border shadow-lg`,
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
              selected: `border-none bg-[hsl(var(--foreground))] text-[hsl(var(--background))]`,
              today: `${defaultClassNames.today} border-none`,
            }}
          />
        </div>
      )}
    </>
  );
}

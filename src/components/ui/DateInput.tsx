'use client';

import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import { Calendar } from 'lucide-react';

import { dateToInputString, inputToDate, isoToInput } from '@/lib/date';

import { DateInputProps } from '@/types/shared';

import 'react-day-picker/dist/style.css';

export function DateInput({
  placeholder,
  dateKey,
  value,
  onSelect,
}: DateInputProps) {
  const [open, setOpen] = useState(false);

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
        className="relative cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <input
          type="text"
          readOnly
          value={selectedDate ? format(selectedDate, 'MMM dd, yyyy') : ''}
          placeholder={placeholder}
          className="input pr-8 cursor-pointer text-sm"
        />

        <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      {/* Calendar popover */}
      {open && (
        <div className="absolute z-50 mt-2 p-2 rounded-md border bg-muted shadow-md">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
          />
        </div>
      )}
    </>
  );
}

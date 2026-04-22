import { DayPicker } from 'react-day-picker';

export type DatePlaceholder = 'From' | 'To';

export type DateKey = 'createdFrom' | 'createdTo';

export type DateInputProps = {
  placeholder: DatePlaceholder;
  dateKey: DateKey;
  value?: string;
  disabled?: Parameters<typeof DayPicker>[0]['disabled'];
  onSelect: (key: DateKey, value: string) => void;
};

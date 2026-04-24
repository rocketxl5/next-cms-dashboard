import { Matcher } from 'react-day-picker';

export type DatePlaceholder = 'From' | 'To';
export type DateLabel = 'Created' | 'Updated';

export type DayPickerDisabled = Matcher | Matcher[] | undefined;

export type DateKey = 'createdFrom' | 'createdTo' | 'updatedFrom' | 'updatedTo';

export type DateInputProps = {
  placeholder: DatePlaceholder;
  dateKey: DateKey;
  value?: string;
  disabled?: DayPickerDisabled;
  onSelect: (key: DateKey, value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  ref: (node: HTMLElement | null) => void;
};

export type SearchDateProps = {
  label: DateLabel;
  from: {
    dateKey: DateKey;
    value?: string;
  };
  to: {
    dateKey: DateKey;
    value?: string;
  };
  onSelect: (key: DateKey, value: string) => void;
  maxDate?: Date;
};

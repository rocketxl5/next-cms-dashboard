export type DatePlaceholder = 'From' | 'To'

export type DateKey = 'createdFrom' | 'createdTo';

export type DateInputProps = {
    placeholder: DatePlaceholder;
    dateKey: DateKey;
    value?: string;
    onSelect: (key: DateKey, value: string) => void;
}
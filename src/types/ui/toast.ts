export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastAction = {
    label: string;
    onClick: () => void;
}

export type Toast = {
    id: number;
    type?: ToastType;
    title?: string;
    message: string;
    duration: number;
    persistent?: boolean;
    action?: ToastAction;
}
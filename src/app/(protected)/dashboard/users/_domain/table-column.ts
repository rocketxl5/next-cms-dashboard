export type TableColumn<Row> = {
    key: string;
    header: string;
    render: (user: Row) => React.ReactNode;
    align?: 'left' | 'right' | 'center';
}
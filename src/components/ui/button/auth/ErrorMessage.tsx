type ErrorMessageProps = {
    message?: string | undefined;
}

export function ErrorMessage({message}: ErrorMessageProps) {
    if(!message) return null;

    return <span className="text-red-500">{`* ${message}`}</span>
}
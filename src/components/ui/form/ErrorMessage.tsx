type ErrorMessageProps = {
    message?: string | undefined;
}

export function ErrorMessage({message}: ErrorMessageProps) {
    if(!message) return null;

    return <p className="text-red-500 text-center">{`* ${message}`}</p>;
}
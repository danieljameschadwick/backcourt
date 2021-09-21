type Props = {
    message: string;
}

const ErrorHeader = ({ message }: Props) => {
    return (
        <h1>{message}</h1>
    );
}

export default ErrorHeader;

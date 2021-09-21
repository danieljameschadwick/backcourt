import ErrorHeader from "@src/components/layout/errors/ErrorHeader";

type Props = {
    message: string;
};

const _404 = ({message = "404 - Page not found."}: Props) => {
    return (
        <div className={"container"}>
            <ErrorHeader message={message} />
        </div>
    );
}

export default _404;
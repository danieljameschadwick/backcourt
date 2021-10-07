type Props = {
    title: string;
    children: React.ReactNode;
    additionalClasses?: string;
};

const GameCard = ({ title, additionalClasses = null, children }: Props) => {
    return (
        <div className={`card--container game--card ${additionalClasses}`}>
            <div className={"card--header"}>

                <h3 className={"title"}>{title}</h3>
            </div>

            <div className={"card--content"}>
                {children}
            </div>
        </div>
    );
};

export default GameCard;

type Props = {
    title: string;
    children: React.ReactNode;
    additionalClasses?: string;
    controls?: React.ReactNode | null;
};

const GameCard = ({ title, additionalClasses = "", children, controls }: Props) => {
    return (
        <div className={`card--container game--card ${additionalClasses}`}>
            <div className={"card--header"}>
                <h3 className={"title title-sm"}>{title}</h3>

                { controls ? (
                    <div className={"card--header-controls"}>
                        {controls}
                    </div>
                )
                : ''}
            </div>

            <div className={"card--content"}>
                {children}
            </div>
        </div>
    );
};

export default GameCard;

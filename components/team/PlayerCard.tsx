type Props = {
    title: string;
    showControls: boolean;
    children: React.ReactNode;
};

const PlayerCard = ({ title, showControls = true, children }: Props) => {
    return (
        <div className={"card--attributes card--container"}>
            <div className={"card--header"}>
                <h3 className={"title"}>{title}</h3>

                { showControls ? (
                    <div className={"card--controls"}>
                        <button>Show</button>
                    </div>
                ) : ''}

            </div>

            <div className={"card--content"}>
                {children}
            </div>
        </div>
    );
};

export default PlayerCard;
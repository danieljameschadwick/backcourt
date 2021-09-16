type Props = {
    percentage: number;
    showPercentage: boolean;
};

const ProgressBar = ({ percentage, showPercentage = true }: Props) => {
    const fillerStyle = {
        width: `${percentage}%`,
        backgroundColor: "#FF7D12",
    };

    return (
        <div className={"progress-bar--container"}>
            <div className={"progress-bar--filler"} style={fillerStyle} />

            <span className={"progress-bar--text text--bold"}>
                {showPercentage ? (percentage + "%" ) : ""}
            </span>
        </div>
    );
};

export default ProgressBar;
type Props = {
    percentage: number;
};

const ProgressBar = ({ percentage }: Props) => {
    const fillerStyle = {
        width: `${percentage}%`,
        backgroundColor: '#FF7D12',
    };

    return (
        <div className={"progress-bar--container"}>
            <div className={"progress-bar--filler"} style={fillerStyle}>
                <span className={"progress-bar--text text--bold"}>
                    {`${percentage}%`}
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
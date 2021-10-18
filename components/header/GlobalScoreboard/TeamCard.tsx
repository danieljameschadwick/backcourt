import { Team } from "@src/util/types";

type Props = {
    team: Team;
    complete: boolean;
};

const TeamCard: React.FC<Props> = ({ team, complete }: Props) => {
    const { abbreviation, record: { homeRecord, awayRecord } } = team;

    return (
        <div className={"team cscore_item--away cscore_item--winner"}>
            <div className={"team--logo"}>
                <img height={14} alt={""} src={"/image/player/avatar.png"} />
            </div>

            <div className={"team--overview icon-font-after"}>
                <div className={"team--name"}>
                    {/*<span className={"cscore_name cscore_name--long"}>Los Angeles Rams</span>*/}
                    {/*<span className={"cscore_name cscore_name--short"}>Rams</span>*/}
                    <span className={"cscore_name cscore_name--abbrev"}>{abbreviation}</span>
                </div>
                <div className={"team--score"}>
                    {complete ? (
                        '103'
                    ) : (
                        `${homeRecord}-${awayRecord}`
                    )}
                </div>
            </div>
        </div>
    );
}

export default TeamCard;

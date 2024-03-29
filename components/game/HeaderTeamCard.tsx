import { Team } from "@src/util/type/Team";

type Props = {
    team: Team;
    homeTeam?: boolean;
};

const HeaderTeamCard = ({ team, homeTeam = true }: Props) => {
    const { name, abbreviation, record: { homeRecord, awayRecord } } = team;

    return (
        <div className={`${homeTeam ? "home" : "away"}-team team`}>
            <div className={"team--content"}>
                <div className={"team--container"}>
                    {homeTeam ? (
                        <div className={"team--logo"}>
                            <img height={45} alt={""} src={"/image/player/avatar.png"} />
                        </div>)
                    : ''}

                    <div className={"team--info"}>
                        <a href={`/teams/${team.id}`}  className={"team--name"}>
                            {name}
                        </a>
                        <a href={`/teams/${team.id}`} className={"team--abbreviation"}>
                            {abbreviation}
                        </a>
                        <div className={"team--record"}>
                            {homeRecord}-{awayRecord}
                        </div>
                    </div>

                    {!homeTeam ? (
                        <div className={"team--logo"}>
                            <img height={45} alt={""} src={"/image/player/avatar.png"} />
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    );
};

export default HeaderTeamCard;

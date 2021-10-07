import { Team } from "@src/util/types";

type Props = {
    team: Team;
    homeTeam?: boolean;
};

const HeaderTeamCard = ({ team, homeTeam = true }: Props) => {
    const { name, abbreviation } = team;

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
                        <div className={"team--name"}>
                            {name}
                        </div>
                        <div className={"team--abbreviation"}>
                            {abbreviation}
                        </div>
                        <div className={"team--record"}>
                            0-0
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

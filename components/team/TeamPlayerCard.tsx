import Image from "next/image";
import { TeamPlayer } from "@src/util/types";
import avatar from "@src/public/image/player/placeholder.png";
import { calculateAge, formatDate } from "@src/util/dateFormatter";
import ProgressBar from "@src/components/util/ProgressBar";

type Props = {
    player: TeamPlayer;
};

const TeamPlayerCard: React.FC<Props> = ({ player }: Props) => {
    return (
        <div className={"team-player--card"}>
            <div className={"header"}>
                <div className={"avatar-holder"}>
                    <Image
                        src={avatar}
                        alt={`${player.firstName} ${player.lastName} Avatar.`}
                        layout={"responsive"}
                        objectFit={"cover"}
                    />
                </div>

                <div className={"quick-info"}>
                    <div className={"heading text--semi-bold"}>
                        {player.firstName} {player.lastName}, PG
                    </div>

                    <div className={"sub-heading"}>
                        Age: <span className={"text--semi-bold"}>
                        {calculateAge(new Date(player.dateOfBirth))}
                    </span>

                        <span className={"dob text--light-bold"}>({formatDate(new Date(player.dateOfBirth))})</span>
                    </div>
                </div>
            </div>

            <div className={"basic-info"}>
                <div className={"sub-heading text--light-bold"}>
                    Attributes:
                </div>

                <span className={"attributes"}>
                    No attributes found.
                </span>
            </div>
        </div>
    );
};

export default TeamPlayerCard;

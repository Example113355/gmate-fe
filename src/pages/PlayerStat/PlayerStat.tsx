import PlayerGraph from "./PlayerGraph";
import PlayerHistory from "./PlayerHistory";
import "./PlayerStat.css";
import TopDonate from "./TopDonate";

const PlayerStat = () => {
    return (
        <div className="flex flex-col gap-[30px]">
            <TopDonate />
            <PlayerGraph />
            <PlayerHistory />
        </div>
    );
}

export default PlayerStat;

import PlayerChart from "./PlayerChart";
import PlayerHistory from "./PlayerHistory";
import "./PlayerStat.css";
import TopDonate from "./TopDonate";

const PlayerStat = () => {
    return (
        <>
            <TopDonate/>
            <PlayerChart/>
            <PlayerHistory/>
        </>
    );
}

export default PlayerStat;

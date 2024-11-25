import PlayerBar from "./PlayerBar";
import PlayerPie from "./PlayerPie";

const PlayerGraph = () => {
    return (
        <div style={{
            margin: "auto",
            width: "100%",
            maxWidth: "1300px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyItems: "start",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "30px"
        }}>
            <PlayerBar/>
            <PlayerPie/>
            
        </div>
    );
}

export default PlayerGraph;

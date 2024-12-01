import PlayerRentalPrice from "./PlayerRentalPrice/PlayerRentalPrice";
import PlayerBookingList from "./PlayerBookingList/PlayerBookingList";
import PlayerFreeTime from "./PlayerFreeTime/PlayerFreeTime";
import { useEffect, useState } from "react";
import { getPlayerById } from "./ApiService";
import { useParams } from "react-router-dom";

import "./PlayerEdit.css";

const PlayerEdit = () => {
    const [player, setPlayer] = useState({});
    const { id } = useParams();
    // console.log(id);

    //Lấy thông tin player từ id trên path
    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const playerData = await getPlayerById(id);
                // console.log(playerData);
                setPlayer(playerData);
            } catch (error) {
                console.error('Error fetching player:', error);
            }
        };
        fetchPlayer();
    }, [id]);

    // console.log(player);

    return (
        <div>

            <div className="player-edit-container">
                {/* Phần trên: Thông tin người chơi */}
                <div className="player-top-section">
                    <h3 className="player-title">THÔNG TIN</h3>
                    <div className="player-top-content">
                        <div className="player-avatar-container">
                            <img src={player.avatar} alt="avatar" className="player-avatar" />
                        </div>
                        <div className="player-info-container">
                            <h2 className="player-name">{player.nameDisplay}</h2>
                            <PlayerRentalPrice player={player} id={id} />
                            <h3 className="section-title">Thời gian rãnh</h3>
                            <div className="game-list">
                                <PlayerFreeTime id={1} />
                                <PlayerFreeTime id={2} />
                                <PlayerFreeTime id={3} />
                                <PlayerFreeTime id={4} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phần dưới: Danh sách yêu cầu */}
                <div className="player-bottom-section">
                    <h3 className="player-title">YÊU CẦU THUÊ</h3>
                    <PlayerBookingList playerId={id} />
                </div>
            </div>
        </div>
    );
};

export default PlayerEdit;

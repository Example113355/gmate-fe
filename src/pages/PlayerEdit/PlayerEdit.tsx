import PlayerFreeTime from "./PlayerFreeTime/playerfreetime";
import avt from '../../assets/img/anhmau.jpg';
import PlayerRentalPrice from "./PlayerRentalPrice/PlayerRentalPrice";
import PlayerBookingList from "./PlayerBookingList/PlayerBookingList";
import PlayerHeader from "../../components/player-header";

import "./PlayerEdit.css";

const PlayerEdit = () => {
    return (
        <div>
            <PlayerHeader id={3} />

            <div className="player-edit-container">
                {/* Phần trên: Thông tin người chơi */}
                <div className="player-top-section">
                    <h3 className="player-title">THÔNG TIN</h3>
                    <div className="player-top-content">
                        <div className="player-avatar-container">
                            <img src={avt} alt="avatar" className="player-avatar" />
                        </div>
                        <div className="player-info-container">
                            <h2 className="player-name">Dũnggggggg Kaka</h2>
                            <PlayerRentalPrice />
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
                    <PlayerBookingList />
                </div>
            </div>
        </div>
    );
};

export default PlayerEdit;

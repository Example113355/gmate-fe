import UserInfo from "../UserDetail/UserInfo/UserInfo";
import UserPayment from "../UserDetail/UserPayment/UserPayment";
import UserContentHeader from "../UserDetail/UserContentHeader/UserContentHeader";
import UserGameItem from "../UserDetail/UserGameItem/UserGameItem";
import UserImg from "../UserDetail/UserImg/UserImg";
import PlayerFreeTime from "./PlayerFreeTime/playerfreetime";
import "./PlayerEdit.css";
import PlayerRentalPrice from "./PlayerRentalPrice/PlayerRentalPrice";
import PlayerBookingList from "./PlayerBookingList/PlayerBookingList";

const PlayerEdit = () => {
    return (
        <div className="user_detail bg-[#E1E1E1]">
            <div className="left_sidebar">
                <UserInfo />
            </div>

            <div className="content">
                <div className="content_header">
                    <div className="content_header--top">
                        <h3 className="user_name">Hươnggggg</h3>
                        <button className="base_btn follow_btn">Theo dõi</button>
                    </div>

                    <div className="content_header--bottom">
                        <UserContentHeader title="Số người theo dõi" content="518" unit="người" />
                        <UserContentHeader title="Đã được thuê" content="600" unit="giờ" />
                        <UserContentHeader title="Tỷ lệ hoàn thành" content="84.17" unit="%" />
                    </div>
                </div>


                <div className="content_base content_game">
                    <PlayerRentalPrice />


                    <h3>Thời gian rãnh</h3>
                    <div className="game_list">
                        <PlayerFreeTime id={1} />
                        <PlayerFreeTime id={2} />
                        <PlayerFreeTime id={3} />
                        <PlayerFreeTime id={4} />
                    </div>
                </div>

                <div className="content_base content_info">
                    <h3 style={{ color: "#f0564a", fontWeight: "bold" }}>YÊU CẦU THUÊ</h3>
                    <PlayerBookingList />

                </div>

            </div>

        </div>
    );
}

export default PlayerEdit;

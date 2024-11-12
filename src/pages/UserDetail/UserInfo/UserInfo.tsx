import UserDescription from "./UserDescription/UserDescription";
import './UserInfo.css'

const UserInfo = () => {

    return (
        <div className="user_info--container">
            <div className="user_info">
                <img src="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" alt="" />

                <h3 className="status">
                    Đang sẵn sàng
                </h3>

                <span>
                    Ngày tham gia: <span className="start_day">12/12/2022</span>
                </span>
            </div>

            <div className="user_description--wrapper">
                <h3>Giới thiệu:</h3>

                <div className="description--container">
                    <UserDescription date="30/11/2022" description="Không đấm khách!" />
                    <UserDescription date="12/12/2022" description="Thuê thì thuê không thuê thì rent :))" />
                </div>
            </div>
        </div>
    );
}

export default UserInfo;

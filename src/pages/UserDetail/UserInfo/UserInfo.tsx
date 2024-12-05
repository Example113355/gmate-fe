import UserDescription from "./UserDescription/UserDescription";
import "./UserInfo.css";
import { User } from "../interface";

const UserInfo = ({ user }: { user: User }) => {
  console.log(user);

  return (
    <div className="user_info--container">
      <div className="user_info">
        <img src={user.pics[0].url} alt="" />

        <h3 className={user.onlineStatus ? "status" : "status unactive"}>
          {user.onlineStatus ? "Đang sẵn sàng" : "Đang bận"}
        </h3>

        <span>
          Ngày tham gia: <span className="start_day">12/2024</span>
        </span>
      </div>

      <div className="user_description--wrapper">
        <h3>Giới thiệu:</h3>

        <div className="description--container">
          <UserDescription date="12/2024" description={user.introduce} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

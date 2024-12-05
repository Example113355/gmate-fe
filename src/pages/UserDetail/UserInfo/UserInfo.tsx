import UserDescription from "./UserDescription/UserDescription";
import "./UserInfo.css";
import { User } from "../interface";

const UserInfo = ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createAt);
  const start_day = createdAtDate.toISOString().split("T")[0];
  console.log(user);

  return (
    <div className="user_info--container">
      <div className="user_info">
        <img src={user?.userId?.avatar} alt="" />

        <h3 className={user.onlineStatus ? "status" : "status unactive"}>
          {user.onlineStatus ? "Đang sẵn sàng" : "Đang bận"}
        </h3>

        <span>
          Ngày tham gia: <span className="start_day">{start_day}</span>
        </span>
      </div>

      <div className="user_description--wrapper">
        <h3>Giới thiệu:</h3>

        <div className="description--container">
          <UserDescription date={start_day} description={user.introduce} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

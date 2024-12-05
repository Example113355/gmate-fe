import UserInfo from "./UserInfo/UserInfo";
import UserPayment from "./UserPayment/UserPayment";
import UserContentHeader from "./UserContentHeader/UserContentHeader";
import UserGameItem from "./UserGameItem/UserGameItem";
import UserContentComment from "./UserContentComment/UserContentComment";
import UserImg from "./UserImg/UserImg";
import "./UserDetail.css";
import { get } from "../../utils/http_2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import openNotification from "../../components/notify";
import { User } from "./interface";


const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>();


  useEffect(() => {
    get(`/players/${id}`, {}).then((response: any) => {
      if (response.status === 200) {
        setUser(response.data);
      } else {
        openNotification("error", "Lỗi", "Không tìm thấy người dùng");
      }
    });
  }, [id]);

  return (
    <div className="user_detail bg-[#E1E1E1]">
      <div className="left_sidebar">{user && <UserInfo user={user} />}</div>

      <div className="content">
        <div className="content_header">
          <div className="content_header--top">
            <h3 className="user_name">{user?.nameDisplay}</h3>
            <button className="base_btn follow_btn">Theo dõi</button>
          </div>

          <div className="content_header--bottom">
            <UserContentHeader
              title="Số người theo dõi"
              content="518"
              unit="người"
            />
            <UserContentHeader
              title="Đã được thuê"
              content={user?.totalRentHour?.toString() || "0"}
              unit="giờ"
            />
            <UserContentHeader
              title="Tỷ lệ hoàn thành"
              content="84.17"
              unit="%"
            />
          </div>
        </div>

        <div className="content_base content_game">
          <h3>CÁC LOẠI GAME</h3>
          <div className="game_list">
            {user?.categories.map((category) => (
              <UserGameItem key={category.id} type={category.category} />
            ))}
          </div>
        </div>

        <div className="content_base content_info">
          <h3>THÔNG TIN</h3>
          <div className="content_info--img">
            {user && <UserImg user={user} />}
          </div>

          <div className="content_info--text">
            <p>{user?.description}</p>
          </div>
        </div>

        <div className="content_base content_comment">
          <h3>ĐÁNH GIÁ</h3>
          <div className="comment_list">
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
            <UserContentComment
              avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
              name="Hươnggggg"
              date="20/10/2021"
              content="Chất lượng dịch vụ tốt"
            />
          </div>

          <div className="comment_paginate">
            <button className="paginate_btn paginate_btn--active">1</button>
            <button className="paginate_btn">2</button>
            <button className="paginate_btn">3</button>
            <button className="paginate_btn">4</button>
            <button className="paginate_btn">5</button>
            <button className="paginate_btn--total">1/20</button>
          </div>
        </div>
      </div>

      <div className="right_sidebar">{user && <UserPayment user={user} />}</div>


    </div>
  );
};

export default UserDetail;

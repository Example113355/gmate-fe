import UserInfo from "./UserInfo/UserInfo";
import UserPayment from "./UserPayment/UserPayment";
import UserContentHeader from "./UserContentHeader/UserContentHeader";
import UserGameItem from "./UserGameItem/UserGameItem";
import UserContentComment from "./UserContentComment/UserContentComment";
import UserImg from "./UserImg/UserImg";
import "./UserDetail.css";

const UserDetail = () => {
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
                    <h3>CÁC LOẠI GAME</h3>
                    <div className="game_list">
                        <UserGameItem type="lol" />
                        <UserGameItem type="pubg" />
                        <UserGameItem type="freefire" />
                        <UserGameItem type="other" />
                    </div>
                </div>

                <div className="content_base content_info">
                    <h3>THÔNG TIN</h3>
                    <div className="content_info--img">
                        <UserImg />
                    </div>

                    <div className="content_info--text">
                        <p>GIỌNG BẮC. MỎ HƠI HỖN. CHƠI GAME VUI VẺ KO TRYHARD !!! SAU 23H MÌNH NHẬN 100K/H VÌ MÌNH LƯỜI CHƠI ĐÊM HIHI</p>
                        <p>Mình nhận chơi :</p>
                        <p>- Lol: đơn đôi, flex chơi hơi dốt nhưng mà hứa ko tạ =))</p>
                        <p>- TFT: du học sinh PBE 2 tuần, đã tốt nghiệp</p>
                        <p>- TFT cặp đôi: gánh khách hoặc khách gánh</p>
                        <p>- Aram: thách đấu aram ko lói nhìu :)))))))</p>
                        <p>- PUBG PC: bắn gà nên chỉ nhận normal vui vẻ tkuii</p>
                        <p>- Party Animal: Báo đời. chuyên đấm nhầm đồng đội =))</p>
                        <p>- Nhận chửi thuê theo style KhÁ bẢnH 👍</p>
                        <p>❌ KHÔNG RENT NỢ</p>
                        <p>❌ KHÔNG CHƠI TRƯỚC TRẢ SAU</p>
                        <p>❌ KHÔNG TIẾP NGƯỜI XÀM L</p>
                        <p>Nếu hong thấy mình rep thì ib qua fb cho mình nhé ạ T.T</p>
                        <p>Đã ghé qua đây rùi thì cho mình xin 1 fl nhé hehe. iuuuuuuuuuuu ♥♥♥</p>
                    </div>
                </div>

                <div className="content_base content_comment">
                    <h3>ĐÁNH GIÁ</h3>
                    <div className="comment_list">
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
                        <UserContentComment avatarLink="https://files.playerduo.net/production/images/1e016654-de7e-4386-99e9-bad73c651acc__653b30f0-9823-11ef-9376-b533eb6f1b4c__player_avatar.jpg" name="Hươnggggg" date="20/10/2021" content="Chất lượng dịch vụ tốt" />
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

            <div className="right_sidebar">
                <UserPayment />
            </div>
        </div>
    );
}

export default UserDetail;

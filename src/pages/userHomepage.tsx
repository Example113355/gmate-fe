import "./userHomepageStyle.css";
import React, { useState, useEffect } from 'react';

// Định nghĩa kiểu cho game
interface Game {
    id: number;
    name: string;
    img: string;
}

const fetchGamesFromAPI = () => {
    return new Promise<Game[]>((resolve) => {
        setTimeout(() => {
        resolve([
            { id: 1, name: 'Liên quân Mobile', img: 'src/assets/img/lq.png' },
            { id: 2, name: 'Đấu trường chân lý', img: 'src/assets/img/lq.png' },
            { id: 3, name: 'Liên minh huyền thoại', img: 'src/assets/img/lq.png' },
            { id: 4, name: 'PlayerUnknown\'s Battlegrounds', img: 'src/assets/img/lq.png' },
            { id: 5, name: 'CS:GO', img: 'src/assets/img/lq.png' }
        ]);
        }, 1000); // Giả lập thời gian trễ từ API (1 giây)
    });
};

// Định nghĩa kiểu dữ liệu cho một người chơi
interface DPlayerRanking {
    id: number;
    name: string;
    phone: string;
    avatar: string;
    donationAmount: string;
}

interface GPlayerRanking {
    id: number;
    name: string;
    phone: string;
    avatar: string;
    starRating: number;
}

const fetchDonatePlayerRankingFromAPI = () => {
    return new Promise<DPlayerRanking[]>((resolve) => {
        setTimeout(() => {
        resolve([
            { id: 1, name: 'Jjn wein', phone: '0909****', avatar: 'src/assets/img/lq.png', donationAmount: '20000đ'},
            { id: 2, name: 'You', phone: '0909****', avatar: 'src/assets/img/lq.png', donationAmount: '15000đ'},
            { id: 3, name: 'Player 3', phone: '0909****', avatar: 'src/assets/img/lq.png', donationAmount: '10000đ'},
            { id: 4, name: 'Player 4', phone: '0909****', avatar: 'src/assets/img/lq.png', donationAmount: '5000đ'},
        ]);
        }, 1000); // Giả lập thời gian trễ từ API (1 giây)
    });
};

const fetchGmasterPlayerRankingFromAPI = () => {
    return new Promise<GPlayerRanking[]>((resolve) => {
        setTimeout(() => {
        resolve([
            { id: 1, name: 'Jjn wein', phone: '0909****', avatar: 'src/assets/img/lq.png', starRating: 4 },
            { id: 2, name: 'You', phone: '0909****', avatar: 'src/assets/img/lq.png', starRating: 3 },
            { id: 3, name: 'Player 3', phone: '0909****', avatar: 'src/assets/img/lq.png',  starRating: 3 },
            { id: 4, name: 'Player 4', phone: '0909****', avatar: 'src/assets/img/lq.png',  starRating: 3 },
        ]);
        }, 1000); // Giả lập thời gian trễ từ API (1 giây)
    });
};



const playersByRating = [
  { name: "Player 1", rating: 3 },
  { name: "Player 2", rating: 4 },
  { name: "Player 3", rating: 2 },
  { name: "Player 4", rating: 5 },
  { name: "Player 5", rating: 1 },
  { name: "Player 6", rating: 5 },
  { name: "Player 7", rating: 2 },
  { name: "Player 8", rating: 4 },
];

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

interface StarProps {
  filled: boolean;
}

// StarRating Component
const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  totalStars = 5,
}) => {
  return (
    <div style={{ display: "flex" }}>
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

// Star Component
const Star: React.FC<StarProps> = ({ filled }) => (
  <span style={{ fontSize: "20px" }}>
    {filled ? (
      // Filled star (e.g., red color)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#F24822"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#F24822"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ) : (
      // Empty star (e.g., gray color)
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#F24822"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    )}
  </span>
);

const UserHomePage = () => {
    const id = 2; // ID của user

    const [games, setGames] = useState<Game[]>([]); // Chỉ định kiểu mảng các game
    const [, setLoading] = useState(true); // Trạng thái loading

    useEffect(() => {
        // Gọi API và cập nhật dữ liệu
        fetchGamesFromAPI().then((data) => {
        setGames(data); // Dữ liệu phải có kiểu Game[]
        setLoading(false); // Đặt loading thành false khi nhận được dữ liệu
        });
    }, []); // Chạy chỉ một lần khi component được mount

    const [topDonate, setTopDonate] = useState<DPlayerRanking[]>([]);
    const [topGmaster, setTopGmaster] = useState<GPlayerRanking[]>([]);

    useEffect(() => {
        // Gọi API và cập nhật dữ liệu
        fetchDonatePlayerRankingFromAPI().then((data) => {
        setTopDonate(data); // Dữ liệu phải có kiểu Game[]
        setLoading(false); // Đặt loading thành false khi nhận được dữ liệu
        });

        fetchGmasterPlayerRankingFromAPI().then((data) => {
        setTopGmaster(data); // Dữ liệu phải có kiểu Game[]
        setLoading(false); // Đặt loading thành false khi nhận được dữ liệu
        });
    }, []);

    const you = topDonate.find((player) => player.id === id);

  return (
    <div className="h-full w-full">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');
      </style>

      <div className="banner">
        <div className="content">
          <img
            src={"/assets/img/Group 2.png"}
            alt="Banner"
            className="banner-image"
            style={{ width: "50%", height: "auto" }}
          />
          <div className="text">
            <h1>Miễn phí cho lần đầu tiên</h1>
            <button>Đăng ký ngay</button>
          </div>
        </div>
      </div>

      <div className="game-filter">
        <h1>TÌM BẠN THEO GAME</h1>
        <div className="game-list">
            {games.length === 0 ? (
                <p>Loading...</p>
            ) : (
                games.map((game) => (
                <div key={game.id} className="game">
                    <img src={game.img} alt={game.name} />
                    <p>{game.name}</p>
                </div>
                ))
            )}
            </div>
      </div>

      <div className="ranking">
        <h1>BẢNG XẾP HẠNG</h1>
        <div className="ranking-section">
          <div className="ranking-table">
            <h2>Top Donate</h2>
            {you && (
                <div className="ranking-child" id="you">
                {you.id < 3 ? <img src={`src/assets/img/${you.id}.png`} alt="avatar" style={{ width: "25px", height: "25px" }} /> : <h4>{you.id}</h4>}
                <img src={you.avatar} alt="avatar" />
                <div className="ranking-child-info">
                    <h4>{you.name}</h4>
                    <h6>{you.phone}</h6>
                </div>
                <div className="ranking-child-donate">
                    <img src='src/assets/img/token-branded_bcoin.png' alt="dollar" />
                    <h5>{you.donationAmount}</h5>
                </div>
                </div>
            )}
            <h3>Đại gia tuần này</h3>
            <div className="ranking-table-2">
                {topDonate.map((player, index) => (
                    <div key={player.id} className="ranking-child" id={`top${index + 1}`}>
                        {index < 3 ? <img src={`src/assets/img/${index + 1}.png`} alt="avatar" style={{ width: "25px", height: "25px" }} /> : <h4>{index + 1}</h4>}
                        <img src={player.avatar} alt="avatar" />
                        <div className="ranking-child-info">
                            <h4>{player.name}</h4>
                            <h6>{player.phone}</h6>
                        </div>
                        <div className="ranking-child-donate">
                            <img src='src/assets/img/token-branded_bcoin.png' alt="dollar" />
                            <h5>{player.donationAmount}</h5>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          <div className="ranking-table">
            <h2>Top Gmaster</h2>
            <div className="ranking-table-2" id="ranking-gmaster">
                {topGmaster.map((player, index) => (
                    <div key={player.id} className="ranking-child" id={`top${index + 1}`}>
                        {index < 3 ? <img src={`src/assets/img/${index + 1}.png`} alt="avatar" style={{ width: "25px", height: "25px" }} /> : <h4>{index + 1}</h4>}
                        <img src={player.avatar} alt="avatar" />
                        <div className="ranking-child-info">
                            <h4>{player.name}</h4>
                            <h6>{player.phone}</h6>
                        </div>
                        <StarRating rating={player.starRating} totalStars={5} />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pro-player">
        <div className="name-title">
          <h1>NGƯỜI CHƠI PHỔ BIẾN</h1>
          <img src="src\assets\img\ToolTip1.png" alt="" className="tooltip"/>
        </div>
        <div className="pro-player-list">
          {playersByRating.map((player, index) => (
            <div className="pro-player-item" key={index}>
              <img src="src/assets/img/Player Image.png" alt="avatar" />
              <div className="name-container">
                <h4>{player.name}</h4>
                <div className="green-dot"></div>
              </div>
              <span className="description">
                Tới sưởi ấm trái tim mình đi. Ongame: Liên quân, LOL, CSGO, ...
                Gì cũng chơi được.
              </span>
              <div className="pro-player-rating">
                <div className="image-circle-container">
                  <img
                    src="src/assets/img/lq.png"
                    alt="Image 1"
                    className="image-circle"
                  />
                  <img
                    src="src/assets/img/lq.png"
                    alt="Image 2"
                    className="image-circle"
                  />
                  <img
                    src="src/assets/img/lq.png"
                    alt="Image 3"
                    className="image-circle"
                  />
                </div>
                <div className="star-rating">
                  <StarRating rating={player.rating} totalStars={5} />
                </div>
              </div>
              <div className="money">
                <img src="src\assets\img\token-branded_bcoin.png" />
                <h6>20.000đ</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pro-player">
        <div className="name-title">
          <h1>PRO PLAYER COACHING</h1>
          <img src="src\assets\img\ToolTip (1).png" alt="" className="tooltip"/>
        </div>
        <div className="pro-player-list">
          {playersByRating.map((player, index) => (
            <div className="pro-player-item" key={index}>
              <img src="src/assets/img/Player Image (1).png" alt="avatar" />
              <div className="name-container">
                <h4>{player.name}</h4>
                <div className="green-dot"></div>
              </div>
              <span className="description">
                Tới sưởi ấm trái tim mình đi. Ongame: Liên quân, LOL, CSGO, ...
                Gì cũng chơi được.
              </span>
              <div className="pro-player-rating">
                <div className="image-circle-container">
                  <img
                    src="src/assets/img/lq.png"
                    alt="Image 1"
                    className="image-circle"
                  />
                  <img
                    src="src/assets/img/lq.png"
                    alt="Image 2"
                    className="image-circle"
                  />
                  <img
                    src="src/assets/img/lq.png"
                    alt="Image 3"
                    className="image-circle"
                  />
                </div>
                <div className="star-rating">
                  <StarRating rating={player.rating} totalStars={5} />
                </div>
              </div>
              <div className="money">
                <img src="src\assets\img\token-branded_bcoin.png" />
                <h6>20000đ</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;

import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "./userHomepageStyle.css";
import React, { useState, useEffect } from "react";

// Định nghĩa kiểu cho game
interface Game {
  id: number;
  name: string;
  displayName: string;
  image: string;
}

const fetchGamesFromAPI = async (): Promise<Game[]> => {
  try {
    // URL API giả định, bạn cần thay bằng endpoint thật
    const response = await fetch("http://localhost:3000/api/v1/public/game");

    // Kiểm tra nếu không thành công
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Chuyển đổi dữ liệu JSON
    const data = await response.json();

    // Map dữ liệu để khớp với kiểu Game
    const games: Game[] = data.map((item: any) => ({
      id: item._id,
      name: item.name,
      displayName: item.displayName,
      image: item.image,
    }));

    return games;
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return [];
  }
};

// Định nghĩa kiểu dữ liệu cho một người chơi
interface DPlayerRanking {
  userId: any;
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  weeklySpent: string;
}

interface GPlayerRanking {
  id: string;
  userId: any;
  avatar: string;
  nameDisplay: string;
  totalRentHour: number;
  totalRating: number;
}

const fetchDonatePlayerRankingFromAPI = async (): Promise<DPlayerRanking[]> => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/users?filter=weeklySpent"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // If the response is an object containing an array, access the array
    const players: DPlayerRanking[] = Array.isArray(data.users)
      ? data.users.map((item: any) => ({
          id: item._id,
          firstName: item.firstName,
          lastName: item.lastName,
          avatar: item.avatar, // Adjust as necessary
          email: item.email,
          weeklySpent: item.weeklySpent,
        }))
      : [];

    return players;
  } catch (error) {
    console.error("Failed to fetch player ranking:", error);
    return [];
  }
};

const fetchGmasterPlayerRankingFromAPI = async (): Promise<
  GPlayerRanking[]
> => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/players?fillter=rating"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    // Map dữ liệu từ API vào interface GPlayerRanking
    const players: GPlayerRanking[] = data.map((item: any) => ({
      id: item._id, // Nếu API trả về `_id`
      userId: item.userId,
      avatar: "src/assets/img/Player Image.png", // Đường dẫn ảnh;
      nameDisplay: item.nameDisplay,
      totalRentHour: item.totalRentHour,
      totalRating: item.totalRating / item.totalReview,
    }));

    return players;
  } catch (error) {
    console.error("Failed to fetch Gmaster Player Ranking:", error);
    return [];
  }
};

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

interface Player {
  id: string;
  userId: any;
  avatar: string;
  nameDisplay: string;
  introduce: string;
  rentPrice: number;
  totalRating: number;
  pics: { _id: string; url: string }[];
}

const fetchPlayerFromAPI = async ({
  fillter,
}: {
  fillter: string;
}): Promise<Player[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/players?filter=${fillter}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    const players: Player[] = data.map((item: any) => ({
      id: item._id, // ID người chơi
      userId: item.userId, // ID người dùng
      avatar: item.avatar || "", // Avatar (giả sử API trả về trường này)
      nameDisplay: item.nameDisplay, // Tên hiển thị
      introduce: item.introduce || "", // Giới thiệu
      rentPrice: item.rentPrice || 0, // Giá thuê
      totalRating: item.totalRating / item.totalReview || 0, // Tổng số đánh giá
      pics: item.pics || [], // Mảng hình ảnh (giả sử API trả về mảng này)
    }));

    return players;
  } catch (error) {
    console.error("Failed to fetch Gmaster Player Ranking:", error);
    return [];
  }
};

const UserHomePage = () => {
  const [games, setGames] = useState<Game[]>([]); // Chỉ định kiểu mảng các game
  const [, setLoading] = useState(true); // Trạng thái loading
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    // Gọi API và cập nhật dữ liệu
    fetchGamesFromAPI().then((data) => {
      setGames(data); // Dữ liệu phải có kiểu Game[]
      setLoading(false); // Đặt loading thành false khi nhận được dữ liệu
    });
  }, [user]);

  const [topDonate, setTopDonate] = useState<DPlayerRanking[]>([]);
  const [topGmaster, setTopGmaster] = useState<GPlayerRanking[]>([]);

  const [pro, setPro] = useState<Player[]>([]);
  const [popular, setPopular] = useState<Player[]>([]);

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
  }, [user]);

  const you = topDonate.find((player) => player.id === user._id);
  const index = topDonate.findIndex((player) => player.id === user._id);

  useEffect(() => {
    // Gọi API và cập nhật dữ liệu
    fetchPlayerFromAPI({ fillter: "proplayer" }).then((data) => {
      setPro(data);
      setLoading(false);
    });

    fetchPlayerFromAPI({ fillter: "popular" }).then((data) => {
      setPopular(data);
      setLoading(false);
    });
  }, [user]);

  const itemsPerPage = 10; // Số lượng item mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán chỉ số bắt đầu và kết thúc
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlayers = pro.slice(startIndex, endIndex);

  // Xử lý nút Next và Prev
  const handleNext = () => {
    if (currentPage < Math.ceil(pro.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const itemsPerPage2 = 10; // Số lượng item mỗi trang
  const [currentPage2, setCurrentPage2] = useState(1);

  // Tính toán chỉ số bắt đầu và kết thúc
  const startIndex2 = (currentPage2 - 1) * itemsPerPage2;
  const endIndex2 = startIndex2 + itemsPerPage2;
  const currentPlayers2 = popular.slice(startIndex2, endIndex2);

  // Xử lý nút Next và Prev
  const handleNext2 = () => {
    if (currentPage2 < Math.ceil(popular.length / itemsPerPage2)) {
      setCurrentPage2((prev) => prev + 1);
    }
  };

  const handlePrev2 = () => {
    if (currentPage2 > 1) {
      setCurrentPage2((prev) => prev - 1);
    }
  };

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
                <img src={game.image} alt={game.name} />
                <p>{game.displayName}</p>
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
                {index < 3 ? (
                  <img
                    src={`src/assets/img/${index + 1}.png`}
                    alt="avatar"
                    style={{ width: "25px", height: "25px" }}
                  />
                ) : (
                  <h4>{index}</h4>
                )}
                <img src={you.avatar} alt="avatar" />
                <div className="ranking-child-info">
                  <h4>
                    {you.firstName} {you.lastName}
                  </h4>
                  <h6>{you.email}</h6>
                </div>
                <div className="ranking-child-donate">
                  <img
                    src="src/assets/img/token-branded_bcoin.png"
                    alt="dollar"
                  />
                  <h5>{you.weeklySpent}</h5>
                </div>
              </div>
            )}
            <h3>Đại gia tuần này</h3>
            <div className="ranking-table-2">
              {topDonate.map((player, index) => (
                <div
                  key={player.id}
                  className="ranking-child hover:bg-background"
                  id={`top${index + 1}`}
                >
                  {index < 3 ? (
                    <img
                      src={`src/assets/img/${index + 1}.png`}
                      alt="avatar"
                      style={{ width: "25px", height: "25px" }}
                    />
                  ) : (
                    <h4>{index + 1}</h4>
                  )}
                  <img src={player?.avatar} alt="avatar" />
                  <div className="ranking-child-info">
                    <h4>
                      {player.firstName} {player.lastName}
                    </h4>
                    <h6>{player.email}</h6>
                  </div>
                  <div className="ranking-child-donate">
                    <img
                      src="src/assets/img/token-branded_bcoin.png"
                      alt="dollar"
                    />
                    <h5>{player.weeklySpent}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ranking-table">
            <h2>Top Gmaster</h2>
            <div className="ranking-table-2" id="ranking-gmaster">
              {topGmaster.map((player, index) => (
                <div
                  key={player.id}
                  className="ranking-child hover:bg-background"
                  id={`top${index + 1}`}
                  onClick={() => {
                    navigate(`/user/${player.userId._id}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {index < 3 ? (
                    <img
                      src={`src/assets/img/${index + 1}.png`}
                      alt="avatar"
                      style={{ width: "25px", height: "25px" }}
                    />
                  ) : (
                    <h4>{index + 1}</h4>
                  )}
                  <img src={player?.userId?.avatar} alt="avatar" />
                  <div className="ranking-child-info">
                    <h4>{player.nameDisplay}</h4>
                    <h6>Tổng số giờ thuê: {player.totalRentHour}</h6>
                  </div>
                  <StarRating rating={player.totalRating} totalStars={5} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pro-player">
        <div className="name-title">
          <h1>NGƯỜI CHƠI PHỔ BIẾN</h1>
          <img src="src\assets\img\ToolTip1.png" alt="" className="tooltip" />
        </div>
        <div className="pro-player-list">
          {currentPlayers2.map((player) => (
            <div
              className="pro-player-item"
              key={player.userId}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(`/user/${player.userId._id}`);
              }}
            >
              <img src={player?.userId?.avatar} alt="avatar" />
              <div className="name-container">
                <h4>{player.nameDisplay}</h4>
                <div className="green-dot"></div>
              </div>
              <span className="description">{player.introduce}</span>
              <div className="pro-player-rating">
                <div className="image-circle-container">
                  {player.pics.map((pic) => {
                    return (
                      <img
                        key={pic._id}
                        src={pic.url}
                        alt="Image 1"
                        className="image-circle"
                      />
                    );
                  })}
                </div>
                <div className="star-rating">
                  <StarRating rating={player.totalRating} totalStars={5} />
                </div>
              </div>
              <div className="money">
                <img src="src\assets\img\token-branded_bcoin.png" />
                <h6>{player.rentPrice}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrev2} disabled={currentPage2 === 1}>
            Previous
          </button>
          <span>
            Page {currentPage2} of {Math.ceil(popular.length / itemsPerPage2)}
          </span>
          <button
            onClick={handleNext2}
            disabled={
              currentPage2 === Math.ceil(popular.length / itemsPerPage2)
            }
          >
            Next
          </button>
        </div>
      </div>

      <div className="pro-player">
        <div className="name-title">
          <h1>PRO PLAYER COACHING</h1>
          <img
            src="src\assets\img\ToolTip (1).png"
            alt=""
            className="tooltip"
          />
        </div>
        <div className="pro-player-list">
          {currentPlayers.map((player) => (
            <div className="pro-player-item" key={player.userId} >
              <img src={player?.userId?.avatar} alt="avatar" />
              <div className="name-container">
                <h4>{player.nameDisplay}</h4>
                <div className="green-dot"></div>
              </div>
              <span className="description">{player.introduce}</span>
              <div className="pro-player-rating">
                <div className="image-circle-container">
                  {player.pics.map((pic) => {
                    return (
                      <img
                        key={pic._id}
                        src={pic.url}
                        alt="Image 1"
                        className="image-circle"
                      />
                    );
                  })}
                </div>
                <div className="star-rating">
                  <StarRating rating={player.totalRating} totalStars={5} />
                </div>
              </div>
              <div className="money">
                <img src="src\assets\img\token-branded_bcoin.png" />
                <h6>{player.rentPrice}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {Math.ceil(pro.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(pro.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;

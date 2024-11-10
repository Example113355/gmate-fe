import './userHomepageStyle.css'
import React, { useState } from 'react';

const banners = [
    { id: 1, image: 'src/assets/img/Group 2.png', text: 'Miễn phí cho lần đầu tiên' },
    { id: 2, image: 'src/assets/img/Group 2.png', text: 'Khuyến mãi đặc biệt cực hot' },
    { id: 3, image: 'src/assets/img/Group 2.png', text: 'Mua 1 tặng 1 ngay hôm nay' }
];

const playersByRating = [
    { name: 'Player 1', rating: 3 },
    { name: 'Player 2', rating: 4 },
    { name: 'Player 3', rating: 2 },
    { name: 'Player 4', rating: 5 },
    { name: 'Player 5', rating: 1 },
    { name: 'Player 6', rating: 5 },
    { name: 'Player 7', rating: 2 },
    { name: 'Player 8', rating: 4 },
];

interface StarRatingProps {
    rating: number;
    totalStars?: number;
}

interface StarProps {
    filled: boolean;
}

// StarRating Component
const StarRating: React.FC<StarRatingProps> = ({ rating = 0, totalStars = 5 }) => {
    return (
        <div style={{ display: 'flex'}}>
            {[...Array(totalStars)].map((_, index) => (
                <Star key={index} filled={index < rating} />
            ))}
        </div>
    );
};

// Star Component
const Star: React.FC<StarProps> = ({ filled }) => (
    <span style={{ fontSize: '20px' }}>
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
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    const nextBanner = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevBanner = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    const goToBanner = (index: React.SetStateAction<number>) => {
        setCurrentBannerIndex(index);
    };

    return (
        <div className="h-full w-full">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');
            </style>

            <div className="banner">
                <div className="content">
                    <img
                        src={banners[currentBannerIndex].image}
                        alt="Banner"
                        className="banner-image"
                        style={{ width: '50%', height: 'auto' }}
                    />
                    <div className="text">
                        <h1>{banners[currentBannerIndex].text}</h1>
                        <button>Đăng ký ngay</button> 
                    </div>
                </div>
                <div className="pagination">
                    <button id='left' onClick={prevBanner}>&lt;</button>
                    {banners.map((_, index) => (
                        <span
                        key={index}
                        className={`dot ${index === currentBannerIndex ? 'active' : ''}`}
                        onClick={() => goToBanner(index)}
                        ></span>
                    ))}
                    <button id='right' onClick={nextBanner}>&gt;</button>
                </div>
            </div>

            <div className='game-filter'>
                <h1>TÌM BẠN THEO GAME</h1>
                <div className='game-list'> 
                    <div className='game'>
                        <img src='src/assets/img/lq.png' alt='game' />
                        <p>Liên quân moible</p>
                    </div>
                    <div className='game'>
                        <img src='src/assets/img/lq.png' alt='game' />
                        <p>Đấu trường chân lý</p>
                    </div>
                    <div className='game'>
                        <img src='src/assets/img/lq.png' alt='game' />
                        <p>Liên minh huyền thoại</p>
                    </div>
                    <div className='game'>
                        <img src='src/assets/img/lq.png' alt='game' />
                        <p>Player Unknow: Battleground</p>
                    </div>
                    <div className='game'>
                        <img src='src/assets/img/lq.png' alt='game' />
                        <p>CS:GO</p>
                    </div>
                </div>
            </div>

            <div className="ranking">
                <h1>BẢNG XẾP HẠNG</h1>
                <div className="ranking-section">
                    <div className="ranking-table">
                        <h2>Top Donate</h2>
                        <div className='ranking-child' id='you'>
                            <h4>12</h4>
                            <img src='src/assets/img/lq.png' alt='avatar' />
                            <div className='ranking-child-info'>
                                <h4>You</h4>
                                <h6>0909****</h6>
                            </div>
                            <div className='ranking-child-donate'>
                                <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                <h5>20000đ</h5>
                            </div>
                        </div>
                        <h3>Đại gia tuần này</h3>
                        <div className='ranking-table-2'>
                            <div className='ranking-child' id='top1'>
                                <img src='src/assets/img/1.png' alt='avatar' style={{width: "25px", height: "25px"}}/>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>Jjn wein</h4>
                                    <h6>0909****</h6>
                                </div>
                                <div className='ranking-child-donate'>
                                    <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                    <h5>20000đ</h5>
                                </div>
                            </div>
                            <div className='ranking-child' id='top2'>
                                <img src='src/assets/img/2.png' alt='avatar' style={{width: "25px", height: "25px"}}/>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <div className='ranking-child-donate'>
                                    <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                    <h5>20000đ</h5>
                                </div>
                            </div>
                            <div className='ranking-child' id='top3'>
                                <img src='src/assets/img/3.png' alt='avatar' style={{width: "25px", height: "25px"}}/>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <div className='ranking-child-donate'>
                                    <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                    <h5>20000đ</h5>
                                </div>
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <div className='ranking-child-donate'>
                                    <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                    <h5>20000đ</h5>
                                </div>
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <div className='ranking-child-donate'>
                                    <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                    <h5>20000đ</h5>
                                </div>
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <div className='ranking-child-donate'>
                                    <img src='src\assets\img\token-branded_bcoin.png' alt='dollar' />
                                    <h5>20000đ</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ranking-table">
                        <h2>Top Gmaster</h2>
                        <div className='ranking-table-2' id='ranking-gmaster'>
                            <div className='ranking-child' id='top1'>
                                <img src='src/assets/img/1.png' alt='avatar' style={{width: "25px", height: "25px"}}/>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>Jjn wein</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={4} totalStars={5} />
                            </div>
                            <div className='ranking-child' id='top2'>
                                <img src='src/assets/img/2.png' alt='avatar' style={{width: "25px", height: "25px"}}/>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child' id='top3'>
                                <img src='src/assets/img/3.png' alt='avatar' style={{width: "25px", height: "25px"}}/>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                            <div className='ranking-child'>
                                <h4>12</h4>
                                <img src='src/assets/img/lq.png' alt='avatar' />
                                <div className='ranking-child-info'>
                                    <h4>You</h4>
                                    <h6>0909****</h6>
                                </div>
                                <StarRating rating={3} totalStars={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pro-player'>
                <div className='name-title'>
                    <h1>NGƯỜI CHƠI PHỔ BIẾN</h1>
                    <img src="src\assets\img\ToolTip1.png" alt="" />
                </div>
                <div className='pro-player-list'>
                    {playersByRating.map((player, index) => (
                        <div className='pro-player-item' key={index}>
                            <img src='src/assets/img/Player Image.png' alt='avatar' />
                            <div className="name-container">
                                <h4>{player.name}</h4>
                                <div className="green-dot"></div>
                            </div>
                            <span className='description'>Tới sưởi ấm trái tim mình đi. Ongame: Liên quân, LOL, CSGO, ... Gì cũng chơi được.</span>
                            <div className='pro-player-rating'>
                                <div className="image-circle-container">
                                    <img src="src/assets/img/lq.png" alt="Image 1" className="image-circle" />
                                    <img src="src/assets/img/lq.png" alt="Image 2" className="image-circle" />
                                    <img src="src/assets/img/lq.png" alt="Image 3" className="image-circle" />
                                </div>
                                <div className="star-rating">
                                    <StarRating rating={player.rating} totalStars={5}/>
                                </div>
                            </div>
                            <div className='money'>
                                <img src='src\assets\img\token-branded_bcoin.png' />
                                <h6>20000đ</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='pro-player'>
                <div className='name-title'>
                    <h1>PRO PLAYER COACHING</h1>
                    <img src="src\assets\img\ToolTip (1).png" alt="" />
                </div>
                <div className='pro-player-list'>
                    {playersByRating.map((player, index) => (
                        <div className='pro-player-item' key={index}>
                            <img src='src/assets/img/Player Image (1).png' alt='avatar' />
                            <div className="name-container">
                                <h4>{player.name}</h4>
                                <div className="green-dot"></div>
                            </div>
                            <span className='description'>Tới sưởi ấm trái tim mình đi. Ongame: Liên quân, LOL, CSGO, ... Gì cũng chơi được.</span>
                            <div className='pro-player-rating'>
                                <div className="image-circle-container">
                                    <img src="src/assets/img/lq.png" alt="Image 1" className="image-circle" />
                                    <img src="src/assets/img/lq.png" alt="Image 2" className="image-circle" />
                                    <img src="src/assets/img/lq.png" alt="Image 3" className="image-circle" />
                                </div>
                                <div className="star-rating">
                                    <StarRating rating={player.rating} totalStars={5}/>
                                </div>
                            </div>
                            <div className='money'>
                                <img src='src\assets\img\token-branded_bcoin.png' />
                                <h6>20000đ</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default UserHomePage

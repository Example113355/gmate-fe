import logo from '../assets/img/image_logo.png'
import textlogo from '../assets/img/text_logo.png'

import anhmau from '../assets/img/anhmau.jpg'
const PlayerHeader =  () => {
    return (
        <div className="flex items-center justify-between px-8 py-4 shadow-xl container-2xl">
            <div className="flex items-center" >
                <img className='w-24 h-24' src={logo} alt="logo-img" />
                <img className='' src={textlogo} alt="logo-img" />
            </div>

            <ul className='flex text-2xl gap-x-7 '>
                <li className='text-red-500'>Hồ sơ</li>
                <li>Dashboard</li>
                <li>Giá và thời gian</li>
            </ul>
            <div className='flex items-center justify-between gap-2'>
                <button
                style={{ width: "35px", height: "35px" }} 
                className="flex items-center justify-center p-2 text-red-500 bg-gray-100 rounded-full hover:text-red-600 hover:bg-gray-200"
                >
                    <span
                        className="iconify"
                        style={{ fontSize: "28px" }} 
                        data-icon="fluent:chat-multiple-heart-28-regular"
                        data-inline="false"
                    ></span>
                </button>
                <button
                style={{ width: "35px", height: "35px" }} 
                className="flex items-center justify-center p-2 text-red-500 bg-gray-100 rounded-full hover:text-red-600 hover:bg-gray-200"
                >
                    <span
                        className="iconify"
                        style={{ fontSize: "28px" }} 
                        data-icon="carbon:notification-new"
                        data-inline="false"
                    ></span>
                </button>
                <img className='w-20 h-20 rounded-full' src={anhmau} alt='anh mau'></img>
            </div>
        </div>
    )
    
}

export default PlayerHeader;
import PlayerHeader from '../../components/player-header'
import avt from '../../assets/img/anhmau.jpg'
import lq from '../../assets/img/lq.png'
import Footer from '../../components/footer'
const PlayerProfile = () => {
    return (
        <div className="container-2xl">
            <PlayerHeader id={1} />
            <div className='container flex justify-between mx-auto my-8'>
                <div className='w-1/6 mr-8'>
                    <img src={avt} alt='avatar'></img>
                    <p className='py-6 text-xl text-center text-emerald-600 '>Cập nhật ảnh</p>
                    <p className='text-xl text-center text-neutral-500'>NGÀY THAM GIA: 19/7/2022</p>
                    <div className='flex items-center mt-8'>
                        <h3 className='text-2xl text-red-500'>GIỚI THIỆU:</h3>
                        <button
                            style={{ width: "35px", height: "35px" }}
                            className="flex items-center justify-center p-2 mb-2 text-gray-500 hover:text-red-600"
                        >
                            <span
                                className="iconify"
                                style={{ fontSize: "28px" }}
                                data-icon="ic:outline-edit"
                                data-inline="false"
                            >
                            </span>


                        </button>
                    </div>
                    <div className='h-0.5 bg-gray-500'></div>
                    <p className='p-2'>Không đấm khách =)))</p>
                    <p className='p-2 text-gray-400 text-end'>30/11/2024=)))</p>

                </div>
                <div className='w-5/6 ml-8'>
                    <div className='flex gap-16'>
                        <div className='w-3/5'>
                            <div className='flex'>
                                <h1 className='text-5xl'>Hươngggggg BKU</h1>
                                <button
                                    style={{ width: "35px", height: "35px" }}
                                    className="flex items-center justify-center p-2 mb-2 text-gray-500 hover:text-red-600"
                                >
                                    <span
                                        className="iconify"
                                        style={{ fontSize: "28px" }}
                                        data-icon="ic:outline-edit"
                                        data-inline="false"
                                    >
                                    </span>
                                </button>
                            </div>
                            <div className='flex text-xl'>
                                <div className='p-8 text-center'>
                                    <p className=''>SỐ NGƯỜI THEO DÕI</p>
                                    <p className='pt-4 text-red-500'>510 người</p>
                                </div>
                                <div className='p-8 text-center'>
                                    <p>ĐÃ ĐƯỢC THUÊ</p>
                                    <p className='pt-4 text-red-500'>500 GIỜ</p>
                                </div>
                                <div className='p-8 text-center'>
                                    <p>TỶ LỆ HOÀN THÀNH</p>
                                    <p className='pt-4 text-red-500'>87%</p>
                                </div>
                                <div className='p-8 text-center'>
                                    <p>CẤP BẬC</p>
                                    <p className='pt-4 text-red-500'>CAO THỦ</p>
                                </div>
                            </div>
                            <div className='h-0.5 bg-gray-500'></div>
                            <p className='pt-4 text-2xl'>CÁC LOẠI GAME</p>
                            <div className='flex gap-6 mt-2 mb-8'>
                                <div className='relative px-12 py-4 text-base text-white rounded-xl bg-zinc-700'>
                                    Đấu trường chân lý
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-gray-500 -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>

                                </div>
                                <div className='relative px-12 py-4 text-base text-white rounded-xl bg-zinc-700'>
                                    Đấu trường chân lý
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-gray-500 -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>

                                </div>
                                <div className='relative px-12 py-4 text-base text-white rounded-xl bg-zinc-700'>
                                    Đấu trường chân lý
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-gray-500 -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>

                                </div>
                                <div className='bg-red-500 rounded-md'>
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="flex items-center justify-center p-2 mb-2 text-white hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="formkit:add"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>

                            </div>
                            <div className='h-0.5 bg-gray-500'></div>
                            <div className='flex justify-between py-4 text-2xl'>
                                <p>ẢNH TẢI LÊN</p>
                                <p className='text-green-500'>Thêm ảnh mới</p>
                            </div>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img className='w-36 h-36' src={avt} />
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-white -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>
                                <div className='relative'>
                                    <img className='w-36 h-36' src={avt} />
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-white -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>
                                <div className='relative'>
                                    <img className='w-36 h-36' src={avt} />
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-white -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>
                                <div className='relative'>
                                    <img className='w-36 h-36' src={avt} />
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-white -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>
                                <div className='relative'>
                                    <img className='w-36 h-36' src={avt} />
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="absolute flex items-center justify-center p-2 mb-2 text-white -right-2 -top-2 hover:text-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="lets-icons:close-ring-light"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>



                            </div>
                            <div className='flex items-center mt-8'>
                                <h3 className='text-2xl'>MÔ TẢ:</h3>
                                <button
                                    style={{ width: "35px", height: "35px" }}
                                    className="flex items-center justify-center p-2 mb-2 text-gray-500 hover:text-red-600"
                                >
                                    <span
                                        className="iconify"
                                        style={{ fontSize: "28px" }}
                                        data-icon="ic:outline-edit"
                                        data-inline="false"
                                    >
                                    </span>


                                </button>
                            </div>
                            <p>GIỌNG BẮC. MỎ HƠI HỖN. CHƠI GAME VUI VẺ KO TRYHARD !!! SAU 23H MÌNH NHẬN 100K/H VÌ MÌNH LƯỜI CHƠI ĐÊM HIHI</p>
                            <p>Mình nhận chơi :</p>
                            <p>- Lol: đơn đôi, flex chơi hơi dốt nhưng mà hứa ko tạ =))</p>
                            <p>- Lol: đơn đôi, flex chơi hơi dốt nhưng mà hứa ko tạ =))</p>
                            <p>- Lol: đơn đôi, flex chơi hơi dốt nhưng mà hứa ko tạ =))</p>
                            <p>- Lol: đơn đôi, flex chơi hơi dốt nhưng mà hứa ko tạ =))</p>
                            <p>- Lol: đơn đôi, flex chơi hơi dốt nhưng mà hứa ko tạ =))</p>
                            <p>❌ KHÔNG RENT NỢ</p>
                            <p>Đã ghé qua đây rùi thì cho mình xin 1 fl nhé hehe. iuuuuuuuuuuu ♥♥♥</p>
                            <div className='h-0.5 bg-gray-500'></div>

                            <p className='py-4 text-2xl'>ĐÁNH GIÁ</p>
                            <div className='flex justify-between'>
                                <img src={avt} className='w-14 h-14' />
                                <div className='flex-1 ml-4'>
                                    <p className='text-2xl text-blue-500'>Lâm Trúc</p>
                                    <div>04:22:39   27/8/2024</div>
                                    <p className='text-xl'>Mê bạn này quá tr</p>
                                    <div className='h-0.5 bg-gray-500'></div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <img src={avt} className='w-14 h-14' />
                                <div className='flex-1 ml-4'>
                                    <p className='text-2xl text-blue-500'>Lâm Trúc</p>
                                    <div>04:22:39   27/8/2024</div>
                                    <p className='text-xl'>Mê bạn này quá tr</p>
                                    <div className='h-0.5 bg-gray-500'></div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <img src={avt} className='w-14 h-14' />
                                <div className='flex-1 ml-4'>
                                    <p className='text-2xl text-blue-500'>Lâm Trúc</p>
                                    <div>04:22:39   27/8/2024</div>
                                    <p className='text-xl'>Mê bạn này quá tr</p>
                                    <div className='h-0.5 bg-gray-500'></div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <img src={avt} className='w-14 h-14' />
                                <div className='flex-1 ml-4'>
                                    <p className='text-2xl text-blue-500'>Lâm Trúc</p>
                                    <div>04:22:39   27/8/2024</div>
                                    <p className='text-xl'>Mê bạn này quá tr</p>
                                    <div className='h-0.5 bg-gray-500'></div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <img src={avt} className='w-14 h-14' />
                                <div className='flex-1 ml-4'>
                                    <p className='text-2xl text-blue-500'>Lâm Trúc</p>
                                    <div>04:22:39   27/8/2024</div>
                                    <p className='text-xl'>Mê bạn này quá tr</p>
                                    <div className='h-0.5 bg-gray-500'></div>
                                </div>
                            </div>

                        </div>


                        <div className='w-2/5 text-center'>
                            <div className='flex items-center gap-8 mx-auto'>
                                <p className='text-3xl'>GAME YÊU THÍCH</p>
                                <div className='flex items-center bg-red-500 rounded-md'>
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="flex items-center justify-center p-2 mb-2 text-white hover:bg-red-600"
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "20px" }}
                                            data-icon="formkit:add"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='p-8 mt-4 bg-gray-200 border-2 border-slate-500 rounded-xl'>
                                <div className='flex items-center my-4 bg-slate-600 rounded-xl'>
                                    <img className='w-28 h-28 rounded-xl' src={lq}></img>
                                    <div className='flex-1'>
                                        <h2 className='text-xl text-center text-white'>LIÊN QUÂN MOBILE</h2>
                                        <div className='flex items-center ml-4'>
                                            <p className='text-base text-white'>Kỹ Năng:</p>
                                            <span
                                                className="text-pink-500 iconify"
                                                style={{ fontSize: "20px" }}
                                                data-icon="material-symbols-light:diamond-rounded"
                                                data-inline="false"
                                            >
                                            </span>
                                        </div>

                                        <p className='ml-4 text-base text-white text-start'>Số giờ được thuê: 80</p>
                                    </div>
                                </div>
                                <div className='flex items-center my-4 bg-slate-600 rounded-xl'>
                                    <img className='w-28 h-28 rounded-xl' src={lq}></img>
                                    <div className='flex-1'>
                                        <h2 className='text-xl text-center text-white'>LIÊN QUÂN MOBILE</h2>
                                        <div className='flex items-center ml-4'>
                                            <p className='text-base text-white'>Kỹ Năng:</p>
                                            <span
                                                className="text-pink-500 iconify"
                                                style={{ fontSize: "20px" }}
                                                data-icon="material-symbols-light:diamond-rounded"
                                                data-inline="false"
                                            >
                                            </span>
                                        </div>

                                        <p className='ml-4 text-base text-white text-start'>Số giờ được thuê: 80</p>
                                    </div>
                                </div>
                                <div className='flex items-center my-4 bg-slate-600 rounded-xl'>
                                    <img className='w-28 h-28 rounded-xl' src={lq}></img>
                                    <div className='flex-1'>
                                        <h2 className='text-xl text-center text-white'>LIÊN QUÂN MOBILE</h2>
                                        <div className='flex items-center ml-4'>
                                            <p className='text-base text-white'>Kỹ Năng:</p>
                                            <span
                                                className="text-pink-500 iconify"
                                                style={{ fontSize: "20px" }}
                                                data-icon="material-symbols-light:diamond-rounded"
                                                data-inline="false"
                                            >
                                            </span>
                                        </div>

                                        <p className='ml-4 text-base text-white text-start'>Số giờ được thuê: 80</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex gap-2 mx-auto mt-4 ml-72'>
                        <div className='p-4 border-2 border-rose-500'>Previous</div>
                        <div className='p-4 text-white border-2 bg-rose-500 border-rose-500'>1</div>
                        <div className='p-4 border-2 border-rose-500'>2</div>
                        <div className='p-4 border-2 border-rose-500'>3</div>
                        <div className='p-4 border-2 border-rose-500'>4</div>
                        <div className='p-4 border-2 border-rose-500'>Next</div>
                    </div>
                </div>

            </div>
            <Footer />


        </div>
    )
}

export default PlayerProfile;
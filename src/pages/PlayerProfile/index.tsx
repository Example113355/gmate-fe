import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Alert, Flex, Input, Modal, Spin } from 'antd';

const PlayerProfile = () => {
    const playerId = '674f994f63e208a84ae8c965';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [avatarFile, setAvatarFile] = useState(null);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAvatarChange = (e) => {
        setAvatarFile(e.target.files[0]);
    };

    const handleOk = async () => {
      setIsModalOpen(false);
      try {
        
        const response = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
            categories: [...profile.categories,{category:newGame}],
        })
        if (response.status === 200) {
            fetchPlayerProfile();
        } else {
            console.log("Fail to update player profile")
        }

    } catch (error) {
        console.log(error.message);
    }
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const [newGame, setNewGame] = useState("New game");
    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [editDes, setEditDes] = useState(false);
    const [editIntroduce, setEditIntroduce] = useState(false);
    const inputRef = useRef(null);
    const introduceRef = useRef(null);
    const desRef = useRef(null);
    const [description, setDescription] = useState(profile?.description)
    const [displayName, setDisplayName] = useState(profile?.nameDisplay);
    const [introduce, setIntroduce] = useState(profile?.introduce);
    const fetchPlayerProfile = async ()=> {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/players/${playerId}`);
            if (response.status === 200) {
                setProfile(response.data);
            } else {
                console.log("Fail to get player profile!");
            }
        } catch (e) {
            console.error(e);
        }
    }

    const fetchReviews = async ()=> {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/reviews/playerId/${playerId}`);
            if (response.status === 200) {
                setReviews(response.data);
            } else {
                console.log("Fail to get player profile!");
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=> {
        
        fetchPlayerProfile();
    },[playerId])

    useEffect(()=> {
        
        fetchReviews();
    },[playerId])


    

    useEffect(()=> {
        if(profile.nameDisplay) {
            setDisplayName(profile.nameDisplay);
        }
    },[profile.nameDisplay])

    useEffect(()=> {
        if(profile.introduce) {
            setIntroduce(profile.introduce);
        }
    },[profile.introduce])

    useEffect(()=> {
        if(profile.description) {
            setDescription(profile.description);
        }
    },[profile.description])

    useEffect(() => {
        if(editMode && inputRef.current) {
            inputRef.current.focus();
        }
    },[editMode])

    useEffect(() => {
        if(editDes && desRef.current) {
            desRef.current.focus();
        }
    },[editDes])

    useEffect(() => {
        if(editIntroduce && introduceRef.current) {
            introduceRef.current.focus();
        }
    },[editIntroduce])

    const handleEditName = () => {
        setEditMode(true);
    }

    const handleEditDes = () => {
        setEditDes(true);
    }

    const handleBlur = async () => {
        setEditMode(false);
        const updateName = inputRef.current.value;
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{...profile,
                nameDisplay: updateName,
            })
            if (response.status === 200) {
                fetchPlayerProfile();

            } else {
                console.log("Fail to update player profile")
            }

        } catch (error) {
            console.log(error.message);
        }

    }

    const handleDesBlur = async () => {
        setEditDes(false);
        const updateDes = desRef.current.value;
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
                description: updateDes,
            })
            if (response.status === 200) {
                fetchPlayerProfile();

            } else {
                console.log("Fail to update player profile")
            }

        } catch (error) {
            console.log(error.message);
        }

    }

    const handleIntroduceBlur = async () => {
        setEditIntroduce(false);
        const newIntroduce = introduceRef.current.value;
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
                introduce: newIntroduce,
            })
            if (response.status === 200) {
                fetchPlayerProfile();

            } else {
                console.log("Fail to update player profile")
            }

        } catch (error) {
            console.log(error.message);
        }

    }

    const handleDeleteCategory = async (name) => {
       const newCategories = profile.categories?.filter((cate)=> {return cate.category !== name});
       try {
            const response = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
                categories: newCategories,
            })
            if (response.status === 200) {
                fetchPlayerProfile();
            } else {
                console.log("Fail to update player profile")
            }

        } catch (error) {
            console.log(error.message);
        }

    }
    const handleDeleteImage = async (name) => {
        const newImages = profile.pics?.filter((pic)=> {return pic.url !== name});
        try {
             const response = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
                 pics: newImages,
             })
             if (response.status === 200) {
                 fetchPlayerProfile();
             } else {
                 console.log("Fail to update player profile")
             }
 
         } catch (error) {
             console.log(error.message);
         }
 
    }

    const handleEditIntroduce = () => {
        setEditIntroduce(true);
        
    }

    const avatar = profile.pics? profile.pics[0].url:"";

    const handleUploadFile = async () => {
        if (!imageFile) {
            alert("Vui lòng chọn ảnh!");
            return;
        }
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "TMDTHK241"); // Tạo trong Cloudinary
        formData.append("cloud_name", "degq59937");
        setLoading(true);
        try {
            const response = await axios.post(
              "https://api.cloudinary.com/v1_1/degq59937/image/upload",
              formData
            );
      
            
            if (response.status === 200) {
                const imageUrl = response.data.secure_url; // Link ảnh sau khi upload
            
                const response2 = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
                    pics: [...profile.pics,{url: imageUrl}],
                })
                if (response2.status === 200) {
                    setLoading(false);
                    fetchPlayerProfile();
                }
            } else {
                console.log("Fail to update player profile")
            }
            
      
            // Gửi link ảnh về backend
            
            alert("Upload thành công!");
          } catch (error) {
            console.error("Lỗi khi upload ảnh:", error);
            alert("Upload thất bại!");
        } 

    };

    const handleUploadFile2 = async () => {
        if (!avatarFile) {
            alert("Vui lòng chọn ảnh!");
            return;
        }
        const formData = new FormData();
        formData.append("file", avatarFile);
        formData.append("upload_preset", "TMDTHK241"); // Tạo trong Cloudinary
        formData.append("cloud_name", "degq59937");
        setLoading(true);
        try {
            const response = await axios.post(
              "https://api.cloudinary.com/v1_1/degq59937/image/upload",
              formData
            );
      
            
            if (response.status === 200) {
                
                
                const imageUrl = response.data.secure_url; // Link ảnh sau khi upload
            
                const response2 = await axios.put(`http://localhost:3000/api/v1/players/${playerId}`,{
                pics: [{url: imageUrl},...profile.pics],
                })

                if(response2.status === 200) {
                    fetchPlayerProfile();
                    setLoading(false);
                }
            } else {
                console.log("Fail to update player profile")
            }
            
      
            // Gửi link ảnh về backend
            
            alert("Upload thành công!");
          } catch (error) {
            console.error("Lỗi khi upload ảnh:", error);
            alert("Upload thất bại!");
        } 

    };

    const handleAddGame = async () => {
        
        showModal();
            
    }


    useEffect(()=> {
        console.log("Game:", newGame);
    },[newGame]);
    

    return (
        <div className="container-2xl">
            <Flex gap="middle" vertical>
                <Spin spinning={loading} >
                    
                </Spin>
      
            </Flex>
            <Modal title="Thêm game mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={e=>setNewGame(e.target.value)} placeholder="Nhập tên game" />
            </Modal>
            {/* <PlayerHeader id={1} /> */}
            <div className='container flex justify-between mx-auto my-8'>
                <div className='w-1/6 mr-8'>
                    <img src={avatar} alt='avatar'></img>
                    <p onClick={handleUploadFile2} className='hover:cursor-pointer py-4 text-xl text-center text-emerald-600 '>Cập nhật ảnh</p>
                    <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    // className="hidden"
                                />
                    <p className='text-xl text-center text-neutral-500'>NGÀY THAM GIA: {moment(profile.createAt).format("DD/MM/YYYY")}</p>
                    <div className='flex items-center mt-8'>
                        <h3 className='text-2xl text-red-500'>GIỚI THIỆU:</h3>
                        {
                            !editIntroduce &&
                            <button
                            style={{ width: "35px", height: "35px" }}
                            onClick={handleEditIntroduce}
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
                        }
                        
                    </div>
                    <div className='h-0.5 bg-gray-500'></div>
                    {
                        !editIntroduce && <p className='p-2 text-xl'>{profile.introduce}</p>
                    }

                    {
                        editIntroduce && <textarea onChange={e=>{setIntroduce(e.target.value)}} onBlur={handleIntroduceBlur} className='w-96 text-2xl' ref={introduceRef} value={introduce} ></textarea>
                    }
                    
                    

                </div>
                <div className='w-5/6 ml-8'>
                    <div className='flex gap-16'>
                        <div className='w-3/5'>
                            <div className='flex'>
                                {
                                    editMode == true && <input onBlur={handleBlur} ref={inputRef} className='text-black text-4xl' type='text' value={displayName} onChange={(e)=>{setDisplayName(e.target.value)}}></input>
                                }
                                {
                                    editMode === false && <h1 className='text-5xl'>{profile.nameDisplay}</h1>
                                }
                                
                                {
                                    !editMode && 
                                    <button
                                        style={{ width: "35px", height: "35px" }}
                                        className="flex items-center justify-center p-2 mb-2 text-gray-500 hover:text-red-600"
                                        onClick={handleEditName}
                                    >
                                        <span
                                            className="iconify"
                                            style={{ fontSize: "28px" }}
                                            data-icon="ic:outline-edit"
                                            data-inline="false"
                                        >
                                        </span>
                                    </button>
                                }
                                
                            </div>
                            <div className='flex text-xl'>
                                <div className='p-8 text-center'>
                                    <p className=''>SỐ NGƯỜI THEO DÕI</p>
                                    <p className='pt-4 text-red-500'>510 người</p>
                                </div>
                                <div className='p-8 text-center'>
                                    <p>ĐÃ ĐƯỢC THUÊ</p>
                                    <p className='pt-4 text-red-500'>{profile.totalRentHour} GIỜ</p>
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
                                {profile.categories?.map((cate,index)=> {
                                    return (
                                        <div key={index} className='relative px-12 py-4 text-base text-white rounded-xl bg-zinc-700'>
                                            <p className='text-lg'>{cate.category}</p> 
                                            <button
                                                style={{ width: "35px", height: "35px" }}
                                                onClick={()=>handleDeleteCategory(cate.category)}
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
                                    )
                                })}
                                
                                
                                
                                <div className='bg-red-500 rounded-md'>
                                    <button
                                        onClick={handleAddGame}
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
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    // className="hidden"
                                />
                                <button className='bg-red-600 text-white px-6 py-4 hover:opacity-80' onClick={handleUploadFile}>Submit</button>
                            </div>
                            <div className='flex gap-4'>
                                {profile.pics?.map((pic,index)=> {
                                    return (
                                        <div key={index} className='relative'>
                                            <img className='w-36 h-36' src={pic.url} />
                                            <button
                                                style={{ width: "35px", height: "35px" }}
                                                onClick={() => handleDeleteImage(pic.url)}
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
                                    )
                                })}
                                
                            </div>
                            <div className='flex items-center mt-8'>
                                <h3 className='text-2xl'>MÔ TẢ:</h3>
                                {
                                    !editDes && 
                                    <button
                                    style={{ width: "35px", height: "35px" }}
                                    onClick={handleEditDes}
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
                                }
                                
                            </div>
                            {
                                editDes && <textarea ref={desRef} className='w-full text-2xl h-fit' value={description} onBlur={handleDesBlur} onChange={e=>{setDescription(e.target.value)}}></textarea>
                            }
                            {
                                !editDes && <div className='text-2xl'>{profile.description}</div>
                            }
                            <div className='h-0.5 bg-gray-500'></div>

                            <p className='py-4 text-2xl'>ĐÁNH GIÁ ({reviews.length})</p>
                            {
                                reviews.map((review, idx) => {
                                    return (
                                        <div key={idx} className='flex justify-between'>
                                            <img src={avatar} className='w-14 h-14' />
                                            <div className='flex-1 ml-4'>
                                                <p className='text-2xl text-blue-500'>Lâm Trúc</p>
                                                <div>{moment(review.createAt).format("DD/MM/YYYY")}</div>
                                                <p className='text-xl'>{review.review}</p>
                                                <div className='h-0.5 bg-gray-500'></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                            
                           

                        </div>

                    </div>
                   
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default PlayerProfile;
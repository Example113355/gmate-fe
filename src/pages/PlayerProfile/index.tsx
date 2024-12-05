import axios from "axios";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useUser } from "../../contexts/UserContext";

const PlayerProfile = () => {
  const { user, setUser } = useUser();
  console.log("AAAAAAAA");
  console.log(user);
  const playerId = user._id;

  const [profile, setProfile] = useState<any>({});
  const [editMode, setEditMode] = useState<any>(false);
  const [editDes, setEditDes] = useState<any>(false);
  const [editIntroduce, setEditIntroduce] = useState<any>(false);
  const inputRef = useRef<any>(null);
  const introduceRef = useRef<any>(null);
  const desRef = useRef<any>(null);
  const [description, setDescription] = useState(profile?.description);
  const [displayName, setDisplayName] = useState(profile?.nameDisplay);
  const [introduce, setIntroduce] = useState(profile?.introduce);
  const fetchPlayerProfile = async () => {
    try {
      console.log("fetching player profile");
      console.log(playerId);
      const response = await axios.get(
        `http://localhost:3000/api/v1/players/${playerId}`
      );
      if (response.status === 200) {
        setProfile(response.data);
      } else {
        console.log("Fail to get player profile!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPlayerProfile();
  }, [user]);

  useEffect(() => {
    if (profile.nameDisplay) {
      setDisplayName(profile.nameDisplay);
    }
  }, [profile.nameDisplay]);

  useEffect(() => {
    if (profile.introduce) {
      setIntroduce(profile.introduce);
    }
  }, [profile.introduce]);

  useEffect(() => {
    if (profile.description) {
      setDescription(profile.description);
    }
  }, [profile.description]);

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  useEffect(() => {
    if (editDes && desRef.current) {
      desRef.current.focus();
    }
  }, [editDes]);

  useEffect(() => {
    if (editIntroduce && introduceRef.current) {
      introduceRef.current.focus();
    }
  }, [editIntroduce]);

  const handleEditName = () => {
    setEditMode(true);
  };

  const handleEditDes = () => {
    setEditDes(true);
  };

  const handleBlur = async () => {
    setEditMode(false);
    const updateName = inputRef.current.value;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/players/${playerId}`,
        {
          nameDisplay: updateName,
        }
      );
      if (response.status === 200) {
        fetchPlayerProfile();
      } else {
        console.log("Fail to update player profile");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleDesBlur = async () => {
    setEditDes(false);
    const updateDes = desRef.current.value;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/players/${playerId}`,
        {
          description: updateDes,
        }
      );
      if (response.status === 200) {
        fetchPlayerProfile();
      } else {
        console.log("Fail to update player profile");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleIntroduceBlur = async () => {
    setEditIntroduce(false);
    const newIntroduce = introduceRef.current.value;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/players/${playerId}`,
        {
          introduce: newIntroduce,
        }
      );
      if (response.status === 200) {
        fetchPlayerProfile();
      } else {
        console.log("Fail to update player profile");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleDeleteCategory = async (name: any) => {
    const newCategories = profile.categories?.filter((cate: any) => {
      return cate.category !== name;
    });
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/players/${playerId}`,
        {
          categories: newCategories,
        }
      );
      if (response.status === 200) {
        fetchPlayerProfile();
      } else {
        console.log("Fail to update player profile");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };
  const handleDeleteImage = async (name: any) => {
    const newImages = profile.pics?.filter((pic: any) => {
      return pic.url !== name;
    });
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/players/${playerId}`,
        {
          pics: newImages,
        }
      );
      if (response.status === 200) {
        fetchPlayerProfile();
      } else {
        console.log("Fail to update player profile");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleEditIntroduce = () => {
    setEditIntroduce(true);
  };

  return (
    <div className="container-2xl">
      {/* <PlayerHeader id={1} /> */}
      <div className="container flex justify-between mx-auto my-8">
        <div className="w-1/6 mr-8">
          <img src={profile?.userId?.avatar} alt="avatar"></img>
          <p className="py-6 text-xl text-center text-emerald-600 ">
            Cập nhật ảnh
          </p>
          <p className="text-xl text-center text-neutral-500">
            NGÀY THAM GIA: {moment(profile.createAt).format("DD/MM/YYYY")}
          </p>
          <div className="flex items-center mt-8">
            <h3 className="text-2xl text-red-500">GIỚI THIỆU:</h3>
            {!editIntroduce && (
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
                ></span>
              </button>
            )}
          </div>
          <div className="h-0.5 bg-gray-500"></div>
          {!editIntroduce && <p className="p-2 text-xl">{profile.introduce}</p>}

          {editIntroduce && (
            <textarea
              onChange={(e) => {
                setIntroduce(e.target.value);
              }}
              onBlur={handleIntroduceBlur}
              className="w-96 text-2xl"
              ref={introduceRef}
              value={introduce}
            ></textarea>
          )}
        </div>
        <div className="w-5/6 ml-8">
          <div className="flex gap-16">
            <div className="w-3/5">
              <div className="flex">
                {editMode == true && (
                  <input
                    onBlur={handleBlur}
                    ref={inputRef}
                    className="text-black text-4xl"
                    type="text"
                    value={displayName}
                    onChange={(e) => {
                      setDisplayName(e.target.value);
                    }}
                  ></input>
                )}
                {editMode === false && (
                  <h1 className="text-5xl">{profile.nameDisplay}</h1>
                )}

                {!editMode && (
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
                    ></span>
                  </button>
                )}
              </div>
              <div className="flex text-xl">
                <div className="p-8 text-center">
                  <p className="">SỐ NGƯỜI THEO DÕI</p>
                  <p className="pt-4 text-red-500">510 người</p>
                </div>
                <div className="p-8 text-center">
                  <p>ĐÃ ĐƯỢC THUÊ</p>
                  <p className="pt-4 text-red-500">500 GIỜ</p>
                </div>
                <div className="p-8 text-center">
                  <p>TỶ LỆ HOÀN THÀNH</p>
                  <p className="pt-4 text-red-500">87%</p>
                </div>
                <div className="p-8 text-center">
                  <p>CẤP BẬC</p>
                  <p className="pt-4 text-red-500">CAO THỦ</p>
                </div>
              </div>
              <div className="h-0.5 bg-gray-500"></div>
              <p className="pt-4 text-2xl">CÁC LOẠI GAME</p>
              <div className="flex gap-6 mt-2 mb-8">
                {profile.categories?.map((cate: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="relative px-12 py-4 text-base text-white rounded-xl bg-zinc-700"
                    >
                      <p className="text-lg">{cate.category}</p>
                      <button
                        style={{ width: "35px", height: "35px" }}
                        onClick={() => handleDeleteCategory(cate.category)}
                        className="absolute flex items-center justify-center p-2 mb-2 text-gray-500 -right-2 -top-2 hover:text-red-600"
                      >
                        <span
                          className="iconify"
                          style={{ fontSize: "20px" }}
                          data-icon="lets-icons:close-ring-light"
                          data-inline="false"
                        ></span>
                      </button>
                    </div>
                  );
                })}

                <div className="bg-red-500 rounded-md">
                  <button
                    style={{ width: "35px", height: "35px" }}
                    className="flex items-center justify-center p-2 mb-2 text-white hover:text-red-600"
                  >
                    <span
                      className="iconify"
                      style={{ fontSize: "20px" }}
                      data-icon="formkit:add"
                      data-inline="false"
                    ></span>
                  </button>
                </div>
              </div>
              <div className="h-0.5 bg-gray-500"></div>
              <div className="flex justify-between py-4 text-2xl">
                <p>ẢNH TẢI LÊN</p>
                <p className="text-green-500">Thêm ảnh mới</p>
              </div>
              <div className="flex gap-4">
                {profile.pics?.map((pic: any, index: any) => {
                  return (
                    <div key={index} className="relative">
                      <img className="w-36 h-36" src={pic.url} />
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
                        ></span>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center mt-8">
                <h3 className="text-2xl">MÔ TẢ:</h3>
                {!editDes && (
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
                    ></span>
                  </button>
                )}
              </div>
              {editDes && (
                <textarea
                  ref={desRef}
                  className="w-full text-2xl h-fit"
                  value={description}
                  onBlur={handleDesBlur}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              )}
              {!editDes && (
                <div className="text-2xl">{profile.description}</div>
              )}
              <div className="h-0.5 bg-gray-500"></div>

              <p className="py-4 text-2xl">ĐÁNH GIÁ</p>
              <div className="flex justify-between">
                <img src={profile.avatar} className="w-14 h-14" />
                <div className="flex-1 ml-4">
                  <p className="text-2xl text-blue-500">Lâm Trúc</p>
                  <div>04:22:39 27/8/2024</div>
                  <p className="text-xl">Mê bạn này quá tr</p>
                  <div className="h-0.5 bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mx-auto mt-4 ml-72">
            <div className="p-4 border-2 border-rose-500">Previous</div>
            <div className="p-4 text-white border-2 bg-rose-500 border-rose-500">
              1
            </div>
            <div className="p-4 border-2 border-rose-500">2</div>
            <div className="p-4 border-2 border-rose-500">3</div>
            <div className="p-4 border-2 border-rose-500">4</div>
            <div className="p-4 border-2 border-rose-500">Next</div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PlayerProfile;

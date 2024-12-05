import { useState } from "react";
import { Modal, Carousel } from "antd";
import { User } from "../interface";


const UserImg = ({ user }: { user: User }) => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = user?.pics.map((pic) => pic.url);

  const showModal = (index: number) => {
    setCurrentImage(index);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="content_info--img">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="user img"
          className="thumbnail"
          onClick={() => showModal(index)}
        />
      ))}

      <Modal open={visible} footer={null} onCancel={handleCancel}>
        <div className="carousel">
          <Carousel
            arrows
            adaptiveHeight={true}
            initialSlide={currentImage}
          >
            {images.map((image, index) => (
              <div key={index} className="modal_content">
                <img src={image} alt="user img" />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </div>
  );
};

export default UserImg;

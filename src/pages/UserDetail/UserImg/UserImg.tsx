import { useState } from "react";
import { Modal, Carousel } from "antd";

const images = [
  "https://files.playerduo.net/production/thumbs/medium/4e876224-c40d-486c-bddc-77fc3a253cd7__924febe0-96ab-11ef-9376-b533eb6f1b4c__player_album.jpg",
  "https://files.playerduo.net/production/thumbs/medium/4e876224-c40d-486c-bddc-77fc3a253cd7__5cf96d10-89de-11ef-9376-b533eb6f1b4c__player_album.jpg",
  "https://files.playerduo.net/production/thumbs/medium/4e876224-c40d-486c-bddc-77fc3a253cd7__d8d9ed80-89c8-11ef-9376-b533eb6f1b4c__player_album.jpg",
  "https://files.playerduo.net/production/thumbs/medium/4e876224-c40d-486c-bddc-77fc3a253cd7__78e1a250-7d30-11ef-9376-b533eb6f1b4c__player_album.jpg",
  "https://files.playerduo.net/production/images/4e876224-c40d-486c-bddc-77fc3a253cd7__a21b0590-327f-11ef-a76a-7b840fde9bfc__player_album.jpg",
];

const UserImg = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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

import { useState } from "react";
import MessageModal from "../../../components/messages/MessageModal";
import "./UserPayment.css";
import { User } from "../interface";
import { Rate } from "antd";
import RentModal from "../../../components/RentModal";

const UserPayment = ({ user }: { user: User }) => {
  const [isMessageModalOpen, setMessageModalOpen] = useState(false);
  const [showRentModal, setShowRentModal] = useState(false);

  const openMessageModal = () => setMessageModalOpen(true);
  const closeMessageModal = () => setMessageModalOpen(false);

  return (
    <div className="user_payment">
      <div className="user_payment--info">
        <h3 className="price_container">
          <span className="price">{user.rentPrice.toLocaleString("vi")}</span>{" "}
          đ/h
        </h3>

        <div className="price_rate">
          <div className="price_rate--star">
            <Rate disabled defaultValue={user.totalRating} />
          </div>

          <div className="rate_total">
            <span className="rate_amount">{user.totalReview}</span>&nbsp;đánh
            giá
          </div>
        </div>
      </div>

      <div className="user_payment--button">
        <button
          className="base_btn"
          onClick={() => {
            setShowRentModal(true);
          }}
        >
          THUÊ
        </button>
        <button className="base_btn payment_btn">DONATE</button>
        <button className="base_btn payment_btn" onClick={openMessageModal}>
          CHAT
        </button>
      </div>

      <MessageModal isOpen={isMessageModalOpen} onClose={closeMessageModal} />
      <RentModal
        openState={showRentModal}
        onClose={() => {
          setShowRentModal(false);
        }}
        price={user.rentPrice}
      />
    </div>
  );
};

export default UserPayment;

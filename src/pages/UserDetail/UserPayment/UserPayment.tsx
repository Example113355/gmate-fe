import { useState } from 'react';
import MessageModal from '../../../components/messages/MessageModal';
import './UserPayment.css';
import { User } from '../interface';
import { Rate } from 'antd';

const UserPayment = ({ user }: { user: User }) => {
  const [isMessageModalOpen, setMessageModalOpen] = useState(false);

  const openMessageModal = () => setMessageModalOpen(true);
  const closeMessageModal = () => setMessageModalOpen(false);

  return (
    <div className="user_payment">
      <div className="user_payment--info">
        <h3 className="price_container">
          <span className="price">{user.rentPrice.toLocaleString('vi')}</span> đ/h
        </h3>

        <div className="price_rate">
          <div className="price_rate--star">
            <Rate disabled defaultValue={user.totalRating / user.totalReview} />
          </div>

          <div className="rate_total">
            <span className="rate_amount">{user.totalReview}</span>&nbsp;đánh giá
          </div>
        </div>
      </div>

      <div className="user_payment--button">
        <button className="base_btn">THUÊ</button>
        <button className="base_btn payment_btn">DONATE</button>
        <button className="base_btn payment_btn" onClick={openMessageModal}>CHAT</button>
      </div>

      <MessageModal isOpen={isMessageModalOpen} onClose={closeMessageModal} />
    </div>
  );
};

export default UserPayment;

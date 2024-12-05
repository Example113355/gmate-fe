import React from "react";
import { Modal, Button } from "antd";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";

interface RentModalProps {
  openState: boolean;
  onClose: () => void;
  price: number;
}

const RentModal: React.FC<RentModalProps> = ({ openState, onClose, price }) => {
  const [hour, setHour] = React.useState(1);
  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
    if (typeof value === "number") {
      setHour(value);
    }
  };
  return (
    <Modal
      title="Thuê người chơi này"
      open={openState}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" 
        
        >
          Submit
        </Button>,
      ]}
    >
      <p>Chọn số giờ cần thuê:</p>
      <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
      <h1 className="mt-4 font-bold">
        Tổng tiền: <span>{price * hour} đ</span>
      </h1>
      <h1 className=" italic mt-4">
        Chú ý: Sau khi gửi yêu cầu thuê, người chơi được thuê sẽ nhận thông báo và có 5 phút để xác nhận yêu cầu, sau khi xác nhận sẽ tự động bắt đầu tính giờ chơi, trong thời gian chơi 2 bạn có thể trò chuyện thông qua tính năng chat.
      </h1>
    </Modal>
  );
};

export default RentModal;

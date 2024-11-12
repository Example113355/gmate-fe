import React, { useState } from 'react';
import PaymentModal from '../components/payment-modal';
import WithdrawModal from '../components/withdraw-modal';

const TestModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenWithdrawModal = () => {
    setShowWithdrawModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseWithdrawModal = () => {
    setShowWithdrawModal(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
        onClick={handleOpenWithdrawModal}
      >
        Open Withdraw Modal
      </button>
      <PaymentModal show={showModal} onClose={handleCloseModal}></PaymentModal>
      <WithdrawModal show={showWithdrawModal} onClose={handleCloseWithdrawModal}></WithdrawModal>
    </div>
  );
};

export default TestModalPage;
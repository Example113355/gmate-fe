import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from "../contexts/UserContext";
import { FiXCircle, FiCheckCircle } from "react-icons/fi";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [orderCode, setOrderCode] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [walletId, setWalletId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('pending');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const amounts = [20000, 30000, 50000, 100000, 200000, 500000];
  const { user } = useUser();

  useEffect(() => {
    const fetchWalletId = async () => {
      if (user._id) {
        try {
          const response = await axios.get(`http://localhost:3000/api/v1/wallets/user/${user._id}`);
          console.log('response:', response);
          setWalletId(response.data._id);
        } catch (error) {
          console.error('Error fetching wallet ID:', error);
        }
      }
    };

    fetchWalletId();
  }, [user._id]);

  const handlePayment = async () => {
    try {
      const amount = Number(inputValue.replace(/\./g, ''));
      if (isNaN(amount)) {
        console.error('Invalid amount:', inputValue);
        return;
      }

      const userId = user._id;
      console.log('userId:', userId);
      console.log('walletId:', walletId);
      console.log('amount:', amount);
      const response = await axios.post('http://localhost:3000/api/v1/payos/create-payment-link', { userId, walletId, amount });
      if (response.data && response.data.checkoutUrl) {
        setCheckoutUrl(response.data.checkoutUrl);
        setOrderCode(response.data.orderCode);

        // Start polling for receipt status
        const id = setInterval(async () => {
          try {
            const receiptResponse = await axios.get(`http://localhost:3000/api/v1/receipts/order/${response.data.orderCode}`);
            console.log('receiptResponse:', receiptResponse);
            if (receiptResponse.data.status !== 'pending') {
              setStatus(receiptResponse.data.status);
              clearInterval(id);
            }
          } catch (error) {
            console.error('Error fetching receipt status:', error);
          }
        }, 5000); // Poll every 5 seconds
        setIntervalId(id);
      }
    } catch (error) {
      console.error('Error creating payment link:', error);
    }
  };

  const handleCancel = async () => {
    if (orderCode) {
      try {
        await axios.post(`http://localhost:3000/api/v1/payos/cancel-payment/${orderCode}`);
        setCheckoutUrl(null);
        setOrderCode(null);
        setStatus('pending');
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      } catch (error) {
        console.error('Error canceling payment link:', error);
      }
    }
  };

  const handleClose = () => {
    setStatus('pending');
    onClose();
  };

  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\./g, '');
    if (!isNaN(Number(value))) {
      setInputValue(formatNumber(value));
      setSelectedAmount(null);
    }
  };

  const handleAmountClick = (amount: number) => {
    setInputValue(formatNumber(amount.toString()));
    setSelectedAmount(amount);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-start pt-20">
      <div className="bg-white rounded-3xl shadow-lg relative border border-gray-300 w-[500px] md:w-[500px] h-auto" style={{ backgroundClip: 'padding-box', boxShadow: '0 3px 9px #00000080', outline: 0 }}>
        <div className="flex justify-center items-center p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold text-gray-700">NẠP TIỀN VÀO GMATE</h2>
          <button className="absolute top-2 right-6 text-gray-600 hover:text-gray-900 text-4xl" onClick={handleClose}>
            ×
          </button>
        </div>
        <div className="px-16 py-10">
          {status === 'pending' && checkoutUrl ? (
            <>
              <iframe src={checkoutUrl} className="w-full h-[700px]" title="Payment Checkout"></iframe>
              <button className="bg-red-500 text-white rounded px-6 py-3 w-full hover:bg-red-600 text-2xl mt-10 font-medium" onClick={handleCancel}>
                Hủy
              </button>
            </>
          ) : (
            <>
              {status === 'completed' ? (
                <div className="flex flex-col items-center">
                  <FiCheckCircle className="text-green-500 text-6xl mb-4" />
                  <div className="text-green-500 text-2xl font-medium">Giao dịch thành công</div>
                </div>
              ) : status === 'failed' ? (
                <div className="flex flex-col items-center">
                  <FiXCircle className="text-red-500 text-6xl mb-4" />
                  <div className="text-red-500 text-2xl font-medium">Giao dịch không thành công</div>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-3 w-full mb-10 text-2xl"
                    placeholder="Số tiền muốn nạp (VND)"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <div className="grid grid-cols-2 gap-6">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        className={`border rounded px-6 py-3 text-2xl font-medium ${selectedAmount === amount ? 'bg-red-500 text-white' : 'bg-gray-200 text-red-400 border-red-400 hover:bg-red-500 hover:text-white'}`}
                        onClick={() => handleAmountClick(amount)}
                      >
                        {formatNumber(amount.toString())} VND
                      </button>
                    ))}
                  </div>
                  <button className="bg-red-500 text-white rounded px-6 py-3 w-full hover:bg-red-600 text-2xl mt-10 font-medium" onClick={handlePayment}>
                    Nạp tiền
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
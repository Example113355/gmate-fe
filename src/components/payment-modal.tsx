import React, { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const amounts = [20000, 30000, 50000, 100000, 200000, 500000];

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-start pt-20">
      <div className="bg-white rounded-3xl shadow-lg relative border border-gray-300 w-[500px] md:w-[500px]"
           style={{ backgroundClip: 'padding-box', boxShadow: '0 3px 9px #00000080', outline: 0 }}>

        {/* Header */}
        <div className="flex justify-center items-center p-4 border-b border-gray-300"
        > 
          <h2 className="text-2xl font-bold text-gray-700
          ">NẠP TIỀN VÀO GMATE</h2>
          <button
            className="absolute top-2 right-6 text-gray-600 hover:text-gray-900 text-4xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>


        {/* Body */}
        <div className="px-16 py-10 "> 
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-3 w-full mb-10 text-2xl"
            placeholder="Số tiền muốn nạp (VND)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-6">
            {amounts.map((amount) => (
              <button
                key={amount}
                className="bg-gray-200 text-red-400 border-red-400 border rounded px-6 py-3 text-2xl font-medium hover:bg-red-500 hover:text-white"
                onClick={() => {}}
              >
                {amount.toLocaleString()} VND
              </button>
            ))}
          </div>
          <button className="bg-red-500 text-white rounded px-6 py-3 w-full hover:bg-red-600 text-2xl mt-10 font-medium"
                  onClick={() => {}}>
            Nạp tiền
          </button>
        </div>


        {/* Footer */}
        <div className="px-8 py-4 border-t border-gray-300 flex justify-end">
        <button className="bg-gray-100 text-gray-500 text-xl py-4 w-24 border border-gray-200 rounded-xl font-medium hover:text-gray-700" onClick={onClose}> {/* Close button in footer */}
             Đóng
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;
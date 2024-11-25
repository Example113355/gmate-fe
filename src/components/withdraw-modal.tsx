import React, { useState } from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

const WithdrawModal: React.FC<ModalProps> = ({ show, onClose }) => {
    const [bank, setBank] = useState('Vietcombank');
    const [accountHolder, setAccountHolder] = useState('B');
    const [accountNumber, setAccountNumber] = useState('D');
    const [withdrawableAmount, ] = useState(0);
    const [withdrawalAmount, setWithdrawalAmount] = useState('');


    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-start py-20">
            <div className="bg-white rounded-xl shadow-lg relative border border-gray-300 w-[500px] md:w-[500px]"
            style={{ backgroundClip: 'padding-box', boxShadow: '0 3px 9px #00000080', outline: 0 }}>
                <div className="flex justify-center items-center p-4 border-b border-gray-300">
                    <h2 className="text-2xl font-bold text-gray-700">RÚT TIỀN</h2>
                    <button
                        className="text-gray-600 hover:text-gray-900 text-4xl absolute top-2 right-4"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <div className="px-16 py-10 ">
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold text-2xl">CỔNG THANH TOÁN</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                            value={bank}
                            onChange={(e) => setBank(e.target.value)}
                            disabled={true}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold text-2xl">CHỦ TÀI KHOẢN</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                            value={accountHolder}
                            onChange={(e) => setAccountHolder(e.target.value)}
                            disabled={true}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold text-2xl">SỐ TÀI KHOẢN:</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            disabled={true}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold text-2xl">SỐ TIỀN CÓ THỂ RÚT</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                            value={`${withdrawableAmount} VNĐ`}
                            disabled={true}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold text-2xl">BẠN MUỐN RÚT</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                            value={withdrawalAmount}
                            onChange={(e) => setWithdrawalAmount(e.target.value)}
                        />
                    </div>


                </div>

                
                <div className=" px-8 py-6 border-t border-gray-300 flex justify-center">
                        <button className=" text-gray-500 text-2xl py-4 px-8 border border-gray-200 rounded-xl font-medium hover:text-gray-700" 
                        onClick={onClose}
                        >
                            Rút tiền
                        </button>
                    </div>



            </div>
        </div>
    );
};

export default WithdrawModal;

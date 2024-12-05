import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import axios from 'axios';
import { useUser } from "../contexts/UserContext";

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

const WithdrawModal: React.FC<ModalProps> = ({ show, onClose }) => {
    const [bank, setBank] = useState('Vietcombank');
    const [accountHolder, setAccountHolder] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [withdrawableAmount, setWithdrawableAmount] = useState(0);
    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [walletId, setWalletId] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
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

    useEffect(() => {
        const fetchBalance = async () => {
            if (user._id) {
                try {
                    const response = await axios.get(`http://localhost:3000/api/v1/wallets/user/${user._id}`);
                    setWithdrawableAmount(response.data.balance);
                } catch (error) {
                    console.error("Lỗi khi lấy số dư:", error);
                }
            }
        };

        fetchBalance();
    }, [user._id]);

    const formatNumber = (value: string) => {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\./g, '');
        if (!isNaN(Number(value))) {
            setWithdrawalAmount(formatNumber(value));
        }
    };

    const handleWithdraw = async () => {
        try {
            const amount = Number(withdrawalAmount.replace(/\./g, ''));
            if (isNaN(amount) || amount <= 0) {
                setError('Số tiền không hợp lệ');
                return;
            }

            if (amount > withdrawableAmount) {
                setError('Số tiền vượt quá số dư có thể rút');
                return;
            }

            const response = await axios.post('http://localhost:3000/api/v1/withdraws', {
                userId: user._id,
                walletId: walletId,
                paymentGateway: bank,
                accountHolder,
                accountNumber,
                amount,
                status: 'pending',
            });

            setIsSuccess(true);
        } catch (error) {
            console.error('Lỗi khi tạo yêu cầu rút tiền:', error);
            setError('Lỗi khi tạo yêu cầu rút tiền');
        }
    };

    const handleClose = () => {
        setIsSuccess(false);
        setError(null);
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-start py-20">
            <div className="bg-white rounded-xl shadow-lg relative border border-gray-300 w-[500px] md:w-[500px]"
                style={{ backgroundClip: 'padding-box', boxShadow: '0 3px 9px #00000080', outline: 0 }}>
                <div className="flex justify-center items-center p-4 border-b border-gray-300">
                    <h2 className="text-2xl font-bold text-gray-700">{'RÚT TIỀN'}</h2>
                    <button
                        className="text-gray-600 hover:text-gray-900 text-4xl absolute top-2 right-4"
                        onClick={handleClose}
                    >
                        ×
                    </button>
                </div>

                <div className="px-16 py-10 ">
                    {isSuccess ? (
                        <div className="flex flex-col items-center">
                        <FiCheckCircle className="text-green-500 text-7xl mb-4" />
                        <div className="text-green-500 text-3xl font-medium">Gửi yêu cầu rút tiền thành công</div>
                    </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold text-2xl">CỔNG THANH TOÁN</label>
                                <select
                                    className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                >
                                    <option value="Vietcombank">Vietcombank</option>
                                    <option value="Vietinbank">Vietinbank</option>
                                    <option value="BIDV">BIDV</option>
                                    <option value="Sacombank">Sacombank</option>
                                    <option value="Á Châu">Á Châu</option>
                                    <option value="MBBank">MBBank</option>
                                    <option value="Techcombank">Techcombank</option>
                                    <option value="Đông Á">Đông Á</option>
                                    <option value="VP bank">VP bank</option>
                                    <option value="Eximbank">Eximbank</option>
                                    <option value="TP bank">TP bank</option>
                                    <option value="Ocean bank">Ocean bank</option>
                                    <option value="OCB">OCB</option>
                                    <option value="SHBank">SHBank</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold text-2xl">CHỦ TÀI KHOẢN</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                                    value={accountHolder}
                                    onChange={(e) => setAccountHolder(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold text-2xl">SỐ TÀI KHOẢN</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold text-2xl">SỐ TIỀN CÓ THỂ RÚT</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                                    value={`${withdrawableAmount.toLocaleString()} VND`}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold text-2xl">BẠN MUỐN RÚT</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-xl px-6 py-4 w-full text-2xl font-medium text-gray-700"
                                    value={withdrawalAmount}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {error && (
                                <div className="text-center flex flex-row items-center justify-center mt-6">
                                    <FiXCircle className="text-red-500 text-3xl mr-2" />
                                    <p className="text-2xl text-red-500">{error}</p>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {!isSuccess && (
                    <div className="px-8 py-6 border-t border-gray-300 flex justify-center">
                        <button
                            className="text-gray-500 text-2xl py-4 px-8 border border-gray-200 rounded-xl font-medium hover:text-gray-700"
                            onClick={handleWithdraw}
                        >
                            Rút tiền
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WithdrawModal;
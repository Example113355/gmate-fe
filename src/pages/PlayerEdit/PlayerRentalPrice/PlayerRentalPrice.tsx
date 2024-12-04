import { useEffect, useState } from "react";
import { updatePlayer } from "../ApiService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PlayerRentalPrice = ({ player, id }) => {
    const formatPrice = (value: number) => {
        // Remove non-numeric characters, then add commas
        if (value == null || isNaN(value)) return '';
        return value.toLocaleString('en-US');
        // return value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const curPrice = formatPrice(player?.rentPrice || 0);
    const [price, setPrice] = useState(curPrice);
    // console.log(player);
    useEffect(() => {
        const curPrice = formatPrice(player?.rentPrice || 0);
        setPrice(curPrice);
    }, [player]);

    const handleSavePrice = async () => {
        try {
            const numericValue = parseInt(price.replace(/\D/g, '') || 0, 10); // Lấy giá trị số từ input
            const newPlayer = await updatePlayer(id, { ...player, rentPrice: numericValue });
            const formattedPrice = formatPrice(newPlayer.rentPrice);
            setPrice(formattedPrice);
            toast.success("Giá đã được cập nhật thành công!"); // Hiện thông báo thành công
        } catch (error) {
            toast.error("Cập nhật giá thất bại. Vui lòng thử lại."); // Hiện thông báo lỗi nếu xảy ra vấn đề
        }
    };

    const handleChange = async (e) => {
        const numericValue = e.target.value.replace(/\D/g, ''); // Chỉ cho phép nhập số
        const formattedPrice = formatPrice(parseInt(numericValue || '0', 10));
        setPrice(formattedPrice);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 className="section-title" style={{ marginRight: '12px' }}>Giá thuê:</h3>
            <input
                type="text"
                value={price}
                onChange={handleChange}
                style={{
                    width: '120px',
                    textAlign: 'center',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    padding: '6px',
                    color: '#f0564a',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    fontSize: '18px',
                }}
            />
            <span style={{ marginRight: '8px', fontSize: '18px', color: '#f0564a' }}>đ/h</span>
            <button
                onClick={handleSavePrice}
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 16px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Lưu
            </button>
            <ToastContainer />
        </div>
    );
}

export default PlayerRentalPrice
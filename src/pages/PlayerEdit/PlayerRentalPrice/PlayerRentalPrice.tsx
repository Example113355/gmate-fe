import { useEffect, useState } from "react";
const PlayerRentalPrice = ({ player }) => {
    const formatPrice = (value) => {
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

    const handleSavePrice = () => {
        setPrice(price);
    };

    const handleChange = (e) => {
        // const formattedPrice = formatPrice(e.target.value);
        // setPrice(formattedPrice);
        const numericValue = parseInt(e.target.value.replace(/\D/g, '') || 0, 10); // Chuyển giá trị nhập vào thành số
        const formattedPrice = formatPrice(numericValue);
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
        </div>
    );
}

export default PlayerRentalPrice
import { useState } from "react";
const PlayerRentalPrice = () => {

    const formatPrice = (value) => {
        // Remove non-numeric characters, then add commas
        return value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const [price, setPrice] = useState(formatPrice(100000));

    const handleSavePrice = () => {
        setPrice(price);
    };

    const handleChange = (e) => {
        const formattedPrice = formatPrice(e.target.value);
        setPrice(formattedPrice);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '12px' }}>Giá thuê:</h3>
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
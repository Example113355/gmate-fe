import React from "react";

const PlayerHistory = () => {
    const bookings = [
        {
            id: 1,
            profileImage: "https://pixwares.com/storage/2023/07/anh-gai-xinh.jpg", // Placeholder image URL
            name: "Dũnggggggggg",
            phone: "+1 212 121 212",
            email: "dungdeptrai@example.com",
            time: "08:00 - 10:00 Mon",
        },
        // You can add more booking items here...
    ];

    return (
        <div className="player-his-container">
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Ảnh hồ sơ</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Tên người thuê</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>SĐT</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Email</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Giờ</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                <img
                                    src={booking.profileImage}
                                    alt="Profile"
                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                />
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.name}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.phone}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.email}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                <span style={{ backgroundColor: "#d4edda", padding: "6px 12px", borderRadius: "4px" }}>
                                    {booking.time}
                                </span>
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                <button
                                    style={{
                                        backgroundColor: "#f56c6c",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        padding: "6px 12px",
                                        marginRight: "5px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Huỷ
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerHistory;

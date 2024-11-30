import { useState, useEffect } from "react";
import { getBookingListById, getUserById } from "../ApiService";

const PlayerBookingList = ({ playerId }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                // console.log(playerId);

                const bookingList = await getBookingListById(playerId);
                // console.log(bookings);
                setBookings(bookingList);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();

    }, [playerId]);

    const getStatusTag = (status) => {
        switch (status) {
            case "Pending":
                return <span style={{ backgroundColor: "#f7dc6f", padding: "2px 5px", borderRadius: "4px", color: "#333" }}>Đang chờ</span>;
            case "Accepted":
                return <span style={{ backgroundColor: "#8bc34a", padding: "2px 5px", borderRadius: "4px", color: "#fff" }}>Đã chấp nhận</span>;
            case "Rejected":
                return <span style={{ backgroundColor: "#e74c3c", padding: "2px 5px", borderRadius: "4px", color: "#fff" }}>Đã từ chối</span>;
            default:
                return <span style={{ backgroundColor: "#ccc", padding: "2px 5px", borderRadius: "4px", color: "#333" }}>Không xác định</span>;
        }
    };



    return (
        <div style={{ padding: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Ảnh hồ sơ</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Tên người thuê</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>SĐT</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Email</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Trang thái</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                <img
                                    src={booking.user.avatar}
                                    alt="Profile"
                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                />
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.user.lastName}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.user.dateOfBirth}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.user.email}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {getStatusTag(booking.status)}
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
                                    Nhận
                                </button>
                                <button
                                    style={{
                                        backgroundColor: "#e0e0e0",
                                        color: "#333",
                                        border: "none",
                                        borderRadius: "4px",
                                        padding: "6px 12px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Từ chối
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerBookingList;

import { useEffect, useState } from "react";
import { getHistoryBook } from '../PlayerEdit/ApiService';
import { useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const PlayerHistory = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useUser();
    const id = user._id;
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const temp = await getHistoryBook(id);
                setBookings(temp)
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchHistory();
        

    }, [id]);
    const getStatusTag = (status: string) => {
        switch (status) {
            case "Accept":
                return <span style={{ backgroundColor: "#8bc34a", padding: "2px 5px", borderRadius: "4px", color: "#fff" }}>Hoàn thành</span>;
            case "Cancelled":
                return <span style={{ backgroundColor: "#e74c3c", padding: "2px 5px", borderRadius: "4px", color: "#fff" }}>Từ chối</span>;
            default:
                return <span style={{ backgroundColor: "#ccc", padding: "2px 5px", borderRadius: "4px", color: "#333" }}>Không xác định</span>;
        }
    };
    return (
        <div className="player-his-container">
            <b style={{color:"red", fontSize:"15px", marginBottom:"10px"}}>Lịch sử thuê</b>
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#f9f9f9" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Ảnh hồ sơ</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Tên người thuê</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Email</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Giờ thuê</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Thời gian thuê</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd"}}>
                                <img
                                    src={booking.avatar}
                                    alt="Profile"
                                    style={{ width: "40px", height: "40px", borderRadius: "50%", margin: "auto" }}
                                />
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.lastName}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.email}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {booking.hoursRent}
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                <span style={{ backgroundColor: "#d4edda", padding: "6px 12px", borderRadius: "4px" }}>
                                    {booking.timeBook}
                                </span>
                            </td>
                            <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                {getStatusTag(booking.status)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerHistory;

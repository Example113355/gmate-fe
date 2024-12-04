import { useState, useEffect } from "react";
import { getBookingListById, updateBookingStatus } from "../ApiService";

const PlayerBookingList = ({ playerId }: { playerId: string }) => {
    const [bookings, setBookings] = useState<any[]>([]);

    const sortBookings = (bookings: Array<any>) => {
        return bookings.sort((a, b) => {
            if (a.status === "Pending" && b.status !== "Pending") return -1;
            if (a.status !== "Pending" && b.status === "Pending") return 1;
            return 0;
        });
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                // console.log(playerId);

                const bookingList = await getBookingListById(playerId);
                // console.log(bookings);
                setBookings(sortBookings(bookingList));
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();

    }, [playerId]);

    const getStatusTag = (status: string) => {
        switch (status) {
            case "Pending":
                return <span style={{ backgroundColor: "#f7dc6f", padding: "2px 5px", borderRadius: "4px", color: "#333" }}>Đang chờ</span>;
            case "Accept":
                return <span style={{ backgroundColor: "#8bc34a", padding: "2px 5px", borderRadius: "4px", color: "#fff" }}>Chấp nhận</span>;
            case "Cancelled":
                return <span style={{ backgroundColor: "#e74c3c", padding: "2px 5px", borderRadius: "4px", color: "#fff" }}>Từ chối</span>;
            default:
                return <span style={{ backgroundColor: "#ccc", padding: "2px 5px", borderRadius: "4px", color: "#333" }}>Không xác định</span>;
        }
    };

    const handleAcceptBooking = async (bookingId: string) => {
        try {
            // Gọi API để chấp nhận đặt chơi
            await updateBookingStatus(playerId, bookingId, "Accept");
            // Sửa lại thứ tự record trong bảng booking
            const updatedBookings = bookings.map((booking) =>
                booking._id === bookingId ? { ...booking, status: "Accept" } : booking
            );
            setBookings(sortBookings(updatedBookings));
        } catch (error) {
            console.error('Error accepting booking:', error);
        }
    }

    const handleRejectBooking = async (bookingId: string) => {
        try {
            // Gọi API để từ chối đặt chơi
            await updateBookingStatus(playerId, bookingId, "Cancelled");
            const updatedBookings = bookings.map((booking) =>
                booking._id === bookingId ? { ...booking, status: "Cancelled" } : booking
            );
            setBookings(sortBookings(updatedBookings));
        } catch (error) {
            console.error('Error rejecting booking:', error);
        }
    }




    return (
        <div style={{ padding: "20px" }} className="table-container">
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th style={{
                            padding: "12px",
                            borderBottom: "2px solid #888",
                            color: "red",
                            textAlign: "center",
                            verticalAlign: "middle",
                        }}>Ảnh hồ sơ</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Tên người thuê</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Ngày sinh</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Email</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Trang thái</th>
                        <th style={{ padding: "12px", borderBottom: "2px solid #888", color: "red" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length === 0 ? (
                        <tr>
                            <td
                                colSpan={6}
                                style={{
                                    textAlign: "center",
                                    padding: "20px",
                                    color: "#555",
                                }}
                            >
                                Hiện chưa có yêu cầu thuê nào
                            </td>
                        </tr>
                    ) : (
                        bookings.map((booking) => (
                            < tr key={booking._id} >
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center", verticalAlign: "middle" }}>
                                    <img
                                        src={booking.user.avatar}
                                        alt="Profile"
                                        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                    />
                                </td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                    {booking.user.lastName + " " + booking.user.firstName}
                                </td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                    {new Date(booking.user.dateOfBirth).toLocaleDateString('vi-VN')}
                                </td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                    {booking.user.email}
                                </td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                    {getStatusTag(booking.status)}
                                </td>
                                <td style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                    {booking.status === "Pending" ? (
                                        <>
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
                                                onClick={() => handleAcceptBooking(booking._id)}
                                                disabled={booking.status === "Accept" || booking.status === "Cancelled"}
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
                                                onClick={() => handleRejectBooking(booking._id)}
                                                disabled={booking.status === "Accept" || booking.status === "Cancelled"}
                                            >
                                                Từ chối
                                            </button>
                                        </>
                                    ) : (
                                        <span>Đã được xác nhận</span>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div >
    );
};

export default PlayerBookingList;

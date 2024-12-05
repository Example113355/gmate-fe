import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1';

const getUserInfo = async (userId) => {
    try {
        const response = await axios.get(`${apiUrl}/players/getuser/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user info for userId: ${userId}`, error);
        return null; // Handle error appropriately
    }
};

export const getHistoryBook = async (playerId: string) =>{
    try {
        // console.log(playerId);
        const response = await axios.get(`${apiUrl}/players/${playerId}/completebooks`);

        const processBookings = async (bookings) => {
            const processedBookings = [];
            for (const booking of bookings) {
                const userInfo = await getUserInfo(booking.userId);
                if (userInfo) {
                    processedBookings.push({
                        avatar: userInfo.avatar,
                        firstName: userInfo.firstName,
                        lastName: userInfo.lastName,
                        price: booking.price, 
                        status: booking.status,
                        timeBook: booking.timeBook,
                        timeStart: booking.timeStart,
                        timeEnd: booking.timeEnd,
                        hoursRent: booking.hoursRent,
                        email: userInfo.email,
                    });
                }
            }
            return processedBookings;
        };
        const res = await processBookings(response.data);
        return res
       
    } catch (error) {
        console.error('Error fetching player:', error);
        throw error;
    }
}

export const getTopClient = async (playerId: string) =>{
    try {
        const response = await axios.get(`${apiUrl}/players/${playerId}/topclient`);
        const processTopClient = async (list) => {
            const processTopClient = [];
            for (const item of list) {
                const userInfo = await getUserInfo(item._id);
                if (userInfo) {
                    processTopClient.push({
                        avatar: userInfo.avatar,
                        firstName: userInfo.firstName,
                        lastName: userInfo.lastName,
                        totalHoursRent: item.totalHoursRent
                    });
                }
            }
            return processTopClient;
        };
        const res = await processTopClient(response.data);
        return res
    } catch (error) {
        console.error('Error fetching top user list:', error);
        throw error;
    }
}
export const getPlayerById = async (playerId: string) => {
    try {
        // console.log(playerId);
        const response = await axios.get(`${apiUrl}/players/${playerId}`);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching player:', error);
        throw error;
    }
}

export const updatePlayer = async (playerId: string, updatedPlayer: any) => {
    try {
        const response = await axios.put(`${apiUrl}/players/${playerId}`, updatedPlayer);
        return response.data;
    } catch (error) {
        console.error('Error updating player:', error);
        throw error;
    }
};

export const getBookingListById = async (playerId: string) => {
    try {
        const response = await axios.get(`${apiUrl}/players/${playerId}/bookings`);
        const bookingList = response.data.filter((booking) => booking.user !== null);
        console.log(bookingList);
        return bookingList;
    } catch (error) {
        console.error('Error fetching booking list:', error);
        throw error;
    }
};

export const updateBookingStatus = async (playerId: string, bookingId: string, status: string) => {
    try {
        const response = await axios.put(`${apiUrl}/players/${playerId}/bookings`, { id: bookingId, status: status });
        return response.data;
    } catch (error) {
        console.error('Error updating booking status:', error);
        throw error;
    }
};
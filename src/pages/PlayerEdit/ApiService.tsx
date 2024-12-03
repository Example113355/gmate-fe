import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1';

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

export const getUserById = async (userId: string) => {
    try {
        const response = await axios.get(`${apiUrl}/players/getUsers/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
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
        const response = await axios.patch(`${apiUrl}players/${playerId}/bookings`, { id: bookingId, status: status });
        return response.data;
    } catch (error) {
        console.error('Error updating booking status:', error);
        throw error;
    }
};
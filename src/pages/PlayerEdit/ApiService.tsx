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

export const updatePlayer = async (playerId: number, updatedPlayer: any) => {
    try {
        const response = await axios.put(`${apiUrl}/players/${playerId}`, updatedPlayer);
        return response.data;
    } catch (error) {
        console.error('Error updating player:', error);
        throw error;
    }
};
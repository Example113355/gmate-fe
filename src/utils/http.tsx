import axios, { AxiosRequestConfig } from "axios";

export const apiCall = async (url: string, method: string, body: any = null) => {
    try {
        const config: AxiosRequestConfig = {
            method: method,
            url: url,
            data: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

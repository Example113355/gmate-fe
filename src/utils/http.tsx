import axios, { AxiosRequestConfig } from "axios";

export const apiCall = async (method: string, url: string = "", body: any = null) => {
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
        throw error;
    }
}

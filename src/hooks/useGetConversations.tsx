import axios from "axios";
import { useEffect, useState } from "react";

const useGetConversations = () => {
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await axios({
                    method: 'GET',
                    url: `http://localhost:3000/api/v1/messages/get-conversations`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                })
				
				setConversations(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { conversations, loading };
};

export default useGetConversations;
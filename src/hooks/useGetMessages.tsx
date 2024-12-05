import axios from "axios";
import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();

    const getMessages = async () => {
        if (selectedConversation) {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:3000/api/v1/messages/get/${selectedConversation?._id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMessages(res.data);
        }
   };
    
    useEffect(() => {
       setLoading(true);

       if (selectedConversation) {
           getMessages();
       }

       setLoading(false);
    }, [selectedConversation, setMessages]);
    
    return { messages, getMessages, loading };
}

export default useGetMessages;
import axios from "axios";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
    const { selectedConversation, messages, setMessages } = useConversation();

    const sendMessage = async (message: string) => {
        const res = await axios({
            method: 'POST',
            url: `http://localhost:3000/api/v1/messages/send/${selectedConversation?._id}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            data: {
                message: message
            }
        });
        setMessages([...messages, res.data]);
    };
    
    return { sendMessage };
}

export default useSendMessage;
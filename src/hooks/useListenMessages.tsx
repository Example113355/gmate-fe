import { useEffect, useState } from "react";
import { io, Socket } from 'socket.io-client';

import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";
import useGetMessages from "./useGetMessages";
import { useUser } from "../contexts/UserContext";

const baseURL = import.meta.env.VITE_BASE_URL;

const useListenMessages = () => {
	// const { socket } = useSocketContext();
  const [socket, setSocket] = useState<Socket | null>(null);
	const { messages, setMessages } = useConversation();
  const { getMessages } = useGetMessages();
  const { user } = useUser();
  const { selectedConversation } = useConversation();

	useEffect(() => {
		// socket?.on("newMessage", (newMessage) => {
		// 	newMessage.shouldShake = true;
		// 	const sound = new Audio(notificationSound);
		// 	sound.play();
		// 	setMessages([...messages, newMessage]);
		// });

		// return () => socket?.off("newMessage");
    const socket = io("http://localhost:3000", {
      query: {
          userId: user._id,
      },
    });

    setSocket(socket);

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("newMessage", (users) => {
        // setOnlineUsers(users);
        getMessages();
    });

    return () => socket.close();
	  }, [setMessages, messages]);
};

export default useListenMessages;
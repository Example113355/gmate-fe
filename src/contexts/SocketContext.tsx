// import { createContext, useState, useEffect, useContext } from "react";
// import io from "socket.io-client";
// import { useUser } from "./UserContext";
// import useConversation from "../zustand/useConversation";

// const SocketContext = createContext({ socket: null, onlineUsers: [] });

// export const useSocketContext = () => {
// 	return useContext(SocketContext);
// };

// export const SocketContextProvider = ({ children }) => {
// 	const [socket, setSocket] = useState(null);
// 	const [onlineUsers, setOnlineUsers] = useState([]);
// 	const { user } = useUser();
//     const { selectedConversation } = useConversation();

//     console.log(selectedConversation?._id);

// 	useEffect(() => {
        
//         const socket = io("http://localhost:3000", {
//             query: {
//                 userId: user._id,
//             },
//         });

//         setSocket(socket);

//         // socket.on() is used to listen to the events. can be used both on client and server side
//         socket.on("getOnlineUsers", (users) => {
//             setOnlineUsers(users);
//         });

//         return () => socket.close();
// 	}, []);

// 	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
// };
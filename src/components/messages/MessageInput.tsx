import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { post } from "../../utils/http_2";
interface MessageInputProps {
  selectedConversation: any;
  setListMessages: React.Dispatch<React.SetStateAction<any>>;
}

const MessageInput: React.FC<MessageInputProps> = ({
  selectedConversation,
  setListMessages,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (message.trim()) {
      console.log("Message sent:", message, selectedConversation._id); // Replace this with your sending logic
      post(`/messages/send/${selectedConversation._id}`, {
        message: message,
      }).then((response: any) => {
        console.log("Get messages response:");
        console.log(response);
        if (response.status === 201) {
          setListMessages((prevMessages: any) => {
            return [...prevMessages, response.data];
          });
        }
      });
      setMessage(""); // Clear the input after sending
    } else {
      console.log("Message cannot be empty!");
    }
  };

  return (
    <form
      className="flex items-center px-4 py-3 bg-white border-t border-gray-300 h-1/7"
      onSubmit={handleSubmit} // Attach the submit handler
    >
      <input
        type="text"
        placeholder="Type a message"
        className="h-full flex-1 border rounded-lg p-3 bg-white border-gray-300 text-2xl"
        value={message} // Bind the input value to state
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
      />
      <button type="submit" className="ml-3">
        <FontAwesomeIcon
          icon={faPaperPlane}
          color={message.trim() ? "#f0564a" : "#d1d5db"}
          className="text-4xl"
        />
      </button>
    </form>
  );
};

export default MessageInput;

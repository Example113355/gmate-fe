import useConversation from "../../zustand/useConversation";

interface Message {
  _id: string;
  message: string;
  senderId: string;
  receiverId: string;
}

interface MessageProps {
  message: Message;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { selectedConversation } = useConversation();
	const fromMe = message.senderId !== selectedConversation?._id;

  return (
    <div
      className={`p-3 rounded-full mb-2 max-w-[280px] ${
        fromMe ? 'bg-red-500 text-white ml-auto' : 'bg-gray-200 text-gray-800'
      }`}
    >
      <p className="p-2">{message.message}</p>
    </div>
  );
};

export default Message;
interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div
      className={`p-3 rounded-full mb-2 max-w-xs ${
        isUser ? 'bg-red-500 text-white ml-auto' : 'bg-gray-200 text-gray-800'
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Message;
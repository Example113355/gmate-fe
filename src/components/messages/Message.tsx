interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div className=" inline-block ml-auto"> 
      <div
        className={`p-4 rounded-full mb-2 max-w-[270px]   ${
          isUser ? "bg-red-500 text-white " : "bg-gray-200 text-gray-800"
        }`}
      >
        <p className={`p-2 `}>{text}</p>
      </div>
    </div>
  );
};

export default Message;

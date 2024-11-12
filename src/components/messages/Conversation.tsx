interface ConversationProps {
  name: string;
  lastMessage: string;
  lastActive: string;
  avatarUrl: string;
}

const Conversation: React.FC<ConversationProps> = ({ name, lastMessage, lastActive, avatarUrl }) => {
  return (
    <div className="flex gap-4 items-center p-2 bg-white hover:bg-sky-500 rounded cursor-pointer border border-gray-300">
      <div className="avatar">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={avatarUrl} alt={`${name} avatar`} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-2xl font-bold text-gray-700">{name}</p>
        <p className="text-xl text-gray-500 truncate">{lastMessage}</p>
        <p className="text-2xs text-gray-400 mt-1">{lastActive}</p>
      </div>
    </div>
  );
};

export default Conversation;

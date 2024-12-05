import useConversation from "../../zustand/useConversation";

interface ConversationState {
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
}

interface ConversationProps {
  conversation: ConversationState;
}

const Conversation: React.FC<ConversationProps> = ({ conversation }) => {
  const { setSelectedConversation } = useConversation();

  return (
    <div onClick={() => setSelectedConversation(conversation)} className="flex gap-4 items-center p-2 bg-white hover:bg-sky-500 rounded cursor-pointer border border-gray-300">
      <div className="avatar">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={conversation.avatar} alt={`${conversation.firstName + " " + conversation.lastName} avatar`} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-2xl font-bold text-gray-700">{conversation.firstName + " " + conversation.lastName}</p>
      </div>
    </div>
  );
};

export default Conversation;

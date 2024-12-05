import MessageInput from "./MessageInput";
import Messages from "./Messages";

interface MessageContainerProps {
  listMessages: any[];
  setListMessages: any;
  selectedConversation: any;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  listMessages,
  selectedConversation,
  setListMessages,
}) => {
  return (
    <div className="w-2/3 flex flex-col" style={{ maxHeight: "550px" }}>
      <div className="px-4 py-5 mb-2 bg-white border border-gray-300">
        <span className="label-text text-2xl pr-4">To:</span>
        {selectedConversation?.firstName + " " + selectedConversation?.lastName}
      </div>

      {/* Message List Area */}
      <Messages listMessages={listMessages} />

      {/* Fixed Message Input at Bottom */}
      <MessageInput
        selectedConversation={selectedConversation}
        setListMessages={setListMessages}
      />
    </div>
  );
};

export default MessageContainer;

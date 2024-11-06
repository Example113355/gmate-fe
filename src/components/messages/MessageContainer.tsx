import MessageInput from './MessageInput';
import Messages from './Messages';

const MessageContainer: React.FC = () => {
  return (
    <div className="w-2/3 flex flex-col" style={{ maxHeight: '550px' }}>
      <div className="px-4 py-3 mb-2 bg-white border border-gray-300">
        <span className="label-text">To:</span>{' '}
        <span className="text-gray-900 font-bold">John Doe</span>
      </div>
      
      {/* Message List Area */}
      <Messages />

      {/* Fixed Message Input at Bottom */}
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
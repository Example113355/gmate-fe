import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput: React.FC = () => {
  return (
    <form className="flex items-center px-4 py-3 bg-white border-t border-gray-300 h-1/7">
      <input
        type="text"
        placeholder="Type a message"
        className="h-full flex-1 border rounded-lg p-3 bg-white border-gray-300 text-2xl"
      />
      <button type="submit" className="ml-3">
        <FontAwesomeIcon icon={faPaperPlane} color="#f0564a" className="text-4xl" />
      </button>
    </form>
  );
};

export default MessageInput;
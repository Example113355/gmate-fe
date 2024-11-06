import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput: React.FC = () => {
  return (
    <form className="flex items-center px-4 py-3 bg-white border-t border-gray-300">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 border text-sm rounded-lg p-2.5 bg-white border-gray-300"
      />
      <button type="submit" className="ml-3">
        <FontAwesomeIcon icon={faPaperPlane} color="#f0564a" className="text-xl" />
      </button>
    </form>
  );
};

export default MessageInput;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommenting, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBox = ({ isOpen, onClose }: ChatBoxProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:min-w-[750px] md:min-h-[573px] bg-white border border-gray-300 rounded-[15px] shadow-[0px_3px_7px_2px_rgba(0,0,0,0.22)] flex overflow-hidden">
      {/* Chat Box Header */}
      <div className="w-full">
        <div className="grid grid-cols-3 items-center p-2 border-b border-gray-200 bg-[#F5F5F5]">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCommenting}
              color="#f0564a"
              className="text-2xl"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold text-[18px]">Tin nhắn</p>
          </div>
          <div className="flex justify-end space-x-2">
            <button onClick={onClose} className="cursor-pointer focus:outline-none">
              <FontAwesomeIcon
                icon={faMinusCircle}
                color="#f0564a"
                className="text-2xl"
              />
            </button>
          </div>
        </div>

        {/* Sidebar and Chat Area */}
        <div className="flex h-[550px]">
          {/* Sidebar for Conversations with independent scroll */}
          <div className="w-1/3 bg-gray-100 border-r border-gray-300 overflow-y-auto" style={{ maxHeight: '550px' }}>
            <Sidebar />
          </div>

          <MessageContainer />

        </div>
      </div>
    </div>
  );
};

export default ChatBox;

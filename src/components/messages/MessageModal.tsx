interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-start z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white w-[600px] rounded-lg shadow-lg p-4 mt-12">
        <div className="flex items-center justify-center relative">
          <h2 className="text-lg font-bold text-center flex-1">Gửi tin nhắn đầu tiên</h2>
          <button onClick={onClose} className="absolute right-0 text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>
        <textarea
          placeholder="Message..."
          className="w-full h-20 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:border-red-500 mt-4"
        ></textarea>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Đóng
          </button>
          <button
            onClick={() => alert('Message sent!')} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Gửi tin nhắn
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;

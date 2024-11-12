import React from 'react';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessageModal = ({ isOpen, onClose }: MessageModalProps) => {
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
      <div className="bg-white w-[600px] h-1/3 rounded-lg shadow-lg p-4 mt-12 py-6">
        <div className="flex items-center justify-center relative">
          <h2 className="text-[18px] font-bold text-center flex-1">
            Gửi tin nhắn đầu tiên
          </h2>
          <button
            onClick={onClose}
            className="absolute right-0 text-gray-400 hover:text-gray-600 text-[20px] pr-4"
          >
            ✕
          </button>
        </div>
        <div className="p-4 h-3/5">
          <textarea
            placeholder="Message..."
            className="w-full h-full p-3 text-[15px] border border-gray-300 rounded resize-none focus:outline-none focus:border-red-500 mt-4"
          ></textarea>
        </div>
        <div className="flex justify-end mt-4 space-x-3 pr-4 pt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 text-[15px]"
          >
            Đóng
          </button>
          <button
            onClick={() => alert("Message sent!")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-[15px]"
          >
            Gửi tin nhắn
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;

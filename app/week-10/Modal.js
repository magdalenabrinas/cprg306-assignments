import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 w-1/4 rounded shadow-lg z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 bg-transparent border-0 text-black cursor-pointer"
        >
          <span className="text-2xl">&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

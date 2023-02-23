import React from "react";

const Modal = ({ image, handleCloseModal = () => {} }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-[80] w-screen h-screen bg-black/90 flex justify-center items-center"
      onClick={handleCloseModal}
    >
      <div className="fixed top-[50px] right-[50px] cursor-pointer text-white text-4xl hover:text-gray-500">
        x
      </div>
      <img
        className="max-w-[800px] max-h-[600px] object-cover"
        src={image}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Modal;

import classNames from "classnames";
import Image from "next/image";
import React from "react";

const Modal = ({ image, horizontal = true, handleCloseModal = () => {} }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-[80] w-screen h-screen bg-black/90 flex justify-center items-center"
      onClick={handleCloseModal}
    >
      <div className="fixed top-[10px] right-[20px] md:top-[50px] md:right-[50px] cursor-pointer text-color text-3xl md:text-4xl hover:text-gray-500">
        x
      </div>
      <div
        className={classNames("relative mx-auto ", {
          " w-[90%] md:w-[80%] aspect-video": horizontal,
          " h-[80%] md:h-[80%] aspect-[9/16]": !horizontal,
        })}
      >
        <Image
          src={image}
          alt="image"
          fill
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Modal;

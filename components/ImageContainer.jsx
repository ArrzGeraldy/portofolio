import Image from "next/image";
import React from "react";

const ImageContainer = ({ imageName }) => {
  return (
    <Image
      src={`/assets/images/${imageName}`}
      width={300}
      height={300}
      alt="..."
      unoptimized={true}
      className="lg:w-[25rem] w-full rounded-xl h-auto shadow-md image-porto"
    />
  );
};

export default ImageContainer;

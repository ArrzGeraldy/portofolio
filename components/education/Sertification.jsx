"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageContainer from "@/components/ImageContainer";
import Image from "next/image";

const Sertification = () => {
  const [imageModal, setImageModal] = useState("");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-8">
      <Dialog>
        <DialogTrigger
          className="link-porto"
          onClick={() => setImageModal("eduwork.png")}
        >
          <ImageContainer imageName={"eduwork.png"} />
        </DialogTrigger>
        <DialogContent className="bg-color-dark border-color-gray">
          <DialogHeader>
            <Image
              src={`/assets/images/${imageModal}`}
              width={500}
              height={500}
              alt="..."
              className="w-full mt-4"
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger
          className="link-porto"
          onClick={() => setImageModal("python-data-visual.png")}
        >
          <ImageContainer imageName={"python-data-visual.png"} />
        </DialogTrigger>
        <DialogContent className="bg-color-dark border-color-gray">
          <DialogHeader>
            <Image
              src={`/assets/images/${imageModal}`}
              width={500}
              height={500}
              unoptimized={true}
              alt="..."
              className="w-full mt-4"
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger
          className="link-porto"
          onClick={() => setImageModal("js-basic.png")}
        >
          <ImageContainer imageName={"js-basic.png"} />
        </DialogTrigger>
        <DialogContent className="bg-color-dark border-color-gray">
          <DialogHeader>
            <Image
              src={`/assets/images/${imageModal}`}
              width={500}
              height={500}
              unoptimized={true}
              alt="..."
              className="w-full mt-4"
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sertification;

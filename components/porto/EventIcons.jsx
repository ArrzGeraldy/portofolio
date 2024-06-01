"use client";
import { DiNodejs } from "react-icons/di";
import { NextjsOriginal, MongodbOriginal } from "devicons-react";
const EventIcons = () => {
  return (
    <div className="flex gap-4 mt-2">
      <div className="w-10 h-10 bg-color-gray flex items-center justify-center rounded-full">
        <NextjsOriginal size={32} />
      </div>
      <div className="w-10 h-10 bg-color-gray flex items-center justify-center rounded-full">
        <DiNodejs size={32} />
      </div>
      <div className="w-10 h-10 bg-color-gray flex items-center justify-center rounded-full">
        <MongodbOriginal size={32} />
      </div>
    </div>
  );
};

export default EventIcons;

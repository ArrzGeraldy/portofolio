"use client";
import React from "react";
import { DiNodejs } from "react-icons/di";
import { MongodbOriginal, ReactOriginal } from "devicons-react";

const FoodIcons = () => {
  return (
    <div className="flex gap-4 mt-2">
      <div className="w-10 h-10 bg-color-gray flex items-center justify-center rounded-full">
        <ReactOriginal size={32} />
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

export default FoodIcons;

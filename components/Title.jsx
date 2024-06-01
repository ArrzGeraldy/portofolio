import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-2 h-10 bg-color-orange rounded-md"></div>
      <h2 className="text-4xl font-semibold">{title}</h2>
    </div>
  );
};

export default Title;

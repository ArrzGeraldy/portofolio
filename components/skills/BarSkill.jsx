import React from "react";

const BarSkill = ({ percentage }) => {
  return (
    <div className="w-[60%] relative">
      <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
      <div
        className={`h-1.5 w-[${percentage}%] bg-color-orange rounded-md absolute top-0`}
      ></div>
    </div>
  );
};

export default BarSkill;

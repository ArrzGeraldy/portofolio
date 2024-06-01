import React from "react";
import { PiGraduationCap } from "react-icons/pi";

const EducationCard = ({ name, level, year }) => {
  return (
    <div className="bg-black p-4 rounded-md">
      <div className="flex gap-4 items-center">
        <div className="p-2 rounded-md bg-color-dark">
          <PiGraduationCap size={44} className="text-color-orange" />
        </div>
        <div>
          <span className="font-medium">{name}</span>

          <p className="text-sm">{year}</p>
          <p className="text-xs text-color-orange">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

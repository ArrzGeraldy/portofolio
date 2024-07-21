"use client";

import {
  LaravelOriginal,
  MysqlOriginal,
  NextjsOriginal,
  ReactOriginal,
} from "devicons-react";

const CashierIcons = () => {
  return (
    <div className="flex gap-4 mt-2">
      <div className="w-10 h-10 flex items-center justify-center rounded-full">
        <LaravelOriginal size={32} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full">
        <ReactOriginal size={32} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full">
        <MysqlOriginal size={32} />
      </div>
    </div>
  );
};

export default CashierIcons;

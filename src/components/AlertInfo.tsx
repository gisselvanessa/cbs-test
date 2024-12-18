import React from 'react';
import { IoInformationCircleSharp } from 'react-icons/io5';
interface AlertInterface {
    message: string;
  }
export const AlertInfo = ({ message }: AlertInterface) => {
  return (
    <div
      color="info"
      className="flex p-2 bg-alert border-radius-10 mt-2"
    >
      <div className="w-6 me-1">
        <IoInformationCircleSharp className="w-6 h-6 text-alert" />
      </div>
      <span className="font-13 text-alert">{message}</span>
    </div>
  );
};


"use client"
import React, { memo, useContext, useEffect, useState } from "react";
import { AlertContext } from "../context/context";

const ShowAlert = ({ message, time = 3000, className="bg-green-500",bottom="bg-[whitesmoke]" }) => {
  const [display, setDisplay] = useState(true);
  if (display){
    setTimeout(() => {
      setDisplay(false);
    }, time);
  }

  return (
    <div
      className={
        display ? `fixed z-[5000] top-20 right-10 rounded-md ${className}` : "hidden"
      }
    >
      <div className="flex relative items-center justify-between min-w-[15vh] min-h-[3rem] px-5">
        <h5 className="mr-3">{message}</h5>
        <button
          className="border-solid border-white border-[1px] px-2 h-max"
          onClick={() => setDisplay(false)}
        >
          X
        </button>
      </div>
      <div className={`min-h-1 mx-[1px] ${bottom} alert`}></div>
    </div>
  );
};

export default memo(ShowAlert);

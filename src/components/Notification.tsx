"use client";

import React, { useState } from "react";

const Notification = () => {
  const [notification, setHideNotification] = useState(true);
  return (
    <div
      className={
        notification
          ? "flex items-center justify-center gap-[28%] text-sm md:justify-between bg-red-500 h-10 px-[10px]"
          : "hidden"
      }
    >
      <span></span>
      <span className="text-white">
        Free delivery for all orders above RS.250
      </span>
      <span
        onClick={() => setHideNotification(false)}
        className="text-white font-extrabold cursor-pointer"
      >
        X
      </span>
    </div>
  );
};

export default Notification;

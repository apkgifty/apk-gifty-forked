"use client";

import React, { useEffect, useState } from "react";

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      //   console.log(navigator.onLine);
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.log("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return <>{isOnline ? children : <p>Oops offline</p>}</>;
};

export default ErrorWrapper;

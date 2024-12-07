"use client";
import { SessionProvider } from "next-auth/react";
import React, { memo, useEffect, useState } from "react";
import { AlertContext, UserContext } from "../context/context";
import ShowAlert from "./ShowAlert";

const ContextWrapper = ({ children }) => {
  const [alertState, setAlert] = useState({
    message: "",
    className: "",
    time: 0,
  });
  const [user, setUser] = useState({ name: "", username: "", email: "",id:"A464Venkatsai"});

  useEffect(() => {
    setTimeout(() => {
      setAlert({message: "", className: "",time: 0})
    }, alertState.time);
  }, [alertState])
  return (
    <div>
      {alertState.time>0 && <ShowAlert message={alertState.message} time={alertState.time} className={alertState.className} />}
      <SessionProvider>
        <AlertContext.Provider value={{ alertState, setAlert }}>
          <UserContext.Provider value={{ user, setUser }}>
            {children}
          </UserContext.Provider>
        </AlertContext.Provider>
      </SessionProvider>
    </div>
  );
};

export default memo(ContextWrapper);

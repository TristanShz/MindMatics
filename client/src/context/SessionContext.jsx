import { createContext, useContext } from "react";
import Cookies from "js-cookie";

export const setSessionCookie = (session) => {
  Cookies.remove("session");
  Cookies.set("session", JSON.stringify(session), { expires: 30 });
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");
  if (process.env.NODE_ENV === "test") {
    return {
      id: "63b6aaf4d21420ed6e771d99",
      username: "user-test",
    };
  }
  if (sessionCookie === undefined) {
    return undefined;
  } else {
    return JSON.parse(sessionCookie);
  }
};

export const removeSessionCookie = () => {
  Cookies.remove("session");
};

export const SessionContext = createContext(getSessionCookie());

export const SessionProvider = ({ children, value }) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
export const useSession = () => useContext(SessionContext);

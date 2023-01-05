import React, { useState } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { getSessionCookie, SessionProvider } from "../context/SessionContext";

const AllTheProviders = ({ children }) => {
  const [session, setSession] = useState(getSessionCookie());
  console.log("SESSION IN TESTS ", session);
  return (
    <SessionProvider value={{ session, setSession }}>
      <BrowserRouter>{children}</BrowserRouter>
    </SessionProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

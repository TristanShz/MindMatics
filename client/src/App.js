import { ToastContainer } from "react-toastify";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Auth, Home } from "./pages";
import { Helmet } from "react-helmet";
import RegularLayout from "./components/layouts/RegularLayout";
import { getSessionCookie, SessionProvider } from "./context/session";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [session, setSession] = useState(getSessionCookie());
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) navigate("/auth");
  }, [session]);

  console.log("SESSION IN APP", session);
  return (
    <>
      <ToastContainer
        position={"bottom-center"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
      />
      <Helmet>
        <title>Mindmatics</title>
      </Helmet>
      <SessionProvider value={{ session, setSession }}>
        <RegularLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route element={<Auth />} path="/auth" />
          </Routes>
        </RegularLayout>
      </SessionProvider>
    </>
  );
}

export default App;

import { ToastContainer } from "react-toastify";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Auth, Game, Home } from "./pages";
import { Helmet } from "react-helmet";
import RegularLayout from "./components/layouts/RegularLayout";
import { getSessionCookie, SessionProvider } from "./context/SessionContext";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "./_config/routes";

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
        position={"top-left"}
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
            <Route element={<Auth />} path={ROUTES.auth} />
            <Route element={<Game />} path={ROUTES.game} />
          </Routes>
        </RegularLayout>
      </SessionProvider>
    </>
  );
}

export default App;

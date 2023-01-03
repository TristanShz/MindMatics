import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Helmet } from "react-helmet";
import RegularLayout from "./components/layouts/RegularLayout";

function App() {
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
      <RegularLayout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RegularLayout>
    </>
  );
}

export default App;

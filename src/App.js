import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { fetchData } from "./state/fetchData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("https://fruits-develhope.herokuapp.com/api"));
  }, [dispatch]);

  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Footer />
            </>
          }
        />
        <Route
          path="home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

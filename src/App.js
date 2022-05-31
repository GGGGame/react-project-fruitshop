import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { getItem } from "./state/cartData";
import { fetchData } from "./state/fetchData";

function App() {
  const testGet = useSelector((state) => state.cartFruit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("https://fruits-develhope.herokuapp.com/api"));
  }, [dispatch]);

  const buyFruit = (id) => {
    dispatch(getItem(id));
  };

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
              <Navbar cartData={testGet} />
              <Home buyButton={buyFruit} />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

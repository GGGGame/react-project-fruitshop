import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";

function App() {
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

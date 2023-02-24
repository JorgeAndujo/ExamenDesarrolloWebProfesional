import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Universidad from "./pages/Universidad";

const App = () => {
  return (
    <>
      <div className="container" style={{ backgroundColor: "#F1F0F0" }}>
        <div style={{ padding: "1px" }}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/universidad" element={<Universidad />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;

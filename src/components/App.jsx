import Header from "./Header"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "./Logement";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logement/:id" element={<Logement/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App; 
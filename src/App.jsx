import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Product from "./Components/Product/Product.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;

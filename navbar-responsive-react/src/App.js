import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import Products from "./products/Products";
import Services from "./services/Services";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

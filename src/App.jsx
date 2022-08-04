import "../src/Styles/App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <Router>
      {/* Header */}
      <Header />

      <Routes>
        {/* Checkout Page Route */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Home Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
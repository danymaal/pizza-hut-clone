import Header from "./components/header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// todo: make a modal backdrop -- done
// todo: log in form
// todo: cart as a separate page and when hovered
// todo: when on a modal user click yes he goes to takeaway enters address and when order button clicked it gets him to separate cart component

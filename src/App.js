import Header from './components/header/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './components/navbar/Navbar';
import CartPage from './Pages/CartPage';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout/Checkout.jsx';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

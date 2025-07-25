import { HashRouter as Router, Routes, Route } from "react-router-dom"; // <-- changed to HashRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/product/:title" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </HashRouter>
    </Router>
  </CartProvider>
);

export default App;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/image/logo.png'

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="bg-[#3E0478] shadow-lg px-6 py-4 absolute w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-blue-600 font-sora font-semibold">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-600 font-manrope font-semibold">About</Link>
          <Link to="/cart" className="flex items-center space-x-1 text-white hover:text-blue-600 font-manrope font-semibold">
            <FaShoppingCart />
            <span>({cart.length})</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-b-md">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-blue-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-blue-100"
          >
            About
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-1 px-6 py-3 hover:bg-blue-100"
          >
            <FaShoppingCart />
            <span>({cart.length})</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

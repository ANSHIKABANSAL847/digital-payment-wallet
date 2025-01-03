import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import loginImg from "../assets/loginimg.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { CreditCardIcon, HomeIcon, MenuIcon, UserIcon } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => setMenu(!menu);
  const handleNavigate = () => navigate("/login");

  const closeMenu = () => setMenu(false);

  return (
    <nav className="px-6 py-4 flex justify-between items-center relative shadow-lg bg-white">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden" onClick={handleMenu}>
        <MenuIcon className="cursor-pointer text-gray-800" aria-label="Toggle menu" />
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-0 w-4/5 bg-white rounded-lg shadow-lg p-6 z-50 animate-slide-in">
          <ul className="flex flex-col gap-6">
            <Link to="/" onClick={closeMenu}>
              <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-3 rounded-lg transition-all">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </li>
            </Link>
            <Link to="/transaction" onClick={closeMenu}>
              <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-3 rounded-lg transition-all">
                <CreditCardIcon className="h-5 w-5" />
                <span>Transaction</span>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-9">
        <Link to="/" className="text-gray-800">
          <li className="list-none">
            <button className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-[#00baf2] to-[#002970] text-white hover:bg-blue-700 transition-all">
              Home
            </button>
          </li>
        </Link>
        <Link to="/transaction" className="text-gray-800">
          <li className="list-none">
            <button className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-[#00baf2] to-[#002970] text-white hover:bg-blue-700 transition-all">
              Transaction
            </button>
          </li>
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleNavigate}
            className="bg-[#00baf2] hover:bg-blue-700 font-semibold py-2 px-4 rounded-full flex items-center gap-2 text-white"
          >
            <span>Sign up</span>
            <img src={loginImg} alt="Sign up" className="h-5 w-5" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

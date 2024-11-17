import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Camera } from "lucide-react"; // Assuming Camera icon is available from lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-purple-600" />
          <Link to="/" className="text-2xl font-bold text-gray-800">
            MemoryKeeper
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-purple-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/invitation"
                className="text-gray-600 hover:text-purple-600 transition duration-300"
              >
                Invitation
              </Link>
            </li>
            <li>
              <Link
                to="/event-album"
                className="text-gray-600 hover:text-purple-600 transition duration-300"
              >
                Event Album
              </Link>
            </li>
            <li>
              <Link
                to="/event-memories"
                className="text-gray-600 hover:text-purple-600 transition duration-300"
              >
                Memories
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

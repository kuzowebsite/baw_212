import { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black">
      <nav className="w-full screen-max-width flex justify-between items-center relative">
        {/* Гар утасны menu шүүү */}
        <button
          className="sm:hidden text-white text-sm"
          onClick={toggleMenu}
        >
          Menu
        </button>


        <div className="flex items-center justify-center flex-1 sm:justify-start">
          <img
            src="/public/assets/images/logo.webp"
            alt="Apple Logo"
            width={74}
            height={28}
            className="block mx-auto sm:mx-0"
          />
        </div>

        {/* PC шүү */}
        <div className="hidden sm:flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray-700 hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>


        <div className="flex items-center gap-5 sm:justify-end">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>

        {/* Гар утасны menu шүүүүү*/}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
            <div className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg p-5 flex flex-col gap-4">
              <button
                className="text-black self-end"
                onClick={toggleMenu}
              >
                Close
              </button>
              {navLists.map((nav) => (
                <div
                  key={nav}
                  className="text-black text-lg font-medium cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  {nav}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

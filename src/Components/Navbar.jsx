import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/Paresh-Mistry-Resume.pdf";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Projects", "Achievements", "Education"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white hover:text-teal-400 transition-colors duration-300"
          >
            <span className="text-slate-400">Paresh</span>
            <span className="text-[#5C8374]">.dev</span>
          </Link>

          {/* <img src={myImage} alt="" className="w-60 h-70 bg-slate-700" />*/}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                {item}
              </Link>
            ))}
            <Link
              to={pdf}
              target="_blank"
              className="ml-4 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 font-medium"
              >
                {item}
              </Link>
            ))}
            <Link
              to={pdf}
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white text-center rounded-lg transition-all duration-300 font-semibold mt-2"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-[#2A2A2A] text-white fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Nome */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/synaptech-logo.png" alt="SynapTech" className="w-8 h-8" />
          <span className="font-bold text-[#00E0FF] text-lg">SynapTech</span>
        </Link>

        {/* Botão mobile */}
        <button
          className="md:hidden text-[#00E0FF]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-12 left-0 w-full md:w-auto bg-[#2A2A2A] md:flex md:gap-6 text-center md:text-left`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block py-2 px-4 md:px-0 hover:text-[#00E0FF] ${
              location.pathname === "/" ? "text-[#00E0FF]" : "text-gray-300"
            }`}
          >
            Início
          </Link>
          <Link
            to="/serviceManager"
            onClick={() => setMenuOpen(false)}
            className={`block py-2 px-4 md:px-0 hover:text-[#00E0FF] ${
              location.pathname === "/serviceManager"
                ? "text-[#00E0FF]"
                : "text-gray-300"
            }`}
          >
            Gerenciamento de Serviços
          </Link>
        </div>
      </div>
    </nav>
  );
}

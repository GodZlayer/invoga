import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`px-4 lg:px-8 fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-2`}
    >
      <div className={`container mx-auto flex items-center transition-all duration-300 ${scrolled ? 'justify-center' : 'justify-between'}`}> 
        {/* Logo */}
        <div className={`flex-shrink-0 transition-all duration-300 ${scrolled ? 'mx-auto' : ''}`}> {/* Centraliza ao rolar */}
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="InVoga Marketing Promocional Logo"
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`hidden lg:flex flex-grow justify-center transition-all duration-300 opacity-100 w-auto`}> {/* Hide navigation when scrolled */}
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-invoga-blue font-medium hover:text-invoga-yellow transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-invoga-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="#oque-fazemos" className="text-invoga-blue font-medium hover:text-invoga-yellow transition-colors relative group">
                O que fazemos?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-invoga-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="#portfolio" className="text-invoga-blue font-medium hover:text-invoga-yellow transition-colors relative group">
                O que já realizamos?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-invoga-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="#contato" className="text-invoga-blue font-medium hover:text-invoga-yellow transition-colors relative group">
                Fale conosco
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-invoga-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className={`hidden lg:flex flex-shrink-0 transition-all duration-300 opacity-100 w-auto`}> {/* Hide button when scrolled */}
          <a href="#contato" className="yellow-button">
            Fale conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-invoga-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-50 lg:hidden transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-invoga-blue"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 pt-8">
            <li>
              <Link
                to="/"
                className="text-invoga-blue font-bold text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#oque-fazemos"
                className="text-invoga-blue font-bold text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                O que fazemos?
              </Link>
            </li>
            <li>
              <Link
                to="#portfolio"
                className="text-invoga-blue font-bold text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                O que já realizamos?
              </Link>
            </li>
            <li>
              <Link
                to="#contato"
                className="text-invoga-blue font-bold text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;

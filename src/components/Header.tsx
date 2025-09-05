import React, { useState } from 'react';
import { Menu, X, Search, Brain, TrendingUp, Users } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Fixier.org</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                בית
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  שירותים
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      קידום אתרים באמצעות AI
                    </a>
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      מחקר מילות מפתח וקלאסטרים
                    </a>
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      כתיבת תוכן מונחה-בינה
                    </a>
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      אופטימיזציה טכנית
                    </a>
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      בניית סמכות וקישורים חכמים
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  תעשיות
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <a href="#industries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">עורכי דין</a>
                    <a href="#industries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">קליניקות</a>
                    <a href="#industries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">מסעדות</a>
                    <a href="#industries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">איקומרס</a>
                    <a href="#industries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">תיירות</a>
                  </div>
                </div>
              </div>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                משאבים
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                צור קשר
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#lead-magnet" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              קבלו דמו
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-expanded="false"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">בית</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">שירותים</a>
              <a href="#industries" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">תעשיות</a>
              <a href="#lead-magnet" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">קבלו דמו</a>
              <a href="#resources" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">משאבים</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">צור קשר</a>
              <a href="#lead-magnet" className="w-full text-left bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg text-base font-medium mt-4 block">
                קבלו דמו
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
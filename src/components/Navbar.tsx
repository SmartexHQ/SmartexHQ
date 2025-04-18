import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">SmartexHq</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-accent transition-colors">Services</a>
              <a href="#benefits" className="text-gray-700 hover:text-accent transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-accent transition-colors">Contact</a>
              <Button className="bg-accent hover:bg-accent/90">Get Started</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-accent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-accent">Services</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-accent">Benefits</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-accent">Contact</a>
              <Button className="w-full mt-4 bg-accent hover:bg-accent/90">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, ArrowRight, Menu, X, ChevronDown, HardHat, Hammer, Wrench, 
  Users, Award, Clock, Shield, Star, Phone, Mail, MapPin, CheckCircle,
  TrendingUp, Eye, Target, Zap, Calendar, PlayCircle, Quote
} from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-2xl' : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building2 className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <span className="text-2xl font-bold text-gray-400">Bobngame</span>
                <div className="text-xs text-orange-600 font-medium">Construction Excellence</div>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={item.path}>
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-orange-600' 
                      : scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-gray-400 hover:text-orange-500'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-orange-600" />
              <span className="font-medium text-orange-600">+263 77 267 7009</span>
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05, shadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Contact form would open here!")}
            >
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </motion.button>
          </div>

          <button 
            className="lg:hidden p-2 rounded-lg bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-2xl fixed top-24 left-0 right-0 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full py-4 text-left font-semibold border-b border-gray-100 ${
                      location.pathname === item.path ? 'text-orange-600' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span>+263 4 123 456</span>
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-full font-semibold"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    alert("Contact form would open here!");
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
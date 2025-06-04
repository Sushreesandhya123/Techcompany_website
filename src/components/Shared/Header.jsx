import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/JuvvalTech Full Logo.png";
import ProductDropdown from "./ProductModal";
import MoliLogo from '../../assets/image (6).png';
import KuluLogo from '../../assets/image (12).png';
import AiTerp from '../../assets/image (10).png';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const productButtonRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified product data with just the 3 main products
  const productsData = [
    {
      name: "Moli",
      description: "Smart digital interpreter app for real-time multilingual communication",
      link: "https://www.mymoliapp.com/",
      logo: MoliLogo,
      isNew: false,
      features: ["Bridging Courts & Cultures", "Smart Interpretation Management for Smarter Courts", " Empowering Courtrooms Through Technology"]
    },
    
    {
      name: "Kulu",
      description: "Digital court management system streamlining legal processes",
      link: "/kulu",
      logo: KuluLogo,
      isNew: false,
      features: ["Effortless Jury Management Starts Heret", "Kulu: The Smarter Way to Manage Courtrooms.", "Simplify Jury Duty & Streamline Court Operations"]
    },
    {
      name: "AI-terp",
      description: "AI-powered interpreter for seamless voice and text translations",
      link: "/ai-terp",
      logo: AiTerp,
      isNew: true,
      features: ["Advanced accuracy", "AI Terp: Real-Time Interpretation. No Human Needed", "Seamless AI Interpretation for Moli Conversations"]
    }
  ];

  return (
    <div>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white py-4"}`}>
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto h-full relative">
          <Link to="/" className="flex items-center h-full">
            <img 
              src={logo} 
              alt="JuvvalTech Logo" 
              className={`h-10 transition-all duration-300 ${scrolled ? "max-h-9" : "max-h-10"}`} 
            />
          </Link>

          <nav className="hidden md:flex space-x-8 font-medium text-gray-800 items-center h-full relative">
            <Link 
              to="/" 
              className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-500"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-500"
            >
              About
            </Link>

            {/* Enhanced Product Button */}
            <div className="relative" ref={productButtonRef}>
              <button
                onClick={() => setProductOpen((prev) => !prev)}
                className={`hover:text-blue-600 transition-colors py-2 border-b-2 ${
                  productOpen ? "border-blue-500 text-blue-600" : "border-transparent hover:border-blue-500"
                } flex items-center`}
              >
                Products
                {productOpen ? (
                  <MdKeyboardArrowUp className="w-5 h-5 ml-1" />
                ) : (
                  <MdKeyboardArrowDown className="w-5 h-5 ml-1" />
                )}
              </button>
              {productOpen && (
                <ProductDropdown
                  onClose={() => setProductOpen(false)}
                  productsData={productsData}
                />
              )}
            </div>

            <Link 
              to="/customers" 
              className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-500"
            >
              Customers
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-500"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button would go here */}
        </div>
      </header>
    </div>
  );
}
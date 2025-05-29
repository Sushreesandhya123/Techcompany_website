import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ProductDropdown({ onClose, productsData }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-[90vw] max-w-[900px] bg-white shadow-xl rounded-lg z-50 border border-gray-100 p-6"
      style={{
        left: 'auto',
        right: '0px',
        transform: 'none',
        marginRight: '-12rem',
        marginLeft: '1rem',
        maxWidth: 'calc(-17rem + 80vw)'
      }}
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Our Products</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div 
              key={product.name} 
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all hover:border-blue-100 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-start">
                  <img 
                    src={product.logo} 
                    alt={product.name} 
                    className="w-15 h-12"
                  />
                  <div className="flex-grow w-full">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h5>
                      {product.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">New</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 my-3 text-sm flex-grow">{product.description}</p>
                
                {product.features && (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={product.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    onClick={onClose}
                  >
                    Learn more →
                  </Link>
                  <Link
                    to={product.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    onClick={onClose}
                  >
                    Try for free
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/all-products" 
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
            onClick={onClose}
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
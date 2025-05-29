import React from 'react';
import { useNavigate } from 'react-router-dom';

const RequestDemoButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#002868] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#001f4d] transition duration-200"
    >
      Request for Demo
    </button>
  );
};

export default RequestDemoButton;
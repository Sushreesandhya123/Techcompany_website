import React from 'react';

// Import your logos (replace with actual paths)
import abbLogo from '../assets/courts logos moli/2_entity_dp.png';
import avevaLogo from '../assets/courts logos moli/3_entity_dp.png';
import lyftLogo from '../assets/courts logos moli/4_entity_dp.png';
import siemensLogo from '../assets/courts logos moli/5_entity_dp.png';
import schneiderLogo from '../assets/courts logos moli/6_entity_dp.png';
import ogilvyLogo from '../assets/courts logos moli/7_entity_dp.png';
import tmobileLogo from '../assets/courts logos moli/8_entity_dp.png';
import rogersLogo from '../assets/courts logos moli/11_entity_dp.png';
import jaguarLogo from '../assets/courts logos moli/13_entity_dp.png';
import Logo14 from '../assets/courts logos moli/14_entity_dp.png';
import Logo15 from '../assets/courts logos moli/15_entity_dp.png';
import Logo16 from '../assets/courts logos moli/16_entity_dp.png';

const LogoGrid = () => {
  // Array of logo data with colors
  const logos = [
    { name: 'HDFC', logo: abbLogo, bgColor: 'bg-blue-100' },
    { name: 'Life', logo: avevaLogo, bgColor: 'bg-green-100' },
    { name: 'TOYOTA', logo: lyftLogo, bgColor: 'bg-red-100' },
    { name: 'ATHER', logo: siemensLogo, bgColor: 'bg-yellow-100' },
    { name: 'HEXAWARE', logo: schneiderLogo, bgColor: 'bg-purple-100' },
    { name: 'McAfee', logo: tmobileLogo, bgColor: 'bg-pink-100' },
    { name: "BYJU'S", logo: ogilvyLogo, bgColor: 'bg-indigo-100' },
    { name: 'ROGERS', logo: rogersLogo, bgColor: 'bg-teal-100' },
    { name: 'Shiji', logo: jaguarLogo, bgColor: 'bg-orange-100' },
    { name: 'meesho', logo: Logo14, bgColor: 'bg-blue-200' },
    { name: 'D&LL', logo: Logo15, bgColor: 'bg-gray-100' },
    { name: 'BOSCH', logo: Logo16, bgColor: 'bg-red-200' },
    { name: "BYJU'S", logo: ogilvyLogo, bgColor: 'bg-indigo-100' },
    { name: 'McAfee', logo: tmobileLogo, bgColor: 'bg-pink-100' },
    { name: 'ROGERS', logo: rogersLogo, bgColor: 'bg-teal-100' },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className={`${logo.bgColor}  p-4 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow`}
          >
            <div className="text-center">
              <img 
                src={logo.logo} 
                alt={logo.name} 
                className="h-20 mx-auto object-contain"
              />
              {/* <p className="mt-2 font-medium text-gray-700">{logo.name}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
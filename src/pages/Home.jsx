import { useState } from 'react';
import FeaturesSection from '../components/Home/FeaturesSection';
import SolutionsCards from '../components/About/SolutionsCards';
// import moliVideo from '../assets/moli page animation_2.mp4';
import MoliLogo from '../assets/image (6).png';
import KuluLogo from '../assets/image (12).png';
import AiTerp from '../assets/image (10).png';
// Import all logo images
import abbLogo from '../assets/courts logos moli/2_entity_dp.png';
import avevaLogo from '../assets/courts logos moli/3_entity_dp.png';
import lyftLogo from '../assets/courts logos moli/4_entity_dp.png';
import siemensLogo from '../assets/courts logos moli/5_entity_dp.png';
import schneiderLogo from '../assets/courts logos moli/6_entity_dp.png';
import ogilvyLogo from '../assets/courts logos moli/7_entity_dp.png';
import tmobileLogo from '../assets/courts logos moli/8_entity_dp.png';
import nvidiaLogo from '../assets/courts logos moli/11_entity_dp.png';
import jaguarLogo from '../assets/courts logos moli/13_entity_dp.png';
import Logo14 from '../assets/courts logos moli/14_entity_dp.png';
import Logo15 from '../assets/courts logos moli/15_entity_dp.png';
import Logo16 from '../assets/courts logos moli/16_entity_dp.png';
import EventsSection from '../pages/EventsSection';

const Home = () => {
  const [active, setActive] = useState('moli');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
  };

  const logos = [
    { src: abbLogo, alt: "ABB" },
    { src: avevaLogo, alt: "Aveva" },   
    { src: siemensLogo, alt: "Siemens" },
    { src: schneiderLogo, alt: "Schneider Electric" },
    { src: ogilvyLogo, alt: "Ogilvy" },
    { src: tmobileLogo, alt: "T-Mobile" },
    { src: nvidiaLogo, alt: "Nvidia" },
    { src: jaguarLogo, alt: "Jaguar Land Rover" },
    { src: Logo14, alt: "Logo_14" },
    { src: lyftLogo, alt: "Lyft" },
    { src: Logo15, alt: "Logo_15" },
    { src: Logo16, alt: "Logo_16" }
  ];

  return (
    <div className="w-full ">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[40%_60%] gap-1 items-center">
          <div className="space-y-6">
            <p className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug md:leading-[1.5]">
              Empowering Justice Through Technology
            </p>
            <p className="text-lg text-gray-600">
              Innovative Software Solutions for Modern Courts Across America
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <button
              onClick={() => window.location.href = 'https://www.mymoliapp.com/'}
              className="px-6 py-3 rounded-md text-base font-medium transition bg-[#fcc907] text-white"
            >
              Try Moli
            </button> */}
            <button
              onClick={() => window.location.href = 'https://www.mymoliapp.com/'}
              className={`px-6 py-3 rounded-md text-base font-medium transition ${
                active === 'moli'
                  ? 'bg-[#fcc907] text-white'
                  : 'bg-transparent text-[#fcc907] border border-[#fcc907]'
              }`}
            >
              Try Moli
            </button>

              <button
                onClick={() => setActive('kulu')}
                className={`px-6 py-3 rounded-md text-base font-medium transition ${
                  active === 'moli'
                    ? 'bg-[#29abe4] text-white'
                    : 'bg-transparent text-[#29abe4] border border-[#29abe4]'
                }`}
              >
                Try Kulu
              </button>

              {/* <button
                onClick={() => setActive('kulu')}
                className={`px-6 py-3 rounded-md text-base font-medium transition ${
                  active === 'kulu'
                    ? 'bg-[#0f172a] text-white'
                    : 'bg-transparent text-[#0f172a] border border-[#0f172a]'
                }`}
              >
                Try Kulu
              </button> */}
            </div>

            <div
              className="flex items-center gap-2 mt-6 cursor-pointer"
              onClick={handleVideoClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                width="20"
                height="20"
                className="text-[#0073d3]"
              >
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M14 10l-6 4.3V5.7l6 4.3z" fill="currentColor" />
              </svg>
              <span className="text-base font-semibold text-[#0073d3]">
                Discover Moli - Interpreter Scheduling Software
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <video
              src="https://civiqdevcirgb380.blob.core.windows.net/juvvaltech-web-video/moli page animation_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-8 text-lg font-medium">
            TRUSTED BY 12+ COURTS ACROSS UNITED STATE OF AMERICA.
          </p>

          {/* Desktop Auto-Scrolling Carousel */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex animate-scroll w-max">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`desktop-${index}`} className="flex-shrink-0 mx-7">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-30 h-20 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Static Grid */}
          <div className="md:hidden flex flex-wrap justify-center gap-6">
            {logos.map((logo, index) => (
              <img
                key={`mobile-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="w-24 h-12 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <SolutionsCards />
      <EventsSection />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full relative">
            <div className="flex justify-end p-2">
              <button
                onClick={handleCloseModal}
                className="text-gray-700 hover:text-black text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/v6UWhEWCvfY?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
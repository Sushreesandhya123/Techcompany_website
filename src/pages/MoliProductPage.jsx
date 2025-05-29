import React, { useState } from "react";
import MoliProduct from '../assets/moliproduct.png';
import AppStore from '../assets/Appstore.png'
import DownloadSection from '../components/Product/DownloadSection' 
import Court1 from '../assets/mcourt1.png';
import PlatformDetails from '../components/Product/PlatformDetails'; // Import the new component
import Features from "../components/Product/Features";
import Court11 from '../assets/mcourt11.jpg';
import ThreeStepsSection from "../components/Product/ThreeStepsSection";
import MoliTutorials from "../components/Product/MoliTutorials";
import DownloadsMoli from "../components/Product/DownloadsMoli";

const MoliProductPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="font-['Open_Sans']">
      {/* Hero Section */}
      <div className="flex flex-col items-center md:gap-5 gap-2 mt-6">
          <div className="text-center">
  <h1 className="text-[#002E44] font-extrabold text-[52px] leading-[1.2] font-sans tracking-[0.015em]">
  Elevate Communication &amp; Break Barriers
</h1>

  <p className="text-[#414D55] text-[18px] leading-[1.6] font-normal mt-2">
    Designed for businesses, agencies, and organizations operating in multilingual environments,
  </p>
  <p className="text-[#414D55] text-[18px] leading-[1.6] font-normal">
    Moli is your comprehensive solution for efficient interpreter management.
  </p>
</div>

        <div className="flex gap-5 mb-1">
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://app.mymoliapp.com/" 
            className="bg-[#2FC6A2] text-[#fff] flex items-center px-5 py-3 border-0 rounded lg:text-lg md:text-base hover:bg-[#28b392] transition-colors"
          >
            <span className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 37 41" fill="none">
                <mask id="mask0_109_2163" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="41">
                  <rect width="37" height="40.4336" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_109_2163)">
                  <path d="M2.74512 35.3791V32.0096H25.3739V35.3791H2.74512ZM13.3995 27.2081L2.74512 17.6894L6.70515 14.0672L17.4538 23.5859L13.3995 27.2081ZM25.3739 16.5101L14.7195 6.90708L18.7738 3.36914L29.4282 12.8879L25.3739 16.5101ZM34.0482 33.6943L9.43946 11.7086L6.95781 3.0432C6.6125 2.8557 6.28437 3.32289 6.56719 3.59476L22.2805 18.6198L27.0156 14.094ZM6.56875 37.4057C6.28438 37.6776 6.6125 38.1448 6.95938 37.9573L6.97187 37.9502L27.0156 26.9065L22.2805 22.3791L6.56875 37.4057ZM35.1078 18.5471L29.5102 15.4643L24.2469 20.5002L29.5102 25.5338L35.1078 22.4534C36.6305 21.612 36.6305 19.3885 35.1078 18.5471Z" fill="white"></path>
                </g>
              </svg>
            </span>
            For Courts
          </a>
          <a 
            href="/home/downloads" 
            className="bg-[#FF543E] text-[#fff] flex items-center px-5 py-3 border-0 rounded lg:text-lg md:text-base hover:bg-[#e64a36] transition-colors"
          >
            <span className="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 42 42" fill="none">
                <mask id="mask0_109_2157" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="42">
                  <rect width="42" height="42" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_109_2157)">
                  <path d="M35.875 28.875C35.1458 28.875 34.526 28.6198 34.0156 28.1094C33.5052 27.599 33.25 26.9792 33.25 26.25V21.875C33.25 21.1458 33.5052 20.526 34.0156 20.0156C34.526 19.5052 35.1458 19.25 35.875 19.25C36.6042 19.25 37.224 19.5052 37.7344 20.0156C38.2448 20.526 38.5 21.1458 38.5 21.875V26.25C38.5 26.9792 38.2448 27.599 37.7344 28.1094C37.224 28.6198 36.6042 28.875 35.875 28.875ZM35 35V32.2875C33.5125 32.0542 32.2656 31.376 31.2594 30.2531C30.2531 29.1302 29.75 27.7958 29.75 26.25H31.5C31.5 27.475 31.9229 28.5104 32.7687 29.3562C33.6146 30.2021 34.65 30.625 35.875 30.625C37.1 30.625 38.1354 30.2021 38.9812 29.3562C39.8271 28.5104 40.25 27.475 40.25 26.25H42C42 27.7958 41.4969 29.1302 40.4906 30.2531C39.4844 31.376 38.2375 32.0542 36.75 32.2875V35H35ZM15.75 21C13.825 21 12.1771 20.3146 10.8062 18.9437C9.43542 17.5729 8.75 15.925 8.75 14C8.75 12.075 9.43542 10.4271 10.8062 9.05625C12.1771 7.68542 13.825 7 15.75 7C16.1583 7 16.5594 7.02917 16.9531 7.0875C17.3469 7.14583 17.7333 7.24792 18.1125 7.39375C17.3542 8.29792 16.7708 9.31146 16.3625 10.4344C15.9542 11.5573 15.75 12.7458 15.75 14C15.75 15.2542 15.9542 16.4427 16.3625 17.5656C16.7708 18.6885 17.3542 19.7021 18.1125 20.6062C17.7333 20.7521 17.3469 20.8542 16.9531 20.9125C16.5594 20.9708 16.1583 21 15.75 21ZM1.75 35V30.1437C1.75 29.1521 1.99792 28.2333 2.49375 27.3875C2.98958 26.5417 3.675 25.9 4.55 25.4625C5.65833 24.8792 6.86146 24.376 8.15937 23.9531C9.45729 23.5302 10.8792 23.2021 12.425 22.9687C11.2583 23.7854 10.3542 24.8208 9.7125 26.075C9.07083 27.3292 8.75 28.6854 8.75 30.1437V35H1.75ZM26.25 21C24.325 21 22.6771 20.3146 21.3062 18.9437C19.9354 17.5729 19.25 15.925 19.25 14C19.25 12.075 19.9354 10.4271 21.3062 9.05625C22.6771 7.68542 24.325 7 26.25 7C28.175 7 29.8229 7.68542 31.1937 9.05625C32.5646 10.4271 33.25 12.075 33.25 14C33.25 15.925 32.5646 17.5729 31.1937 18.9437C29.8229 20.3146 28.175 21 26.25 21ZM26.25 17.5C27.2125 17.5 28.0365 17.1573 28.7219 16.4719C29.4073 15.7865 29.75 14.9625 29.75 14C29.75 13.0375 29.4073 12.2135 28.7219 11.5281C28.0365 10.8427 27.2125 10.5 26.25 10.5C25.2875 10.5 24.4635 10.8427 23.7781 11.5281C23.0927 12.2135 22.75 13.0375 22.75 14C22.75 14.9625 23.0927 15.7865 23.7781 16.4719C24.4635 17.1573 25.2875 17.5 26.25 17.5ZM12.25 35V30.1437C12.25 29.1521 12.4979 28.2333 12.9937 27.3875C13.4896 26.5417 14.175 25.9 15.05 25.4625C16.5375 24.7042 18.2219 24.0625 20.1031 23.5375C21.9844 23.0125 24.0333 22.75 26.25 22.75C26.6 22.75 26.9427 22.7573 27.2781 22.7719C27.6135 22.7865 27.9417 22.8083 28.2625 22.8375C27.9708 23.3625 27.7302 23.9094 27.5406 24.4781C27.351 25.0469 27.2271 25.6375 27.1687 26.25H26.25C24.15 26.25 22.2906 26.5125 20.6719 27.0375C19.0531 27.5625 17.7188 28.0875 16.6687 28.6125C16.3771 28.7583 16.151 28.9698 15.9906 29.2469C15.8302 29.524 15.75 29.8229 15.75 30.1437V31.5H28.3062C28.7437 32.2583 29.2833 32.9292 29.925 33.5125C30.5667 34.0958 31.2812 34.5917 32.0687 35H12.25Z" fill="white"></path>
                </g>
              </svg>
            </span>
            For Interpreters
          </a>
        </div>
        
        {/* Image Sections */}
        <div className="flex justify-center w-full mt-2">
          <img 
            className="object-contain" 
            src={MoliProduct} 
            alt="Moli platform illustration" 
            style={{ width: "40%" }}
          />
        </div>
      </div>
      <div className="flex justify-center w-full mt-2">
          <img 
            className="object-contain" 
            src={AppStore} 
            alt="Moli platform illustration" 
            style={{ width: "40%" }}
          />
        </div>
     <DownloadSection />

      {/* Features Section */}
      <div className="bg-gradient-to-br from-blue-50 p-6 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="mb-6 text-center lg:text-left">
              <div className="relative inline-flex items-center mb-3">
                <div className="absolute -left-1 w-3 h-full bg-amber-600 rounded-l-full"></div>
                <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 pl-5 pr-6">
                  <span className="text-amber-800 font-bold text-lg">MaaP</span>
                  <span className="text-amber-600 font-medium text-lg">Moli as a Platform</span>
                  <div className="absolute -right-3 w-0 h-0 border-t-[12px] border-t-transparent border-l-[12px] border-l-amber-100 border-b-[12px] border-b-transparent"></div>
                </div>
              </div>
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
                  Empowering Communication <span className="text-yellow-500">Across Boundaries</span>
                </h2>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-yellow-500"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="text-yellow-400 mr-2">★</span>
                    <span className="whitespace-nowrap">Improved Communication</span>
                  </h3>
                </div>
                <p className="text-gray-600 text-lg pl-11">
                  Facilitates effective communication between non-English-speaking individuals and the court, ensuring that all parties involved can clearly understand and participate in legal proceedings.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="text-yellow-400 mr-2">★</span>
                    Increased Access to Justice
                  </h3>
                </div>
                <p className="text-gray-600 text-lg pl-11">
                  Promotes equal access to justice for individuals with limited English proficiency, ensuring they can fully understand and participate in legal processes. Helps eliminate language barriers that may otherwise impede the fair administration of justice.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="text-yellow-400 h-8 mr-2">★</span>
                    Accurate Interpreter Matching
                  </h3>
                </div>
                <p className="text-gray-600 text-lg pl-11">
                  Utilizes a centralized database to match the right interpreter with the specific language needs and legal context of a case, ensuring accuracy and cultural competency.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img 
              className="w-full max-w-md lg:max-w-none object-contain animate-float" 
              src={Court11}
              alt="Translator" 
            />
          </div>
        </div>

        {/* Know More Button */}
        <div className="flex justify-center mt-6 sm:mt-4">
          <button 
            onClick={toggleDetails}
            className="flex justify-center items-center font-bold font-['Open Sans'] rounded gap-2 px-4 py-2 border-1 text-center bg-[#2FC6A2] text-[#ffff] hover:bg-[#28b392] transition-colors"
          >
            {showDetails ? 'Show Less' : 'Know More'}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M3.75575 15.7422C3.75575 15.3444 3.91379 14.9629 4.1951 14.6816C4.4764 14.4003 4.85793 14.2422 5.25575 14.2422L22.8298 14.2422L16.2558 8.36024C15.9619 8.09431 15.7852 7.7229 15.7643 7.32714C15.7434 6.93137 15.88 6.54342 16.1442 6.24803C16.4084 5.95264 16.7788 5.77382 17.1745 5.75062C17.5701 5.72743 17.9588 5.86174 18.2558 6.12424L27.7558 14.6242C27.9134 14.7649 28.0395 14.9374 28.1258 15.1302C28.2122 15.323 28.2568 15.5319 28.2568 15.7432C28.2568 15.9545 28.2122 16.1634 28.1258 16.3563C28.0395 16.5491 27.9134 16.7215 27.7558 16.8622L18.2558 25.3622C18.1092 25.4949 17.9378 25.5973 17.7515 25.6635C17.5652 25.7297 17.3676 25.7584 17.1702 25.748C16.9727 25.7375 16.7793 25.6882 16.601 25.6027C16.4227 25.5173 16.2631 25.3974 16.1312 25.2501C15.9994 25.1027 15.898 24.9307 15.8329 24.744C15.7678 24.5574 15.7403 24.3596 15.7518 24.1623C15.7634 23.9649 15.8139 23.7717 15.9004 23.5939C15.9868 23.4161 16.1076 23.2572 16.2558 23.1262L22.8298 17.2422H5.25575C4.85793 17.2422 4.4764 17.0842 4.1951 16.8029C3.91379 16.5216 3.75575 16.1401 3.75575 15.7422Z" fill="white"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Platform Details - conditionally rendered */}
      {showDetails && <PlatformDetails />}
      <Features />
      <ThreeStepsSection />
      <MoliTutorials />
      <DownloadsMoli />
    </div>
  );
};

export default MoliProductPage;
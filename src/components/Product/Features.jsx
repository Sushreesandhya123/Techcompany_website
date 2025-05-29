import React, { useState } from "react";
import key1 from '../../assets/key1.jpg';
import key2 from '../../assets/key4.png';
import key5 from '../../assets/key5.jpg';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';
import feature3 from '../../assets/feature3.png';
import feature4 from '../../assets/feature4.png';
import feature5 from '../../assets/feature5.png';
import feature6 from '../../assets/feature6.png';
import feature7 from '../../assets/feature7.png';

const Features = () => {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  const toggleMoreFeatures = () => {
    setShowMoreFeatures(!showMoreFeatures);
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#F8F9FA] py-12 px-4 sm:px-6 lg:px-8 mt-0">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-5 relative ">
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-['Open Sans']">
            How <span className="text-[#2FC6A2]">Moli</span> Works
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H116C118.209 0 120 1.79086 120 4C120 6.20914 118.209 8 116 8H4C1.79086 8 0 6.20914 0 4Z" fill="#2FC6A2"/>
            </svg>
          </div>
        </div>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the power of AI-driven language interpretation management
        </p>
      </div>

      {/* Video Showcase */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300" style={{ height: '500px' }}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/v6UWhEWCvfY?si=k8YHKg6s_ahLx3bM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                className="w-full"
                src={key5}
                alt="Moli app interface"
              />
              <div className="absolute -top-6 -left-6 -z-10">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z" fill="#FF543E" fillOpacity="0.1"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Awesome Features Powered by{" "}
                <span className="text-[#FF543E]">AI</span>
              </h2>
              <div className="w-20 h-1 bg-[#FF543E] mb-4"></div>
              <h3 className="text-2xl font-semibold text-[#002E44]">
                Revolutionizing Language Interpreter Management
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#2FC6A2] bg-opacity-20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#2FC6A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Real-Time Availability Tracking</h4>
                  <p className="text-gray-600 text-lg mt-2">
                    Keep tabs on your interpreter team's availability in real-time. Moli provides instant visibility into interpreters' schedules, allowing you to make informed decisions and respond promptly to service requests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#2FC6A2] bg-opacity-20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#2FC6A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Automated Scheduling</h4>
                  <p className="text-gray-600 text-lg mt-2">
                    Say goodbye to manual scheduling headaches. Moli's intelligent scheduling system automates the process, matching interpreters with appointments based on their skills, availability, and location, ensuring optimal resource utilization.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#2FC6A2] bg-opacity-20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#2FC6A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Skill Matching Algorithm</h4>
                  <p className="text-gray-600 text-lg mt-2">
                    Moli employs a sophisticated algorithm that matches interpreters with assignments based on their language expertise and specialization. This ensures that each assignment is handled by the most qualified professional.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button 
                onClick={toggleMoreFeatures}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2FC6A2] to-[#1E9C81] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {showMoreFeatures ? 'Show Less' : 'Know More'}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features Section - Shows when "Know More" is clicked */}
        {showMoreFeatures && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 md:mb-0 gap-4 mx-8 lg:mt-10 md:px-20 md:py-8">
              <div className="bg-[#E5F7FF] flex flex-col space-y-3 items-center border-0 rounded-xl pt-4">
                <img className="object-contain" src={feature1} alt="Centralized Database" />
                <div className="px-12 space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-xl">
                    Centralized Interpreter Database
                  </h3>
                  <p className="text-gray-500 text-lg pb-3">
                    Moli acts as the centralized hub for managing your interpreter
                    network. Store, organize, and access crucial information about
                    interpreters, including their language proficiency, certifications,
                    and availability.
                  </p>
                </div>
              </div>
              <div className="bg-[#E5F7FF] flex flex-col space-y-3 items-center border-0 rounded-xl pt-4">
                <img className="object-contain" src={feature2} alt="Client Portals" />
                <div className="px-12 space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-xl pt-6">
                    Client and Interpreter Portals
                  </h3>
                  <p className="text-gray-500 text-lg">
                    Enhance communication and streamline interactions. Moli offers
                    dedicated portals for both clients and interpreters, allowing them
                    to access schedules, update availability, and communicate
                    seamlessly.
                  </p>
                </div>
              </div>
              <div className="bg-[#E5F7FF] flex flex-col space-y-3 items-center border-0 rounded-xl pt-4">
                <img className="object-contain" src={feature3} alt="Billing Integration" />
                <div className="px-12 space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-xl pt-6">
                    Billing and Invoicing Integration
                  </h3>
                  <p className="text-gray-500 text-lg">
                    Simplify financial transactions with Moli's integrated billing and
                    invoicing system. Keep track of interpreter services, generate
                    invoices, and manage payments efficiently.
                  </p>
                </div>
              </div>
              <div className="bg-[#E5F7FF] flex flex-col space-y-3 items-center border-0 rounded-xl pt-4">
                <img className="object-contain" src={feature4} alt="Subscription Plans" />
                <div className="px-12 space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-xl">
                    Flexible Subscription Plans
                  </h3>
                  <p className="text-gray-500 text-lg">
                    Moli understands that communication needs vary. Choose from flexible
                    subscription plans tailored to your usage requirements, ensuring
                    that you only pay for the services you need.
                  </p>
                </div>
              </div>
              <div className="bg-[#E5F7FF] flex flex-col space-y-3 items-center border-0 rounded-xl pt-4">
                <img className="object-contain" src={feature5} alt="User Interface" />
                <div className="px-12 space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-xl">
                    User-Friendly Interface
                  </h3>
                  <p className="text-gray-500 text-lg pb-3">
                    Moli's intuitive interface makes language interpretation simple and
                    accessible. Whether you're a seasoned professional or a first-time
                    user, Moli's design prioritizes user-friendliness without
                    compromising on functionality.
                  </p>
                </div>
              </div>
              <div className="bg-[#E5F7FF] flex flex-col space-y-3 items-center border-0 rounded-xl pt-4">
                <img className="object-contain" src={feature6} alt="Customer Support" />
                <div className="px-12 space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-xl pt-4">
                    24/7 Customer Support
                  </h3>
                  <p className="text-gray-500 text-lg">
                    Have questions or need assistance? Our dedicated customer support
                    team is available 24/7 to provide you with the help you need,
                    ensuring a smooth and reliable experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-[#F8F9FA] to-white py-12 px-6 lg:px-16 rounded-3xl overflow-hidden">
  {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2FC6A2] opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF543E] opacity-10 rounded-full -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            {/* Left column - Features */}
            <div className="md:w-1/2 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
                Powerful Features <span className="text-[#2FC6A2]">Designed</span> For You
            </h3>
            
            {/* Feature cards */}
            <div className="space-y-6">
                {/* Feature 1 */}
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#2FC6A2]">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-2 bg-[#2FC6A2] bg-opacity-20 rounded-lg">
                    <svg className="w-6 h-6 text-[#2FC6A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 ">Comprehensive Reporting Tools</h4>
                    <p className="text-gray-600 text-lg">
                        Gain valuable insights into your interpreter management processes. 
                        Moli provides robust reporting tools to analyze data, track metrics, 
                        and optimize your language services.
                    </p>
                    </div>
                </div>
                </div>
                
                {/* Feature 2 */}
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#FF543E]">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-2 bg-[#FF543E] bg-opacity-20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FF543E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Scalable and Customizable</h4>
                    <p className="text-gray-600 text-lg">
                        Whether small agency or large enterprise, Moli scales to meet your needs. 
                        Customize the software to align with your workflow for seamless integration.
                    </p>
                    </div>
                </div>
                </div>
                
                {/* Feature 3 */}
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#1E9C81]">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-2 bg-[#1E9C81] bg-opacity-20 rounded-lg">
                    <svg className="w-6 h-6 text-[#1E9C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Secure and Confidential</h4>
                    <p className="text-gray-600 text-lg">
                        Your conversations are important. Moli employs state-of-the-art security 
                        measures to protect your data, ensuring a secure platform for sensitive discussions.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            {/* Right column - Image */}
            <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                className="w-full h-auto object-cover transition-all duration-500 hover:scale-105" 
                src={feature7} 
                alt="Moli features dashboard" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                <div className="text-3xl font-bold text-[#2FC6A2]">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
                </div>
            </div>
            </div>
        </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Features;
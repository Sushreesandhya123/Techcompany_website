import React from 'react';
import download1 from '../../assets/download1.png';
import download2 from '../../assets/download2.png';
import download3 from '../../assets/download3.png';

const DownloadsMoli = () => {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-b from-[#f0f9ff] to-white">
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#009EF9] opacity-10 blur-xl"></div>
      <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-[#4CAF50] opacity-10 blur-xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002E44] mb-4">
            Get Moli App
          </h2>
          <div className="relative inline-block">
            <p className="text-xl md:text-2xl text-[#009EF9] font-medium">
              Download and install for your device
            </p>
            <svg 
              className="absolute -bottom-3 left-0 w-full h-3 text-[#009EF9]" 
              viewBox="0 0 200 20"
            >
              <path 
                d="M0,10 Q50,5 100,10 T200,10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* iOS Card */}
          <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-xl border border-[#E5F7FF]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#009EF9] to-[#002E44] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E5F7FF] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#009EF9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#009EF9] mb-4">iOS</h3>
              <img src={download1} alt="iOS" className="h-40 object-contain mb-6" />
              <a
                href="https://apps.apple.com/us/app/moli-app/id6479742909"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#009EF9] text-white font-medium transition-all duration-300 hover:bg-[#0077cc] hover:shadow-lg transform hover:scale-105 inline-flex items-center"
              >
                Download
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Android Card */}
          <div className="group relative bg-white rounded-2xl  overflow-hidden transition-all duration-300 shadow-xl border border-[#E5F7FF]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#164E86] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E5F7FF] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#4CAF50]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1699 1.0989L4.8078 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.8347 11.0274 1 14.7589 1 18.7614c0 .138.1119.25.25.25h21.5c.1381 0 .25-.112.25-.25 0-4.0025-1.8347-7.734-5.1225-10.44"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Android</h3>
              <img src={download2} alt="Android" className="h-40 object-contain mb-6" />
              <a
                href="https://play.google.com/store/apps/details?id=com.juvvaltech.moli"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#4CAF50] text-white font-medium transition-all duration-300 hover:bg-[#3d8b40] hover:shadow-lg transform hover:scale-105 inline-flex items-center"
              >
                Download
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Windows Card */}
          <div className="group relative bg-white rounded-2xl  overflow-hidden transition-all duration-300 shadow-xl border border-[#E5F7FF]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#164E86] to-[#002E44] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E5F7FF] flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#164E86]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#164E86] mb-4">Microsoft Store</h3>
              <img src={download3} alt="Microsoft" className="h-40 object-contain mb-6" />
              <a
                href="https://www.microsoft.com/store/productId/9NZKMQRD07L8?ocid=pdpshare"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#164E86] text-white font-medium transition-all duration-300 hover:bg-[#0d3a6b] hover:shadow-lg transform hover:scale-105 inline-flex items-center"
              >
                Download
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        {/* <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 text-sm">QR Code Placeholder</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#002E44] mb-4">Scan to Download</h3>
              <p className="text-gray-600 mb-6">
                Point your phone camera at the QR code to download the Moli app directly to your device.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-[#E5F7FF] text-[#009EF9] rounded-full text-sm">iOS</span>
                <span className="px-3 py-1 bg-[#E5F7FF] text-[#4CAF50] rounded-full text-sm">Android</span>
                <span className="px-3 py-1 bg-[#E5F7FF] text-[#164E86] rounded-full text-sm">Windows</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DownloadsMoli;
import React from 'react';
import { useState } from 'react';
import AIImg from '../assets/EventGallery/AITeerp.jpg';
import ProductImg from '../assets/EventGallery/productEventt.webp';
import TeamImg from '../assets/EventGallery/teambuilding.jpg';
import AnnualImg from '../assets/EventGallery/AnnualMeetup.png';
import lunchImg from '../assets/EventGallery/20230912-DSCF4169.webp';
import logomoli from '../assets/EventGallery/moli.jpg';
import kululogo from '../assets/EventGallery/kulu.jpg';
import network from '../assets/EventGallery/networking.webp';

const EventGallery = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const mediaItems = [
    { 
      type: 'image', 
      url: AnnualImg,
      text: "Tech Conference 2023"
    },
    { 
      type: 'image', 
      url: lunchImg,
      text: "Product Launch Event"
    },
    { 
      type: 'video', 
      url: "https://civiqdevcirgb380.blob.core.windows.net/juvvaltech-web-video/Moli - Introduction .mp4", 
      thumbnail: logomoli,
      text: "Moli Released"
    },
    { 
      type: 'image', 
      url: TeamImg,
      text: "Team Building Workshop"
    },
    { 
      type: 'image', 
      url: network,
      text: "Business Networking"
    },
    { 
      type: 'video', 
      url: "https://civiqdevcirgb380.blob.core.windows.net/juvvaltech-web-video/Kulu - Teaser v1_0.mp4", 
      thumbnail: kululogo,
      text: "Kulu Teaser Video"
    },
    { 
      type: 'image', 
      url: ProductImg,
      text: "Annual Meetup"
    },
    { 
      type: 'video', 
      url: "https://civiqdevcirgb380.blob.core.windows.net/juvvaltech-web-video/AI Terp - Teaser.mp4", 
      thumbnail: AIImg,
      text: "AI Terp Demo"
    }
  ];

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo('');
  };

  return (
    <div className="bg-white pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Event & Gallery
            </span>
            <span className="absolute inset-0 text-transparent stroke-2 stroke-black opacity-20">
              Event & Gallery
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our innovative solutions transforming legal and judicial processes through technology.
          </p>
        </div>
        
        {/* First Row */}
        <div className="flex justify-center w-full mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {mediaItems.slice(0, 3).map((item, index) => (
              <div key={index} className="w-full h-64 overflow-hidden rounded-lg shadow-lg relative group transition-all duration-300 hover:shadow-xl">
                {item.type === 'image' ? (
                  <>
                    <img 
                      src={item.url} 
                      alt="Gallery" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                      <button 
                        onClick={() => openVideoModal(item.url)}
                        className="self-center mb-4 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
            {/* First column - single item */}
            <div className="md:col-span-1 h-64 overflow-hidden rounded-lg shadow-lg relative group transition-all duration-300 hover:shadow-xl">
              {mediaItems[3].type === 'image' ? (
                <>
                  <img 
                    src={mediaItems[3].url} 
                    alt="Gallery" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">{mediaItems[3].text}</h3>
                  </div>
                </>
              ) : (
                <div className="relative w-full h-full">
                  <img 
                    src={mediaItems[3].thumbnail} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-4">
                    <h3 className="text-white text-lg font-semibold">{mediaItems[3].text}</h3>
                    <button 
                      onClick={() => openVideoModal(mediaItems[3].url)}
                      className="self-center mb-4 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Second column - nested items */}
            <div className="md:col-span-1 flex flex-col gap-4">
              {mediaItems.slice(4, 6).map((item, index) => (
                <div key={index} className="h-[calc(128px-0.5rem)] overflow-hidden shadow-lg relative group rounded-lg">
                  {item.type === 'image' ? (
                    <>
                      <img 
                        src={item.url} 
                        alt="Gallery" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                        <h3 className="text-white text-sm font-semibold">{item.text}</h3>
                      </div>
                    </>
                  ) : (
                    <div className="relative w-full h-full">
                      <img 
                        src={item.thumbnail} 
                        alt="Video thumbnail" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-2">
                        <h3 className="text-white text-sm font-semibold">{item.text}</h3>
                        <button 
                          onClick={() => openVideoModal(item.url)}
                          className="self-center mb-2 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                        >
                          <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Third and fourth columns */}
            {mediaItems.slice(6, 8).map((item, index) => (
              <div key={index} className="md:col-span-1 h-64 overflow-hidden rounded-lg shadow-lg relative group transition-all duration-300 hover:shadow-xl">
                {item.type === 'image' ? (
                  <>
                    <img 
                      src={item.url} 
                      alt="Gallery" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                      <button 
                        onClick={() => openVideoModal(item.url)}
                        className="self-center mb-4 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={currentVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventGallery;
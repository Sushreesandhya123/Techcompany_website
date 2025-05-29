import React from 'react';
import { useState } from 'react';
import moliiVideo from '../assets/Moli - Introduction .mp4';
import KuluVideo from '../assets/Kulu - Teaser v1_0.mp4';
import AITerpVideo from '../assets/AI Terp - Teaser.mp4';

const EventGallery = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const mediaItems = [
    { 
      type: 'image', 
      url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Tech Conference 2023"
    },
    { 
      type: 'image', 
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Product Launch Event"
    },
    { 
      type: 'video', 
      url: moliiVideo, 
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Moli Released"
    },
    { 
      type: 'image', 
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Team Building Workshop"
    },
    { 
      type: 'image', 
      url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Business Networking"
    },
    { 
      type: 'video', 
      url: KuluVideo, 
      thumbnail: "https://images.unsplash.com/photo-1581092921461-39b2f2f8d4f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Kulu Teaser Video"
    },
    { 
      type: 'image', 
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      text: "Annual Meetup"
    },
    { 
      type: 'video', 
      url: AITerpVideo, 
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    <div className="container bg-white pb-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Transparent text effect */}
        <h2 className="text-4xl font-bold mb-4 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Event & Gallery
          </span>
          <span className="absolute inset-0 text-transparent stroke-2 stroke-black opacity-20">
            Event & Gallery
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto pb-4">
            Explore our innovative solutions transforming legal and judicial processes through technology.
          </p>
        
        {/* First Row - 3 columns */}
        <div className="flex">
          {mediaItems.slice(0, 3).map((item, index) => (
            <div key={index} className="w-1/3 px-2">
              <div className="h-64 overflow-hidden shadow-lg relative group">
                {item.type === 'image' ? (
                  <>
                    <img 
                      src={item.url} 
                      alt="Gallery" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                      <button 
                        onClick={() => openVideoModal(item.url)}
                        className="self-center mb-4 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - 4 columns with nested grid in 2nd column */}
        <div className="flex mt-4">
          {mediaItems.slice(3, 4).map((item, index) => (
            <div key={index} className="w-1/4 px-2">
              <div className="h-64 overflow-hidden shadow-lg relative group">
                {item.type === 'image' ? (
                  <>
                    <img 
                      src={item.url} 
                      alt="Gallery" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                      <button 
                        onClick={() => openVideoModal(item.url)}
                        className="self-center mb-4 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="w-1/4 px-2">
            <div className="flex flex-col h-full">
              {mediaItems.slice(4, 6).map((item, index) => (
                <div key={index} className={`h-1/2 overflow-hidden shadow-lg relative group ${index === 0 ? 'mb-2' : ''}`}>
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
          </div>
          
          {mediaItems.slice(6, 8).map((item, index) => (
            <div key={index} className="w-1/4 px-2">
              <div className="h-64 overflow-hidden shadow-lg relative group">
                {item.type === 'image' ? (
                  <>
                    <img 
                      src={item.url} 
                      alt="Gallery" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                      <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                      <button 
                        onClick={() => openVideoModal(item.url)}
                        className="self-center mb-4 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={closeVideoModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                className="w-full rounded-lg"
                controls
                autoPlay
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventGallery;
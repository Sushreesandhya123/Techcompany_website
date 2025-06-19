import React, { useState } from 'react';
import FeatureSlide from './FeatureSlide';
import CallToActions from './CallToActions';
import { FaGlobe, FaLanguage, FaComments, FaBalanceScale, FaRobot } from 'react-icons/fa';

// Import images
import networkImg from '../../assets/network2.png';
import languageImg from '../../assets/language.png';
import livechatImg from '../../assets/livechart.png';
import juryManagementImg from '../../assets/juryManagement.png';
import AiterpImg from '../../assets/ai terp.png'
const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Large Interpreter Network"
    },
    {
      icon: <FaLanguage className="w-6 h-6" />,
      title: "45 Active Languages/Day"
    },
    {
      icon: <FaComments className="w-6 h-6" />,
      title: "Live Chat"
    },
    {
      icon: <FaBalanceScale className="w-6 h-6" />,
      title: "Jury Management"
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "AI-Terp"
    }
  ];

  const slides = [
    {
    title: "Large Interpreter Network",
    subtitle: "Connect with the largest legal interpreter network",
     description: "Access our vast network of certified interpreters available across multiple jurisdictions. With Moli, you'll never face delays due to interpreter shortages. Our extensive database ensures you get the right professional for every case, every time.",
    features: [
      "5000+ certified interpreters",
      "Nationwide coverage",
      "24/7 availability",
      "Specialized legal terminology experts"
    ],
    imageSrc: networkImg,
    imageAlt: "Interpreter network illustration",
    // Specific styling for this image
  },
    {
      title: "45 Active Languages/Day",
      subtitle: "Comprehensive language coverage for all cases",
      description: "From common languages to rare dialects, our platform supports 45+ active languages daily. We maintain constant availability for critical languages used in legal proceedings, ensuring justice is never lost in translation.",
      features: [
        "45+ languages available daily",
        "Rare dialects and sign language",
        "Real-time language availability tracking",
        "Certified court interpreters"
      ],
      imageSrc: languageImg,
      imageAlt: "Multiple languages illustration"
    },
    {
      title: "Live Chat",
      subtitle: "Instant communication for urgent legal needs",
      description: "Our real-time chat system connects courts with interpreters instantly. Coordinate last-minute changes, clarify case details, or get immediate assistance - all within our secure, encrypted platform designed for legal professionals.",
      features: [
        "Secure encrypted messaging",
        "Instant interpreter connection",
        "File and document sharing",
        "Chat history preservation"
      ],
      imageSrc: livechatImg,
      imageAlt: "Live chat feature illustration"
    },
    {
      title: "Jury Management",
      subtitle: "Streamlined interpreter coordination for jury proceedings",
      description: "Efficiently manage interpreters for jury selection and trials with our specialized tools. Track assignments, monitor progress, and ensure seamless communication between all parties involved in the judicial process.",
      features: [
        "Jury-specific interpreter matching",
        "Real-time status updates",
        "Confidentiality compliance",
        "Automated notifications"
      ],
      imageSrc: juryManagementImg,
      imageAlt: "Jury management system illustration"
    },
    {
      title: "AI-Terp",
      subtitle: "When human interpreters aren't available",
      description: "Our advanced AI interpreter provides immediate translation support for emergencies or after-hours needs. While not replacing human interpreters, AI-Terp ensures proceedings can continue when immediate human translation isn't possible.",
      features: [
        "Instant translation support",
        "20+ core legal languages",
        "Basic terminology recognition",
        "Emergency backup solution"
      ],
      imageSrc: AiterpImg,
      imageAlt: "AI interpreter technology illustration"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            JuvvalTech is where justice moves.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Court systems face complexity every day. With JuvvalTech, justice workflows are streamlined, secure, and smart. Build, connect, and modernize your courtroom operations—so justice moves faster, smoother, and more efficiently.
          </p>
        </div>

        <div className="mb-8 relative">
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex mx-auto relative">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`flex items-center px-6 py-3 rounded-lg transition-all relative z-10 ${
                      activeTab === index 
                        ? 'text-gray-900 font-medium' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`transition-all ${activeTab === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}>
                        {tab.icon}
                      </div>
                      <p className="text-sm whitespace-nowrap">{tab.title}</p>
                    </div>
                    {activeTab === index && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[500px]">
          {slides.map((slide, index) => (
            <FeatureSlide
              key={index}
              {...slide}
              isActive={activeTab === index}
            />
          ))}
        </div>

        <CallToActions />
      </div>
    </section>
  );
};

export default FeaturesSection;
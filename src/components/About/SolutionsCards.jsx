import React from 'react';
import moliImg from '../../assets/language.png';
import kuluImg from '../../assets/image (16).png';
import aiTerpImg from '../../assets/ai terp.png';
import RequestDemoButton from '../RequestDemoButton'; // Adjust path if needed

const cards = [
    {
    title: "Moli - Interpreture Scheduling Software",
    description: "Moli revolutionizes legal interpretation and court efficiency through AI-powered scheduling, real-time interpreter management, and seamless communication tools. From assigning jobs to managing invoices, Moli ensures courts operate faster, smarter, and more transparently.",
    extra: "With AI Terp, experience real-time interpretation when human interpreters aren't available — ensuring no hearing is ever delayed.",
    button: "Request Demo",
    learnMore: "Learn more",
    href: "https://www.mymoliapp.com/",
    image: moliImg
  },

  {
  title: 'Kulu - Smarter Jury Management for Courts',
  description:
    'Kulu is a smart jury management platform that streamlines the entire jury selection process with tools for summons, tracking, and finalization—designed to improve efficiency, transparency, and compliance for courts at all levels.',
  extra:
    'Empowering federal, state, and local courts with intuitive tools to simplify operations, enhance transparency, and ensure fairness in jury selection.',
  button: 'Request Demo',
  learnMore: 'Learn more',
  href: '#',
  image: kuluImg,
},

  {
  title: "AI Terp - Interpretation Without Limits",
  description: "AI-Terp is Moli's built-in AI interpreter, delivering real-time multilingual translation when human interpreters are unavailable. It ensures hearings continue smoothly, breaking down language barriers instantly and accurately.",
  extra: "With support for multiple languages and seamless court integration, AI-Terp keeps justice accessible and uninterrupted.",
  button: "See AI-Terp in Action",
  learnMore: "Learn more",
  href: "#",
  image: aiTerpImg
}

];

const SolutionsCards = () => {
  const handleDemoClick = () => {
    // Add your click logic here, e.g. open modal or route to demo form
    alert('Demo requested!');
  };

  return (
    <section className="py-16 px-6 space-y-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="max-w-7xl mx-auto rounded-2xl bg-[#f2f5fa] md:flex md:items-center md:justify-between shadow-lg overflow-hidden p-8"
        >
          <div className="md:flex md:items-center w-full flex-col md:flex-row">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="text-green-600">
                  {card.title.split('-')[0].trim()}
                </span>{' '}
                - {card.title.split('-')[1].trim()}
              </h2>
              <p className="text-gray-700">{card.description}</p>
              <p className="text-gray-700">{card.extra}</p>

              <div className="flex items-center gap-6 mt-4">
                <RequestDemoButton onClick={handleDemoClick} />

                <a
                  href={card.href}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                >
                  {card.learnMore}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 13L15 8L10 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="14"
                      y1="8"
                      x2="0"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={card.image}
                alt="Solution Visual"
                className="w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SolutionsCards;
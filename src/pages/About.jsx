import React from 'react';
import AvtarImg from '../assets/user.png';
import Clients from '../assets/ClientImg.jpg';
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Hero Section - Parallax Effect */}
      <section className="relative bg-[#0A2463] text-white py-32 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="w-full text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat animate-fadeIn">
            A Trusted Partner in Legal Tech
          </h1>
          <p className="text-xl md:text-2xl mx-auto text-[#DAA520] animate-fadeIn delay-100 max-w-3xl">
           For years, Juvvaltech has empowered U.S. courts with reliable, purpose-built tools like MOLI and Kulu, enhancing interpretation and jury processes.
          </p>
          <div className="mt-12 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#DAA520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-16 px-4">
       
        {/* Our Story - Timeline Design */}
          <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#0A2463] font-montserrat text-center">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#DAA520]"></span>
              Our Story
            </span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-[#0A2463] transform -translate-x-1/2"></div>
            
            {/* Timeline item 1 - Juvvaltech founded */}
            <div className="mb-5 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#0A2463] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-[#0A2463]">JuvvalTech Founded</h3>
                <p className="text-lg">
                  Established with a vision to bridge communication gaps in legal systems through technology. 
                  Our mission: make legal proceedings accessible to all, regardless of language barriers.
                </p>
                <p className="text-sm text-gray-500 mt-2">January 2022</p>
              </div>
            </div>

            {/* Timeline item 2 - Moli released */}
            <div className="mb-5 flex justify-between items-center w-full">
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-[#0A2463]">Moli Released</h3>
                <p className="text-lg">
                  Our flagship interpretation management platform launched, revolutionizing how courts handle multilingual cases. 
                  Featuring automated scheduling, real-time tracking, and comprehensive reporting tools.
                </p>
                <p className="text-sm text-gray-500 mt-2">March 2023</p>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#DAA520] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div className="order-1 w-5/12"></div>
            </div>

            {/* Timeline item 3 - First customer onboarded */}
            <div className="mb-5 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#0A2463] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-[#0A2463]">First Customer Onboarded</h3>
                <p className="text-lg">
                  Tukwila Municipal Court became our first client, marking the beginning of our journey to transform 
                  court interpretation services. This partnership validated our solution in a real-world legal setting.
                </p>
                <p className="text-sm text-gray-500 mt-2">May 2023</p>
              </div>
            </div>

            {/* Timeline item 4 - Kulu envisioned */}
            <div className="mb-5 flex justify-between items-center w-full">
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-[#0A2463]">Kulu Envisioned</h3>
                <p className="text-lg">
                  Conceptualized our next innovation - Kulu, designed to expand our capabilities beyond interpretation 
                  into comprehensive legal workflow solutions and knowledge management.
                </p>
                <p className="text-sm text-gray-500 mt-2">June 2023</p>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#DAA520] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div className="order-1 w-5/12"></div>
            </div>

            {/* Timeline item 5 - Introduced AI Terp */}
            <div className="mb-5 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#0A2463] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="text-xl font-bold mb-2 text-[#0A2463]">AI Terp Introduced</h3>
                <p className="text-lg">
                  Launched our AI-powered interpreter feature within Moli, providing real-time translations when human 
                  interpreters are unavailable. Supporting multiple languages to ensure uninterrupted legal proceedings.
                </p>
                <p className="text-sm text-gray-500 mt-2">February 2024</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#0A2463] font-montserrat text-center">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#DAA520]"></span>
              Why We're Different
            </span>
          </h2>
          <p className="text-lg mb-12 mx-auto text-center max-w-3xl">
            Pioneering solutions for modern court operations:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-[#0A2463]">
              <div className="bg-[#0A2463] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A2463] text-center">Modern and Cross-Platform Applications for Court Operations</h3>
              <p className="text-sm text-center">We build seamless, responsive applications that work across all devices to streamline court operations and interpreter management.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-[#DAA520]">
              <div className="bg-[#DAA520] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A2463] text-center">Active Interpreter Network</h3>
              <p className="text-sm text-center">Our platform connects courts with a vast network of certified interpreters, ensuring language access is never a barrier to justice.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-[#5EB1BF]">
              <div className="bg-[#5EB1BF] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A2463] text-center">Specialized in Developing Solutions for American Courts</h3>
              <p className="text-sm text-center">Our solutions are specifically designed to meet the unique needs and compliance requirements of the American judicial system.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-[#3A86FF]">
              <div className="bg-[#3A86FF] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A2463] text-center">First in Introducing AI into American Court Operations</h3>
              <p className="text-sm text-center">We pioneered the integration of AI (like our AI Terp) into court operations, setting new standards for efficiency and accessibility.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl border-b-4 border-[#FF006E]">
              <div className="bg-[#FF006E] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0A2463] text-center">Flexible Payment Plans</h3>
              <p className="text-sm text-center">We offer adaptable subscription models to fit various court budgets, ensuring access to justice technology at every level.</p>
            </div>
          </div>
        </section>

        {/* By the Numbers - Animated Counter */}
        <section className="mb-20 bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] text-white p-12 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center px-4">
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2 text-[#DAA520] animate-count" data-target="50">12+</div>
              <div className="text-xl">clients served</div>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2 text-[#DAA520] animate-count" data-target="8">170+</div>
              <div className="text-xl">languages supported</div>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2 text-[#DAA520] animate-count" data-target="72">100%</div>
              <div className="text-xl">workflow efficiency improvement</div>
            </div>
          </div>
        </div>
      </section>

        {/* Our Team - Circular Profile Cards */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[#0A2463] font-montserrat text-center">
          <span className="relative inline-block">
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#DAA520]"></span>
              Leadership
          </span>
        </h2>
        <p className="text-center text-lg mb-12 mx-auto max-w-3xl">
          Meet the visionaries driving JuvvalTech's mission — leaders combining innovation, expertise, and passion.
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {/* Eduardo Zaldibar */}
          <div className="text-center group mx-4">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-0.5 border-[#0A2463] group-hover:border-[#DAA520] transition-all duration-300">
              <img src={Clients} alt="Eduardo Zaldibar" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-[#DAA520] transition-colors">Eduardo Zaldibar</h3>
            <p className="text-[#5EB1BF] mb-2">Chief Advisor</p>
          </div>

          {/* Vandana Paluri */}
          <div className="text-center group mx-4">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-0.5 border-[#0A2463] group-hover:border-[#DAA520] transition-all duration-300">
              <img src={AvtarImg} alt="Vandana Paluri" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-[#DAA520] transition-colors">Vandana Paluri</h3>
            <p className="text-[#5EB1BF] mb-2">Chief Operating Officer</p>
          </div>
        </div>
      </section>

        {/* New Client Testimonials Section */}
        <section className="mb-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-12 text-[#0A2463] font-montserrat text-center">
    <span className="relative inline-block">
      <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#DAA520]"></span>
      What Our Clients Say
    </span>
  </h2>
  <div className="grid md:grid-cols-2 gap-8 px-4">
    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0A2463] relative">
      <div className="absolute -top-4 -left-4 bg-[#DAA520] text-white rounded-full w-10 h-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <p className="text-lg italic mb-6">"JuvvalTech's solutions transformed our court operations. Their system streamlined our case management process, reducing paperwork by 60% and improving efficiency across all departments."</p>
      <div className="flex items-center">
        <img src={AvtarImg} alt="Nessa Valoaga" className="w-12 h-12 rounded-full bg-gray-300 mr-4 object-cover" />
        <div>
          <h4 className="font-bold text-[#0A2463]">Nessa Valoaga</h4>
          <p className="text-sm text-gray-600">Court Operations Supervisor, Tukwila Municipal Court</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#DAA520] relative">
      <div className="absolute -top-4 -left-4 bg-[#0A2463] text-white rounded-full w-10 h-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <p className="text-lg italic mb-6">"The implementation of JuvvalTech's system revolutionized how we handle court records. We've seen a 75% reduction in processing time and significantly improved accessibility for both staff and the public."</p>
      <div className="flex items-center">
        <img src={AvtarImg} alt="Kristi Schorn" className="w-12 h-12 rounded-full bg-gray-300 mr-4 object-cover" />
        <div>
          <h4 className="font-bold text-[#0A2463]">Kristi Schorn</h4>
          <p className="text-sm text-gray-600">Court Administrator, Issaquah Municipal Court</p>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8 text-center">
    <button className="px-6 py-3 bg-[#0A2463] text-white rounded-lg hover:bg-[#1E3A8A] transition-colors font-medium">
      Read More Success Stories
    </button>
  </div>
</section>

        {/* Looking Ahead - Accordion */}
        {/* <section className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#0A2463] font-montserrat text-center">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#DAA520]"></span>
              Looking Ahead
            </span>
          </h2>
          <p className="text-lg mb-8 text-center">
            As legal systems evolve, so do we. We're currently developing:
          </p>
          <div className="space-y-4">
            {[
              "Next-gen natural language processing for legal contexts",
              "Expanded multilingual support",
              "Predictive tools for case management",
              "AI-powered legal research assistants"
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer">
                  <h3 className="font-medium text-[#0A2463]">{item}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DAA520]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-4 bg-white hidden">
                  <p className="text-gray-600">More details about this initiative would appear here when expanded.</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default About;
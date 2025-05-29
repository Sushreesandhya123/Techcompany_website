import React from 'react';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';

const ThreeStepsSection = () => {
  return (
    <section className="py-2 md:py-2  bg-[#F8F9FA]">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Moli in <span className="text-blue-600">3 Simple Steps</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-2  rounded-full"></div>
          
          {/* Step 1 */}
          <div className="group relative z-10">
            <div className="relative bg-white rounded-xl overflow-hidden h-full border border-gray-100">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold border-4 border-white shadow-md">
                    1
                  </div>
                </div>
                <img className="w-full h-40 object-contain mb-6" src={step1} alt="Step 1" />
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  Courts Create Job Requirement
                </h3>
                <p className="text-gray-600 text-center text-lg">
                 Courts Create Jobs for the interpreters as per their requirements, detailing language preferences, dates, and times. Our user-friendly interface makes this step quick and straight forward.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="group relative z-10">
            <div className="relative bg-white rounded-xl overflow-hidden h-full border border-gray-100">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold border-4 border-white shadow-md">
                    2
                  </div>
                </div>
                <img className="w-full h-40 object-contain mb-6" src={step2} alt="Step 2" />
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  Interpreter Accepts or Declines
                </h3>
                <p className="text-gray-600 text-center text-lg">
                  Interpreters can effortlessly browse new job postings, filter them based on preferences, and accept or reject them with a single click. They can also stay updated in real-time on the status of their applied jobs.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="group relative z-10">
            <div className="relative bg-white rounded-xl overflow-hidden h-full border border-gray-100">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-2xl font-bold border-4 border-white shadow-md">
                    3
                  </div>
                </div>
                <img className="w-full h-40 object-contain mb-6" src={step3} alt="Step 3" />
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  Court & Interpreter Collaborate
                </h3>
                <p className="text-gray-600 text-center text-lg">
                 After applying for a job, interpreters and courts collaborate throughout the assignment. Upon completion, interpreters receive payment for their services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:scale-105 transform transition duration-300">
            Get Started Today
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ThreeStepsSection;
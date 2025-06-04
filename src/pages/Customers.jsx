import React from "react";
import Customerscards from '../pages/Customerscards';

const CustomerStories = () => {
  return (
    <main className="mt-6">
    <section className="bg-white">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-3xl font-bold ">Powering Growth for Global Innovators</h1>
        <p className="text-xl md:text-xl mb-2">
          Over 12+ organizations trust Juvvaltech to streamline their digital transformation journey.
        </p>
      </div>
    </div>
  </section>
 
 <Customerscards />
      
      {/* <section className="bg-white py-12 border-b">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Serving 120M+ Users with Confidence</h1>
      <p className="text-xl md:text-2xl mb-10">
        From local courts to national systems, customers choose JuvvalTech for speed, reliability, and innovation.
      </p>
    </div>
  </div>
</section> */}


  {/* <section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/2">
        <div className="bg-gray-200 h-96 rounded-xl overflow-hidden relative">
          <img 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb" 
                  alt="Court documents" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
            <div className="text-sm font-medium">Case Study</div>
            <h3 className="text-xl font-bold">New York City Family Court</h3>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section> */}


      {/* Video Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">In Their Own Words</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative pt-[56.25%] bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Courtroom" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">"Game-Changing Efficiency"</h3>
                <p className="text-gray-600 mb-4">
                  How Moli transformed interpreter management at Cook County Circuit Court
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson"/>
                  </div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Court Administrator</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative pt-[56.25%] bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" alt="Jury selection" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">"Jury Selection Revolutionized"</h3>
                <p className="text-gray-600 mb-4">
                  Kulu's impact on New York County Courts' jury management
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen"/>
                  </div>
                  <div>
                    <div className="font-medium">Michael Chen</div>
                    <div className="text-sm text-gray-500">Clerk of Court</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative pt-[56.25%] bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" alt="AI technology" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">"When Human Interpreters Aren't Enough"</h3>
                <p className="text-gray-600 mb-4">
                  How AI-Terp saved proceedings in Texas State Courts
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="David Martinez"/>
                  </div>
                  <div>
                    <div className="font-medium">David Martinez</div>
                    <div className="text-sm text-gray-500">Presiding Judge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">The JuvvalTech Impact</h2>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
      
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
            65%
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Faster Interpreter Scheduling</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Courts using Moli reduced interpreter scheduling time from days to hours, eliminating case delays due to language barriers.
        </p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Read Miami-Dade's story
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
            50%
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Reduced Jury Selection Time</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Kulu cut jury selection time in half for New York County Courts while improving demographic representation.
        </p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          See how they did it
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
            100%
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Case Continuity Achieved</h3>
        </div>
        <p className="text-gray-600 mb-4">
          AI-Terp ensured zero proceedings were delayed due to interpreter shortages in Cook County last quarter.
        </p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Watch the testimonial
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
            40%
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Administrative Cost Savings</h3>
        </div>
        <p className="text-gray-600 mb-4">
          LA Superior Court reduced interpreter program costs by 40% while improving service quality with Moli.
        </p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Read the case study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      
    </main>
  );
};

export default CustomerStories;
import React from "react";
import { FiRefreshCw, FiZap, FiSmile, FiCheckCircle, FiBarChart2, FiFileText, FiShield } from "react-icons/fi";
import key1 from '../../assets/key1.jpg';
import key2 from '../../assets/key2.jpg';
import key3 from '../../assets/key3.jpg';

const PlatformDetails = () => {
  return (
    <div className="font-['Open Sans'] bg-gradient-to-b from-blue-50 to-white">
      {/* Feature Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Platform <span className="text-blue-600">Advantages</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Flexibility */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FiRefreshCw className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3 flex items-center justify-center gap-2">
                <FiRefreshCw className="text-blue-500" />
                Flexibility and Adaptability
              </h3>
              <p className="text-gray-600 text-center text-lg">
                Adapts to changing language needs within the community, ensuring that the court remains responsive to demographic shifts and emerging language requirements.
              </p>
            </div>
            {/* <div className="bg-blue-50 px-6 py-4">
              <span className="text-blue-600 font-semibold flex items-center justify-center gap-1">
                Learn more <FiRefreshCw className="text-sm" />
              </span>
            </div> */}
          </div>
          
          {/* Card 2 - Efficiency */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FiZap className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3 flex items-center justify-center gap-2">
                <FiZap className="text-green-500" />
                Enhanced Efficiency
              </h3>
              <p className="text-gray-600 text-lg text-center ">
                Streamlines the process of finding and assigning language interpreters, reducing the time and effort required for manual coordination. Enables real-time scheduling and updates, minimizing delays in court proceedings.
              </p>
            </div>
            {/* <div className="bg-green-50 px-6 py-4">
              <span className="text-green-600 font-semibold flex items-center justify-center gap-1">
                Learn more <FiZap className="text-sm" />
              </span>
            </div> */}
          </div>
          
          {/* Card 3 - Satisfaction */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FiSmile className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3 flex items-center justify-center gap-2">
                <FiSmile className="text-purple-500" />
                User Satisfaction
              </h3>
              <p className="text-gray-600 text-lg text-center">
                Enhances the overall experience for court personnel, judges, attorneys, and interpreters by providing a user-friendly and efficient platform for managing language services.
              </p>
            </div>
            {/* <div className="bg-purple-50 px-6 py-4">
              <span className="text-purple-600 font-semibold flex items-center justify-center gap-1">
                Learn more <FiSmile className="text-sm" />
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <img 
                className="w-full h-auto " 
                src={key3} 
                alt="Platform illustration" 
            />
            </div>
          
          {/* Benefits List */}
          <div className="lg:w-1/2 w-full space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Key <span className="text-blue-600">Benefits</span>
            </h2>
            
            {/* Benefit 1 - Compliance */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FiCheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FiCheckCircle className="text-blue-500" />
                  Compliance with Legal Standards
                </h3>
                <p className="text-gray-600 text-lg">
                  Helps courts meet legal obligations, including compliance with federal and state laws that mandate language access for individuals with limited English proficiency. Mitigates the risk of legal challenges related to language access issues.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 - Data */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-green-100 p-3 rounded-full">
                  <FiBarChart2 className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FiBarChart2 className="text-green-500" />
                  Data-Driven Decision Making
                </h3>
                <p className="text-gray-600 text-lg">
                 Provides courts with valuable data on interpreter utilization, language demand, and case statistics, enabling informed decision-making for resource allocation and planning.
                </p>
              </div>
            </div>
            
            {/* Benefit 3 - Record Keeping */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FiFileText className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FiFileText className="text-purple-500" />
                  Enhanced Record-Keeping
                </h3>
                <p className="text-gray-600 text-lg">
                  The Software solution extends its strength to supply or synchronize monthly invoice/bills that are paid to Interpreters (as service providers) to AOC System. Improves the accuracy and completeness of records by documenting interpreter assignments and interactions, which can be crucial for legal documentation and potential appeals.utilizes a centralized database to match the right interpreter with the specific language needs and legal context of a case, ensuring accuracy and cultural competency.
                </p>
              </div>
            </div>
            
            {/* Benefit 4 - Errors */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FiShield className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FiShield className="text-yellow-500" />
                  Mitigation of Interpreting Errors
                </h3>
                <p className="text-gray-600 text-lg">
                 Utilizes a centralized database to match the right interpreter with the specific language needs and legal context of a case, ensuring accuracy and cultural competency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDetails;
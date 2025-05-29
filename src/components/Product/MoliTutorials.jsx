import React from "react";

const MoliTutorials = () => {
  const tutorials = [
    {
      title: "Sign up and Login",
      url: "https://www.youtube.com/embed/Qxq_hOR7uCY?si=VF9CyJ_7RUexhRKn"
    },
    {
      title: "Add language and certification",
      url: "https://www.youtube.com/embed/b4YHgzw_f9k?si=3yap1iRm3c4Gxn_A"
    },
    {
      title: "Accept and Decline job",
      url: "https://www.youtube.com/embed/0HbcpHru8ns?si=fc1deZ81PROLjrF9"
    },
    {
      title: "View calendar and Add event",
      url: "https://www.youtube.com/embed/D0LiuaCZ6FA?si=XUSVGnc4W-AEBjpL"
    },
    {
      title: "Upload W9 form for vendor number",
      url: "https://www.youtube.com/embed/2sdVWlPN01Y?si=lgMR1nhXONJ6Ix2O"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Moli Tutorials
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Learn how to make the most of our platform with these helpful tutorials
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-64"
                  src={tutorial.url}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {tutorial.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoliTutorials;
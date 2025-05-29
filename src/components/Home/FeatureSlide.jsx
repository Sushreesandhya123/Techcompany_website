const FeatureSlide = ({ 
  title = "", 
  subtitle = "", 
  description = "", 
  features = [], // Default empty array
  imageSrc, 
  imageAlt = "", 
  isActive,
  imageClass = "" // Add default value
}) => {
  return (
    <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100 block' : 'opacity-0 absolute h-0 overflow-hidden'}`}>
      <div className="flex flex-col md:flex-row items-center gap-1 bg-white">
        {/* Text Content */}
        <div className="md:w-[45%] space-y-10">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#0A3161] via-[#1E4D8B] to-[#3B6BBF] bg-clip-text text-transparent">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xl italic text-gray-400 border-l-4 border-[#0A3161] pl-3">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          )}

          {features.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 ">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800">
                  <div className="flex-shrink-0 bg-[#0A3161] rounded-full p-1 shadow-lg mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-medium text-base">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image */}
        <div className="md:w-[55%] flex justify-center">
          {imageSrc && (
            <img 
              src={imageSrc} 
              alt={imageAlt}
              loading="lazy"
              className={`w-full h-auto max-h-[600px] object-contain ${imageClass}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default FeatureSlide;
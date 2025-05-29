const DownloadSection = () => {
  return (
    <div className="bg-[#002868] py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Download Our Interpreter App
          </h2>
          <p className="mt-3 text-xl text-white">
            It's completely free!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* App Store */}
          <a 
            href="https://apps.apple.com/us/app/moli-app/id6479742909" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 border border-white border-opacity-20"
          >
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 41" fill="none">
                <path d="M19.455 12.537C17.995 12.537 15.735 10.877 13.355 10.937C10.215 10.977 7.33498 12.757 5.71498 15.577C2.45498 21.237 4.87498 29.597 8.05498 34.197C9.61498 36.437 11.455 38.957 13.895 38.877C16.235 38.777 17.115 37.357 19.955 37.357C22.775 37.357 23.575 38.877 26.055 38.817C28.575 38.777 30.175 36.537 31.715 34.277C33.495 31.677 34.235 29.157 34.275 29.017C34.215 28.997 29.375 27.137 29.315 21.537C29.275 16.857 33.135 14.617 33.315 14.517C31.115 11.297 27.735 10.937 26.555 10.857C23.475 10.617 20.895 12.537 19.455 12.537ZM24.655 7.81699C25.955 6.25699 26.815 4.07699 26.575 1.91699C24.715 1.99699 22.475 3.15699 21.135 4.71699C19.935 6.09699 18.895 8.31699 19.175 10.437C21.235 10.597 23.355 9.37699 24.655 7.81699Z" fill="white"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs text-white opacity-80">Download on the</p>
                <p className="text-lg font-semibold text-white">App Store</p>
              </div>
            </div>
          </a>

          {/* Google Play */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.juvvaltech.moli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 border border-white border-opacity-20"
          >
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 41" fill="none">
                <path d="M3.75 5.14789V35.851C3.75021 35.9176 3.77007 35.9827 3.80711 36.0381C3.84415 36.0934 3.89671 36.1366 3.9582 36.1622C4.01969 36.1879 4.08738 36.1948 4.15277 36.1821C4.21816 36.1694 4.27835 36.1376 4.32578 36.0909L20.3125 20.5002L4.32578 4.90805C4.27835 4.86128 4.21816 4.82956 4.15277 4.81686C4.08738 4.80416 4.01969 4.81105 3.9582 4.83666C3.89671 4.86228 3.84415 4.90548 3.80711 4.96084C3.77007 5.01621 3.75021 5.08128 3.75 5.14789ZM27.0156 14.094L6.97031 3.05023L6.95781 3.0432C6.6125 2.8557 6.28437 3.32289 6.56719 3.59476L22.2805 18.6198L27.0156 14.094ZM6.56875 37.4057C6.28438 37.6776 6.6125 38.1448 6.95938 37.9573L6.97187 37.9502L27.0156 26.9065L22.2805 22.3791L6.56875 37.4057ZM35.1078 18.5471L29.5102 15.4643L24.2469 20.5002L29.5102 25.5338L35.1078 22.4534C36.6305 21.612 36.6305 19.3885 35.1078 18.5471Z" fill="white"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs text-white opacity-80">Get it on</p>
                <p className="text-lg font-semibold text-white">Google Play</p>
              </div>
            </div>
          </a>

          {/* Windows Store */}
          <a 
            href="https://www.microsoft.com/store/productId/9NZKMQRD07L8?ocid=pdpshare" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 border border-white border-opacity-20"
          >
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 41" fill="none">
                <path d="M0 0.5L16 3.5V17L0 14.5V0.5ZM18 3.5L34 0.5V14.5L18 17V3.5ZM0 18.5L16 21V34.5L0 31.5V18.5ZM18 21L34 18.5V31.5L18 34.5V21Z" fill="white"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs text-white opacity-80">Download from</p>
                <p className="text-lg font-semibold text-white">Microsoft Store</p>
              </div>
            </div>
          </a>

          {/* Website */}
          <a 
            href="https://terp.mymoliapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 border border-white border-opacity-20 text-white"
          >
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-80">Visit our</p>
                <p className="text-lg font-semibold">Website</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
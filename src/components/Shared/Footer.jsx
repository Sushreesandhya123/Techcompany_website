import React from "react";
import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import RequestDemoButton from '../RequestDemoButton';
const Footer = () => {
  const handleDemoClick = () => {
    // Add your click logic here, e.g. open modal or route to demo form
    alert('Demo requested!');
  };
  return (
    <div className="bg-gray-900 text-white">
      {/* CTA Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Image */}
          <div className="w-1/4 flex justify-start -ml-10">
            <img 
              src="https://web-static.wrike.com/tp/static/assets/img/cta/v3/center/dark/2.svg" 
              alt="Wrike illustration left"
              className="w-full h-auto max-w-[488px]"
              width="488"
              height="593"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Workflow with JuvvalTech
            </h2>
            <p className="text-lg mb-8">
              Experience the power of AI-driven legal and communication solutions.
            </p>

            {/* Form */}
            <form className="max-w-md mx-auto md:mx-0">
              <div className="mb-4 flex gap-2">
                <label htmlFor="email" className="sr-only">Enter your business email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-3 rounded-l bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <RequestDemoButton onClick={handleDemoClick} />
              </div>
            </form>
            {/* Ratings */}
            <div className="mt-1 flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <img 
                  src="https://web-static.wrike.com/tp/storage/uploads/9ba09455-ff2a-425d-954a-5a14b9dbe8d8/stars.svg" 
                  alt="5 star rating"
                  width="104"
                  height="20"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-400">
                Trusted by legal professionals and courts nationwide
              </p>
              {/* <img 
                src="https://web-static.wrike.com/tp/storage/uploads/740af830-7a52-402d-bfb2-629a6df4079c/rating-component-5-logos.svg" 
                alt="Trusted companies"
                width="100"
                height="20"
                loading="lazy"
                className="mt-2"
              /> */}
            </div>
          </div>

          {/* Right Image */}
           <div className="w-1/4 flex justify-end -mr-10 ">
            <img 
              src="https://web-static.wrike.com/tp/static/assets/img/cta/v3/center/dark/5.svg" 
              alt="Wrike illustration right"
              className="w-full h-auto max-w-[400px]"
              width="400"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="text-5xl font-bold text-white mb-3">JuvvalTech</div>
            <p className="text-sm leading-relaxed mb-4">
              AI-powered solutions bridging communication gaps in legal systems and beyond.
            </p>
            <div className="flex gap-4 text-4xl">
              <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-white transition"><FaTwitter /></a>
              <a href="#" className="hover:text-white transition"><FaInstagram /></a>
              <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-2xl mb-3 font-bold">Products</h3>
            <ul className="space-y-2 text-md font-semibold">
              <li><a href="#" className="hover:text-blue-400 transition">Moli Interpretation Platform</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">AI-Terp Real-time Translation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Kulu Legal Workflow</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Moli Admin Dashboard</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-2xl mb-3 font-bold">Resources</h3>
            <ul className="space-y-2 text-md font-semibold">
              <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">API Integration</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Legal Compliance</a></li>
            </ul>
          </div>

          {/* Contact & Apps */}
          <div>
            <h3 className="text-white text-2xl mb-3 font-bold ">Get Our Apps</h3>
            <div className="flex items-center gap-4">
              {/* Microsoft Store Button */}
              <a
                href="https://apps.microsoft.com/detail/9NZKMQRD07L8?hl=en-us&gl=IN&ocid=pdpshare"
                target="_blank"
                rel="noopener noreferrer"
                title="App Store"
              >
                <img
                  src="https://web-static.wrike.com/tp/static/assets/img/footer/app-store_en.svg"
                  alt="App Store"
                  loading="lazy"
                  width="135"
                  height="40"
                  className="hover:opacity-80 transition"
                />
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.juvvaltech.moli&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Play"
              >
                <img
                  src="https://web-static.wrike.com/tp/static/assets/img/footer/google-play_en.svg"
                  alt="Google Play"
                  loading="lazy"
                  width="135"
                  height="40"
                  className="hover:opacity-80 transition"
                />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white text-2xl font-bold mb-2">Contact Us</h4>
              <p className="text-sm mb-2">support@juvvaltech.com</p>
              <p className="text-sm mb-2">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 JuvvalTech, Inc. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
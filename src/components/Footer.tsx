import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <div className="flex flex-col">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              this is a text
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
               this is a text
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
               this is a text
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Courses
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              FaceBook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Bhubaneswar,
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Odisha,
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              751016
            </a>
          </div>
        </div>
      </div>
        <p className="text-center text-xs pt-8">@2024 Music School,All Rights reserved.</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <div className="container mx-auto py-16 px-4 sm:px-0">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Dream Estate
          </h1>
          <p className="text-gray-600 leading-7">
            Welcome to Dream Estate, where modern elegance meets your dream
            home. Our carefully curated selection of properties caters to your
            unique preferences, whether you're seeking a trendy apartment, a
            family-friendly house, or a luxurious villa.
          </p>

          <div className="border-t border-gray-300 my-12"></div>

          {/* Zigzag Section - Our Mission */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-gray-600 text-center md:text-left leading-7 md:order-1 md:mr-4">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p>
                At Dream Estate, we're on a mission to redefine the home-finding
                experience, making it seamless and enjoyable. Your home is more
                than just a space; it's where memories are made and dreams come
                to life. Our commitment is to help you discover the perfect
                place for your distinctive lifestyle.
              </p>
            </div>
            <img
              src="\src\asset\img\mission.png"
              alt="Mission Image"
              className="md:w-1/2 w-60 rounded-lg mb-6 md:mb-0 md:ml-4"
            />
          </div>

          <div className="border-t border-gray-300 my-12"></div>

          {/* Zigzag Section - Meet the Creator */}
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="\src\asset\img\dp mail.jpg"
              alt="Creator Image"
              className="md:w-1/2 rounded-lg w-60 mb-6 md:mb-0 md:mr-4"
            />
            <div className="md:w-1/2 text-gray-600 text-center md:text-left leading-7 md:order-1 md:ml-4">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                Meet the Creator
              </h2>
              <p>
                Hello! I'm [Creator Name], the visionary behind Dream Estate. As
                a dedicated developer and design enthusiast, I crafted this
                platform as a user-friendly and visually captivating space to
                assist you in finding your dream home.
              </p>
              <p className="mt-2">
                Explore freely and make yourself at home. If you have any
                questions or feedback, don't hesitate to reach out. Your
                satisfaction is our top priority!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;

import React from "react";
import {
  FaGamepad,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

// Dummy SectionTitle component for React.js (replace with your own if available)
const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-6">
    <p className="text-green-600 font-semibold uppercase">{subtitle}</p>
    <h2 className="text-3xl font-bold">{title}</h2>
    <div className="w-16 h-1 bg-green-500 mt-2 mb-4"></div>
  </div>
);

const About = () => {
  return (
    <div className=" text-black-500">
      {/* Hero Banner with Image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263230/HomePagePic2_fttq6g.jpg"
            alt="Cycling adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to Go On
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Compete to win!
            </p>
            {/* <button className="bg-white text-green-700 hover:bg-green-50 font-semibold py-2 px-6 rounded-full transition duration-300">
              Explore Bikes
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-12">
          <SectionTitle subtitle="We Are For Social Cause" title="About Us" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263233/HomePagePic3_wdl3we.jpg"
                alt="Go On"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <p className="leading-relaxed mb-4 font-semibold">
                Go On is a new esports tournament organizer founded in 2025 with one clear goal: to give players the stage they deserve. Every match we host is built to challenge your skills, highlight your talent, and bring out the best in you and your team. 
              </p>
              <p className="leading-relaxed font-semibold">
                Go On was ounded in 2025, we believe every player has a shot at greatness, and our tournaments are designed to give you the opportunity to prove it. Whether you’re competing for glory, growth, or the thrill of the game, Go On is here to push you forward.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Values, Contact */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
            <FaGamepad className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3 text-center text-gray-700">Our Mission</h3>
            <p className="text-center text-gray-700 font-semibold ">
              To empower gamer and esports communities with joy and entertainment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
            <FaLeaf className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3 text-center text-gray-700">Our Values</h3>
            <ul className="text-gray-700 space-y-2 text-center font-semibold">
              <li>• Fair Play</li>
              <li>• Trust</li>
              <li>• Customer-Centricity</li>
              <li>• Inclusiveness</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
            <FaPhoneAlt className="text-yellow-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-3 text-center text-gray-700">Contact Us</h3>
            <div className="text-gray-700 space-y-2 text-center font-semibold">
              <p className="flex items-center justify-center">
                <FaEnvelope className="mr-2" /> goonbdofficial@gmail.com
              </p>
              <p className="flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> +880 1806263784
              </p>
              <p className="mt-4 text-sm">
                Lalkhan Bazar, Chittagong
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative bg-blue-600 text-white text-center px-6 py-12 rounded-2xl shadow-md mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Bike path pattern" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <blockquote className="italic text-xl md:text-2xl mb-6">
              "Life is like playing with mind. To keep your balance, you must keep
              playing."
            </blockquote>
            <p className="font-semibold text-lg">– Mr. De Caprio</p>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-2 ">Meet the Team</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <FaUsers className="text-4xl text-indigo-600 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto mb-8">
            Our team is made up of passionate gamers, expert organizers, and
            support staff who are here to help you get the most out of your
            gaming experience. 
          </p>
          
          {/* Team Members Grid */}
          <div className="flex justify-center gap-6 mt-8">
            {[
              { name: "Rafiul Islam Alvi", role: "Founder", img: "https://randomuser.me/api/portraits/men/32.jpg", bio:"Rafiul Islam Alvi is a former eSports player and the founder of Go On, a company dedicated to organizing competitive gaming tournaments. With years of experience in the eSports scene, he shifted from playing to building platforms that bring gamers together, helping grow the community and create opportunities for new talent."},
              { name: "Alfaz Uddin", role: "Co-Founder", img: "https://randomuser.me/api/portraits/women/44.jpg", bio:"Alfaz Uddin is a hardworking entrepreneur and the co-founder of Go On Now. Known for his dedication and drive, he brings a strong work ethic and a practical approach to building and growing the company." }
            ].map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                />
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your gaming Journey?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Visit our shop or browse our online platform to find your perfect gaming experience.
          </p>
          {/* <button className="bg-white text-green-700 hover:bg-green-50 font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Shop Now
          </button> */}
        </section>
      </main>
    </div>
  );
};

export default About;
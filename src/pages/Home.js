import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Institute of Arts and Sciences
              </h1>
              <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
                "The heart of the institution in providing humanistic and scientific education needed to produce holistic, research-based, and values-driven professionals."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/about"
                  className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-purple-100 transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </Link>
                <Link
                  to="/academic-programs"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Students collaborating"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IAS?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are committed to academic excellence and holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Rigorous Academics',
                description: 'Comprehensive curriculum designed by industry experts and academic leaders'
              },
              {
                icon: '🌍',
                title: 'Global Perspective',
                description: 'International standards and opportunities for global engagement'
              },
              {
                icon: '👥',
                title: 'Student-Centric',
                description: 'Personalized mentoring and support for every student\'s growth'
              },
              {
                icon: '🔬',
                title: 'Research Focus',
                description: 'Emphasis on research-based learning and practical application'
              },
              {
                icon: '💼',
                title: 'Career Ready',
                description: 'Programs designed to prepare students for professional success'
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Vibrant community with active student organizations and events'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Explore our academic programs and discover the perfect fit for your educational journey.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-purple-100 transition-all duration-200 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

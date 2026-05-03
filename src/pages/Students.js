import React from 'react';

const Students = () => {
  const organizations = [
    {
      name: "Young Linguists' Society",
      abbreviation: 'YLS',
      description: 'Dedicated to fostering passion for language studies, linguistics research, and cross-cultural communication.',
      mission: 'To promote excellence in language learning, support linguistic research, and create a community of language enthusiasts.',
      activities: [
        'Language workshops and conversation sessions',
        'Guest lectures from linguistics experts',
        'Research presentations and discussions',
        'Language immersion events',
        'Translation and writing competitions'
      ],
      icon: '🌍',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      name: 'COMMunity',
      abbreviation: 'COMM',
      description: 'A vibrant organization for communication students to network, collaborate, and showcase their professional talents.',
      mission: 'To build a supportive community of communicators, develop professional skills, and create meaningful connections in the field.',
      activities: [
        'Media production projects',
        'Public relations campaigns',
        'Journalism workshops',
        'Social media strategy discussions',
        'Industry networking events',
        'Podcast and content creation',
        'Mock press conferences'
      ],
      icon: '📡',
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db57?w=600&h=400&fit=crop'
    },
    {
      name: 'Political Science Community',
      abbreviation: 'PSC',
      description: 'Engaging citizens interested in political science, governance, public policy, and civic engagement.',
      mission: 'To deepen understanding of political systems, promote critical thinking about current events, and encourage active citizenship.',
      activities: [
        'Political debates and forums',
        'Policy analysis workshops',
        'Seminars on current political issues',
        'Mock elections and simulations',
        'Community engagement projects',
        'Documentary screenings and discussions',
        'International relations conferences'
      ],
      icon: '🏛️',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    }
  ];

  const benefits = [
    {
      title: 'Leadership Development',
      description: 'Develop leadership skills through active participation in organization management and projects.'
    },
    {
      title: 'Networking',
      description: 'Build valuable connections with peers, faculty, and professionals in your field of interest.'
    },
    {
      title: 'Skill Enhancement',
      description: 'Gain practical experience and develop professional competencies outside the classroom.'
    },
    {
      title: 'Community Impact',
      description: 'Engage with the wider community through outreach and social responsibility initiatives.'
    },
    {
      title: 'Lifelong Friendships',
      description: 'Form meaningful relationships with like-minded individuals who share your interests.'
    },
    {
      title: 'Resume Building',
      description: 'Add valuable experiences and achievements to your academic and professional portfolio.'
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Student Life</h1>
          <p className="text-purple-200 text-lg mt-2">
            Discover our vibrant student organizations and community
          </p>
        </div>
      </section>

      {/* Student Organizations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Organizations
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Get involved and be part of our dynamic student community
            </p>
          </div>

          <div className="space-y-12">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="border border-purple-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1 h-64 md:h-auto">
                    <img
                      src={org.image}
                      alt={org.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center mb-2">
                      <span className="text-4xl mr-3">{org.icon}</span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
                          {org.name}
                        </h2>
                        <p className="text-sm text-purple-600 font-semibold">{org.abbreviation}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{org.description}</p>

                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-purple-900 mb-2">Mission:</p>
                      <p className="text-gray-700">{org.mission}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-3">Key Activities:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {org.activities.map((activity, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-purple-600 mr-2">✓</span>
                            <span className="text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Involvement */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Student Involvement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-900"
              >
                <h3 className="text-xl font-bold text-purple-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Involved */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Involved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Explore',
                description: 'Learn about different organizations and their activities.'
              },
              {
                step: '2',
                title: 'Attend Events',
                description: 'Participate in organization meetings and events to connect with members.'
              },
              {
                step: '3',
                title: 'Join',
                description: 'Become an official member and start your journey with the organization.'
              },
              {
                step: '4',
                title: 'Lead',
                description: 'Take on leadership roles and help shape the future of the organization.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Resources */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Support',
                items: ['Tutoring Services', 'Writing Center', 'Research Workshops', 'Study Groups']
              },
              {
                title: 'Career Services',
                items: ['Resume Reviews', 'Interview Prep', 'Job Postings', 'Alumni Network']
              },
              {
                title: 'Wellness Services',
                items: ['Counseling', 'Health Center', 'Mental Health Support', 'Wellness Programs']
              }
            ].map((resource, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-900 mb-4">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                      <span className="text-purple-600 mr-3">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;

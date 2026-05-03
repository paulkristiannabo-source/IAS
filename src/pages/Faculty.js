import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Maria Santos',
      title: 'Department Chair, English Language',
      expertise: 'Modern Literature, Linguistic Theory',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. Juan Rodriguez',
      title: 'Professor of Communication',
      expertise: 'Media Studies, Digital Communication',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Patricia Aquino',
      title: 'Associate Professor, Political Science',
      expertise: 'International Relations, Governance',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. Roberto Reyes',
      title: 'Senior Lecturer, English Literature',
      expertise: 'Poetry, Comparative Literature',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Angela Cruz',
      title: 'Assistant Professor, Communication Arts',
      expertise: 'Public Relations, Corporate Communication',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. Carlos Mendoza',
      title: 'Lecturer, Political Science',
      expertise: 'Asian Politics, Public Policy',
      image: 'https://images.unsplash.com/photo-1507009816859-023e7d3f290d?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Faculty</h1>
          <p className="text-purple-200 text-lg mt-2">
            Meet our distinguished faculty members
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expert Faculty
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Our faculty members are accomplished scholars, experienced educators, and dedicated mentors. They bring a wealth of knowledge, research expertise, and real-world experience to the classroom, preparing students for success in their chosen fields.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-900 font-semibold text-sm mt-1">{member.title}</p>
                  <p className="text-gray-600 text-sm mt-3">
                    <span className="font-semibold">Expertise:</span> {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Faculty Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Academic Credentials</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Advanced degrees (MA, PhD) from respected institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Specialized expertise in their respective fields</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Continuous professional development and training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Active participation in scholarly research</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Teaching Excellence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Innovative and student-centered teaching methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Mentorship and academic advising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Industry experience and professional networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Commitment to student success and development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

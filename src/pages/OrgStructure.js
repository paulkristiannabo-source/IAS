import React from 'react';

const OrgStructure = () => {
  const structure = [
    {
      title: 'Institute Director',
      name: 'Dr. Isabel Fernandez',
      description: 'Overall leadership and strategic direction',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    },
    {
      title: 'Associate Director',
      name: 'Prof. Vicente Santos',
      description: 'Academic operations and programs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    {
      title: 'Finance Officer',
      name: 'Maria Gonzales',
      description: 'Financial management and budgeting',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
    }
  ];

  const departments = [
    {
      name: 'Department of English Language',
      chair: 'Dr. Maria Santos',
      specializations: ['Literature Studies', 'Linguistics', 'Writing & Composition'],
      icon: '📚'
    },
    {
      name: 'Department of Communication',
      chair: 'Prof. Juan Rodriguez',
      specializations: ['Journalism', 'Public Relations', 'Digital Media'],
      icon: '📡'
    },
    {
      name: 'Department of Political Science',
      chair: 'Dr. Patricia Aquino',
      specializations: ['Political Theory', 'International Relations', 'Public Administration'],
      icon: '🏛️'
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Organizational Structure</h1>
          <p className="text-purple-200 text-lg mt-2">
            Meet our leadership and learn about our departments
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {structure.map((leader, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg border border-purple-100"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-purple-900 font-semibold text-lg mt-2">{leader.title}</p>
                <p className="text-gray-600 mt-3">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Each department is led by experienced educators and scholars dedicated to student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-900"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-semibold">Chair:</p>
                  <p className="text-purple-900 font-semibold">{dept.chair}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">Specializations:</p>
                  <ul className="space-y-1">
                    {dept.specializations.map((spec, idx) => (
                      <li key={idx} className="text-gray-700">
                        • {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Structure Overview
            </h2>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="space-y-8">
              {/* Level 1 */}
              <div className="text-center">
                <div className="inline-block bg-purple-900 text-white px-6 py-3 rounded-lg font-bold">
                  Institute Director
                </div>
              </div>

              {/* Level 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  'Associate Director',
                  'Finance Officer',
                  'Administrative Coordinator'
                ].map((role, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold inline-block">
                      {role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Level 3 */}
              <div>
                <p className="text-center text-gray-600 font-semibold mb-4">Department Leadership</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {departments.map((dept, idx) => (
                    <div key={idx} className="text-center">
                      <div className="bg-purple-300 text-gray-900 px-6 py-3 rounded-lg font-semibold inline-block">
                        {dept.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level 4 */}
              <div>
                <p className="text-center text-gray-600 font-semibold mb-4">Faculty & Staff</p>
                <div className="flex justify-center">
                  <div className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold">
                    Department Faculty & Support Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Academic Affairs',
                services: ['Academic Advising', 'Curriculum Development', 'Learning Support', 'Tutoring Services']
              },
              {
                title: 'Student Services',
                services: ['Student Counseling', 'Career Development', 'Co-curricular Activities', 'Health & Wellness']
              },
              {
                title: 'Administrative Services',
                services: ['Admissions', 'Registration', 'Records Management', 'Financial Aid']
              },
              {
                title: 'Library & Resources',
                services: ['Library Services', 'Research Databases', 'Technology Support', 'Learning Commons']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-900"
              >
                <h3 className="text-xl font-bold text-purple-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.services.map((item, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                      <span className="text-purple-600 mr-2">•</span>
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

export default OrgStructure;

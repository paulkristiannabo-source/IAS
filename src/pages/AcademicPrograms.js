import React, { useState } from 'react';

const AcademicPrograms = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'Bachelor of Arts in English Language',
      shortCode: 'BA English',
      image: 'https://images.unsplash.com/photo-1507842676716-35d6eae5f3e2?w=600&h=400&fit=crop',
      about: [
        'The Bachelor of Arts in English Language program prepares students for diverse careers in communication, literature, education, and linguistics. Our comprehensive curriculum combines theoretical knowledge with practical application, ensuring graduates are well-equipped for professional success.',
        'Students engage with classic and contemporary literature, develop advanced writing and communication skills, and explore the complexities of language and meaning-making. We emphasize critical thinking, cultural awareness, and the ability to articulate ideas with clarity and persuasion.'
      ],
      curriculum: [
        {
          year: 'First Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'ENG101', title: 'English Composition', units: 3 },
                { code: 'ENG102', title: 'Literature Survey I', units: 3 },
                { code: 'ENG103', title: 'Linguistics Basics', units: 3 },
                { code: 'GEN101', title: 'General Education I', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'ENG104', title: 'Literature Survey II', units: 3 },
                { code: 'ENG105', title: 'World Literature', units: 3 },
                { code: 'ENG106', title: 'Phonetics', units: 3 },
                { code: 'GEN102', title: 'General Education II', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Second Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'ENG201', title: 'English Drama', units: 3 },
                { code: 'ENG202', title: 'Poetry Analysis', units: 3 },
                { code: 'ENG203', title: 'Sociolinguistics', units: 3 },
                { code: 'ENG204', title: 'Technical Writing', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'ENG205', title: 'British Literature', units: 3 },
                { code: 'ENG206', title: 'American Literature', units: 3 },
                { code: 'ENG207', title: 'Advanced Grammar', units: 3 },
                { code: 'ENG208', title: 'Semantics', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Third Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'ENG301', title: 'Contemporary Literature', units: 3 },
                { code: 'ENG302', title: 'Language & Culture', units: 3 },
                { code: 'ENG303', title: 'Discourse Analysis', units: 3 },
                { code: 'ENG304', title: 'Elective I', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'ENG305', title: 'Literary Criticism', units: 3 },
                { code: 'ENG306', title: 'Applied Linguistics', units: 3 },
                { code: 'ENG307', title: 'Teaching English', units: 3 },
                { code: 'ENG308', title: 'Elective II', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Fourth Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'ENG401', title: 'Special Topics in Literature', units: 3 },
                { code: 'ENG402', title: 'Digital Communication', units: 3 },
                { code: 'ENG403', title: 'Thesis Preparation', units: 3 },
                { code: 'ENG404', title: 'Research Seminar', units: 2 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'ENG405', title: 'Capstone Project', units: 3 },
                { code: 'ENG406', title: 'Final Seminar', units: 2 },
                { code: 'ENG407', title: 'Professional Development', units: 2 },
                { code: 'ENG408', title: 'Career Practicum', units: 2 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Bachelor of Arts in Communication',
      shortCode: 'BA Communication',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db57?w=600&h=400&fit=crop',
      about: [
        'The Bachelor of Arts in Communication program develops skilled communicators who can effectively convey messages across multiple platforms and audiences. Students learn to navigate the digital landscape while maintaining ethical standards and strategic thinking.',
        'Our program covers journalism, public relations, advertising, digital media, and organizational communication. Graduates are prepared for dynamic careers in media, marketing, communications, and related fields, equipped with both theoretical knowledge and hands-on experience.'
      ],
      curriculum: [
        {
          year: 'First Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'COM101', title: 'Communication Fundamentals', units: 3 },
                { code: 'COM102', title: 'Media Literacy', units: 3 },
                { code: 'COM103', title: 'Introduction to Journalism', units: 3 },
                { code: 'GEN101', title: 'General Education I', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'COM104', title: 'Writing for Media', units: 3 },
                { code: 'COM105', title: 'Public Relations Basics', units: 3 },
                { code: 'COM106', title: 'Advertising Principles', units: 3 },
                { code: 'GEN102', title: 'General Education II', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Second Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'COM201', title: 'Mass Communication Theory', units: 3 },
                { code: 'COM202', title: 'Digital Communication', units: 3 },
                { code: 'COM203', title: 'Broadcast Journalism', units: 3 },
                { code: 'COM204', title: 'Communication Ethics', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'COM205', title: 'Marketing Communication', units: 3 },
                { code: 'COM206', title: 'Social Media Strategy', units: 3 },
                { code: 'COM207', title: 'Print Journalism', units: 3 },
                { code: 'COM208', title: 'Research Methods', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Third Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'COM301', title: 'Corporate Communication', units: 3 },
                { code: 'COM302', title: 'Public Affairs', units: 3 },
                { code: 'COM303', title: 'Multimedia Production', units: 3 },
                { code: 'COM304', title: 'Elective I', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'COM305', title: 'Crisis Communication', units: 3 },
                { code: 'COM306', title: 'Content Strategy', units: 3 },
                { code: 'COM307', title: 'Campaign Development', units: 3 },
                { code: 'COM308', title: 'Elective II', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Fourth Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'COM401', title: 'Documentary Production', units: 3 },
                { code: 'COM402', title: 'Strategic Communication', units: 3 },
                { code: 'COM403', title: 'Advanced Digital Media', units: 3 },
                { code: 'COM404', title: 'Communication Seminar', units: 2 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'COM405', title: 'Communication Law', units: 3 },
                { code: 'COM406', title: 'Capstone Project', units: 3 },
                { code: 'COM407', title: 'Internship Synthesis', units: 2 },
                { code: 'COM408', title: 'Professional Practicum', units: 2 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Bachelor of Arts in Political Science',
      shortCode: 'BA Political Science',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      about: [
        'The Bachelor of Arts in Political Science program provides comprehensive understanding of political systems, governance, international relations, and public policy. Students analyze political processes and develop skills for civic engagement and professional leadership.',
        'Our curriculum explores political theory, comparative government, international politics, and public administration. Graduates are prepared for careers in government, diplomacy, advocacy, research, and policy analysis, equipped to understand and shape political developments.'
      ],
      curriculum: [
        {
          year: 'First Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'PS101', title: 'Introduction to Political Science', units: 3 },
                { code: 'PS102', title: 'Political Theory I', units: 3 },
                { code: 'PS103', title: 'Philippine Government', units: 3 },
                { code: 'GEN101', title: 'General Education I', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'PS104', title: 'Political Theory II', units: 3 },
                { code: 'PS105', title: 'Comparative Government', units: 3 },
                { code: 'PS106', title: 'Research Methods', units: 3 },
                { code: 'GEN102', title: 'General Education II', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Second Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'PS201', title: 'International Relations', units: 3 },
                { code: 'PS202', title: 'Civic Engagement', units: 3 },
                { code: 'PS203', title: 'Constitutional Law', units: 3 },
                { code: 'PS204', title: 'Asian Politics', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'PS205', title: 'Public Administration', units: 3 },
                { code: 'PS206', title: 'Political Economy', units: 3 },
                { code: 'PS207', title: 'American Politics', units: 3 },
                { code: 'PS208', title: 'European Politics', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Third Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'PS301', title: 'International Organizations', units: 3 },
                { code: 'PS302', title: 'Public Policy', units: 3 },
                { code: 'PS303', title: 'Political Institutions', units: 3 },
                { code: 'PS304', title: 'Elective I', units: 3 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'PS305', title: 'Geopolitics', units: 3 },
                { code: 'PS306', title: 'Electoral Systems', units: 3 },
                { code: 'PS307', title: 'Political Behavior', units: 3 },
                { code: 'PS308', title: 'Elective II', units: 3 }
              ]
            }
          ]
        },
        {
          year: 'Fourth Year',
          semesters: [
            {
              semester: '1st Semester',
              courses: [
                { code: 'PS401', title: 'Development Politics', units: 3 },
                { code: 'PS402', title: 'Regional Studies', units: 3 },
                { code: 'PS403', title: 'Advanced Global Politics', units: 3 },
                { code: 'PS404', title: 'Thesis Seminar', units: 2 }
              ]
            },
            {
              semester: '2nd Semester',
              courses: [
                { code: 'PS405', title: 'Capstone Project', units: 3 },
                { code: 'PS406', title: 'Policy Analysis Workshop', units: 3 },
                { code: 'PS407', title: 'Professional Development', units: 2 },
                { code: 'PS408', title: 'Specialized Elective', units: 2 }
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Academic Programs</h1>
          <p className="text-purple-200 text-lg mt-2">
            Explore our comprehensive offerings in Arts and Sciences
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program) => (
              <div
                key={program.id}
                className="border border-purple-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2">
                      {program.title}
                    </h2>
                    <p className="text-sm text-purple-600 font-semibold mb-4">{program.shortCode}</p>

                    {/* About paragraphs */}
                    <div className="space-y-4 mb-6">
                      {program.about.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                      className="bg-purple-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200"
                    >
                      {expandedProgram === program.id ? 'Hide Curriculum' : 'View Curriculum'}
                    </button>
                  </div>
                </div>

                {/* Curriculum Display */}
                {expandedProgram === program.id && (
                  <div className="bg-purple-50 p-8 border-t border-purple-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Curriculum Overview</h3>

                    {/* Year Cards */}
                    <div className="space-y-8">
                      {program.curriculum.map((yearData, yearIdx) => (
                        <div key={yearIdx} className="bg-white rounded-lg shadow-md border border-purple-200 overflow-hidden">
                          <div className="bg-purple-900 text-white px-6 py-4">
                            <h4 className="text-xl font-bold">{yearData.year}</h4>
                          </div>

                          <div className="p-6 space-y-6">
                            {yearData.semesters.map((semester, semIdx) => (
                              <div key={semIdx}>
                                <h5 className="text-lg font-semibold text-purple-900 mb-4">{semester.semester}</h5>
                                <div className="overflow-x-auto">
                                  <table className="w-full border-collapse">
                                    <thead>
                                      <tr className="bg-purple-100">
                                        <th className="border border-purple-300 px-4 py-2 text-left font-semibold text-purple-900">Course Code</th>
                                        <th className="border border-purple-300 px-4 py-2 text-left font-semibold text-purple-900">Descriptive Title</th>
                                        <th className="border border-purple-300 px-4 py-2 text-center font-semibold text-purple-900">Units</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {semester.courses.map((course, courseIdx) => (
                                        <tr key={courseIdx} className={courseIdx % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                                          <td className="border border-purple-200 px-4 py-2 font-mono text-sm text-purple-900">
                                            {course.code}
                                          </td>
                                          <td className="border border-purple-200 px-4 py-2 text-gray-700">
                                            {course.title}
                                          </td>
                                          <td className="border border-purple-200 px-4 py-2 text-center font-semibold text-purple-900">
                                            {course.units}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>

                                {/* Total Units */}
                                <div className="flex justify-end mt-4">
                                  <div className="bg-purple-100 px-4 py-2 rounded-lg">
                                    <span className="font-semibold text-purple-900">
                                      Total Units: {semester.courses.reduce((total, course) => total + course.units, 0)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Program Summary */}
                    <div className="mt-8 bg-white rounded-lg shadow-md border border-purple-200 p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Program Summary</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-900">4</div>
                          <div className="text-sm text-gray-600">Years</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-900">8</div>
                          <div className="text-sm text-gray-600">Semesters</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-900">
                            {program.curriculum.reduce((total, year) =>
                              total + year.semesters.reduce((yearTotal, sem) =>
                                yearTotal + sem.courses.reduce((semTotal, course) => semTotal + course.units, 0), 0), 0)
                            }
                          </div>
                          <div className="text-sm text-gray-600">Total Units</div>
                        </div>
                      </div>

                      {/* Download Prospectus */}
                      <div className="text-center">
                        <button className="bg-purple-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200 inline-flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download Prospectus
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Info */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Program Duration</h3>
              <p className="text-gray-700">
                All Bachelor of Arts programs are 4 years (8 semesters) of full-time study. Each semester consists of approximately 15-16 weeks of instruction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Admission Requirements</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ High school diploma or equivalent</li>
                <li>✓ Entrance examination score</li>
                <li>✓ Academic transcript review</li>
                <li>✓ Personal statement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicPrograms;

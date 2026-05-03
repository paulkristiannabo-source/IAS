import React from 'react';

const About = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-purple-200 text-lg mt-2">
            Discover the mission and values that drive our institution
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Campus life"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We envision producing values-driven professionals who are not only intellectually equipped but also morally grounded. Our graduates embody the highest standards of academic excellence, ethical conduct, and social responsibility.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through rigorous academics and holistic development, we prepare our students to become leaders who make meaningful contributions to society. We believe that true education transcends mere knowledge acquisition—it cultivates wisdom, compassion, and a commitment to serving humanity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To provide humanistic and scientific education of the highest caliber, fostering intellectual growth, moral development, and social consciousness in our students.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are dedicated to creating an inclusive learning environment where diverse perspectives are valued, critical thinking is encouraged, and every student has the opportunity to reach their full potential. Our commitment extends beyond the classroom to include research, community engagement, and lifelong learning.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                alt="Learning environment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We pursue the highest standards in academic achievement, research, and professional practice.'
              },
              {
                title: 'Integrity',
                description: 'We maintain unwavering commitment to honesty, ethics, and moral principles in all our endeavors.'
              },
              {
                title: 'Inclusivity',
                description: 'We celebrate diversity and create welcoming spaces for students from all backgrounds.'
              },
              {
                title: 'Innovation',
                description: 'We embrace creative thinking and foster an environment of continuous improvement and discovery.'
              },
              {
                title: 'Social Responsibility',
                description: 'We encourage our students to use their education to serve and positively impact their communities.'
              },
              {
                title: 'Holistic Development',
                description: 'We nurture intellectual, emotional, spiritual, and physical growth in our students.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-900">
                <h3 className="text-xl font-bold text-purple-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Values Matter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Values-Driven Education Matters
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              In an increasingly complex and interconnected world, values-driven professionals are essential. Our students don't just learn what to think—they learn how to think critically, ethically, and compassionately. They graduate prepared to address society's greatest challenges while maintaining their moral compass.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By integrating academic rigor with character development, we ensure that our graduates become not only successful professionals but also responsible global citizens who contribute meaningfully to the world around them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

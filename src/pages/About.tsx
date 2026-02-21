import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaUsers, FaGraduationCap, FaLeaf, FaEye, FaBullseye, FaHeart, FaCheck } from 'react-icons/fa';
import { useSiteContext } from '../context/SiteContext';

export function About() {
  const { settings } = useSiteContext();

  const values = [
    {
      icon: FaHeart,
      title: 'Compassion',
      description: 'We approach our work with empathy and care for the communities we serve.',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We believe in working together with stakeholders to achieve common goals.',
    },
    {
      icon: FaGraduationCap,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs and initiatives.',
    },
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'We focus on creating lasting impact through sustainable development practices.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/20 text-[#f7941d] rounded-full text-sm font-medium mb-6">
              About UMYIDI
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Story, Mission & Vision
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our journey, what drives us, and our commitment to empowering youth and transforming communities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Umumazi Youth Development Initiative (UMYIDI) was founded with a deep-rooted commitment to address the challenges facing young people in our community. Recognizing the potential of youth as agents of positive change, a group of dedicated individuals came together to create an organization that would provide opportunities for growth, learning, and empowerment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our inception, we have worked tirelessly to implement programs that address education, skill development, health, and community engagement. Our approach is holistic, recognizing that true development requires addressing multiple aspects of a young person's life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, UMYIDI continues to grow and expand its reach, touching the lives of thousands of young people and making a meaningful difference in communities across the region.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2e7d32] rounded-3xl p-8 text-white">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7941d] flex items-center justify-center flex-shrink-0">
                    <FaBullseye className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-300">
                      {settings.missionStatement.split('.')[0]}.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7941d] flex items-center justify-center flex-shrink-0">
                    <FaEye className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-300">
                      A world where every young person has the opportunity to reach their full potential and contribute positively to their community and society at large.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do and shape how we interact with communities and stakeholders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-[#f7941d]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-3xl text-[#f7941d]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                  <FaGraduationCap className="text-4xl text-[#f7941d] mb-4" />
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-gray-300">Scholarships & learning support</p>
                </div>
                <div className="bg-[#2e7d32] rounded-2xl p-6 text-white">
                  <FaUsers className="text-4xl text-white mb-4" />
                  <h4 className="font-semibold mb-2">Skills Training</h4>
                  <p className="text-sm text-gray-200">Vocational & entrepreneurial</p>
                </div>
                <div className="bg-[#f7941d] rounded-2xl p-6 text-white">
                  <FaHandHoldingHeart className="text-4xl text-white mb-4" />
                  <h4 className="font-semibold mb-2">Outreach</h4>
                  <p className="text-sm text-white/90">Community support programs</p>
                </div>
                <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                  <FaLeaf className="text-4xl text-[#2e7d32] mb-4" />
                  <h4 className="font-semibold mb-2">Environment</h4>
                  <p className="text-sm text-gray-300">Conservation initiatives</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-[#f7941d]/10 text-[#f7941d] rounded-full text-sm font-medium mb-4">
                What We Do
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
                Our Areas of Focus
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement comprehensive programs that address the diverse needs of young people and communities. Our work spans across several key areas:
              </p>
              <ul className="space-y-3">
                {[
                  'Educational support and scholarships',
                  'Vocational and skills training',
                  'Health and wellness programs',
                  'Community development initiatives',
                  'Environmental conservation projects',
                  'Youth leadership development',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-[#2e7d32]" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team works tirelessly to ensure the success of our programs and initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {settings.teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#f7941d]/20 group-hover:border-[#f7941d] transition-colors"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2e7d32] flex items-center justify-center mx-auto ${member.image ? 'hidden' : ''}`}>
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'TM'}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-1">{member.name}</h3>
                <p className="text-[#f7941d] text-sm font-medium mb-2">{member.role}</p>
                {member.department && (
                  <p className="text-gray-500 text-xs mb-2">{member.department}</p>
                )}
                {member.bio && (
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Together, we can create lasting change and empower more youth in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f7941d] text-white rounded-lg font-semibold hover:bg-[#e8850f] transition-colors"
            >
              <FaHandHoldingHeart className="mr-2" />
              Support Our Cause
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1e3a5f] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

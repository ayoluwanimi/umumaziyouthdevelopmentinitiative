import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaUsers, FaGraduationCap, FaLeaf, FaArrowRight, FaQuoteLeft, FaBullseye } from 'react-icons/fa';
import { useSiteContext } from '../context/SiteContext';

export function Home() {
  const { settings } = useSiteContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll hero images
  useEffect(() => {
    if (settings.heroImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % settings.heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [settings.heroImages.length]);

  const stats = [
    { number: '5000+', label: 'Youth Empowered' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Communities Reached' },
    { number: '100+', label: 'Volunteers' },
  ];

  const programs = [
    {
      icon: FaGraduationCap,
      title: 'Education Support',
      description: 'Providing scholarships, learning materials, and educational resources to underprivileged youth.',
    },
    {
      icon: FaUsers,
      title: 'Skills Training',
      description: 'Equipping young people with vocational and entrepreneurial skills for sustainable livelihoods.',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Community Outreach',
      description: 'Organizing health campaigns, food drives, and support programs for vulnerable communities.',
    },
    {
      icon: FaLeaf,
      title: 'Environmental Conservation',
      description: 'Promoting environmental awareness and sustainable practices among youth and communities.',
    },
  ];

  const testimonials = [
    {
      quote: 'UMYIDI changed my life. Through their scholarship program, I was able to complete my education and now I am giving back to my community.',
      name: 'Chidinma Okonkwo',
      role: 'Scholarship Beneficiary',
    },
    {
      quote: 'The skills training I received has enabled me to start my own business. I am now financially independent and employing others.',
      name: 'Emeka Nwosu',
      role: 'Program Graduate',
    },
    {
      quote: 'Working with UMYIDI has been incredibly fulfilling. Their dedication to community development is truly inspiring.',
      name: 'Adaeze Ibe',
      role: 'Volunteer',
    },
  ];

  return (
    <div>
      {/* Hero Section with Scrolling Background */}
      <section className="relative min-h-[600px] lg:min-h-[700px] text-white overflow-hidden">
        {/* Background Images Slideshow */}
        <div className="absolute inset-0">
          {settings.heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/80 to-[#1e3a5f]/70"></div>
            </div>
          ))}
        </div>

        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#f7941d]/20 text-[#f7941d] rounded-full text-sm font-medium mb-6">
                {settings.heroSubtitle}
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {settings.heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="text-[#f7941d]">{settings.heroTitle.split(' ').slice(-2).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {settings.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#f7941d] text-white rounded-lg font-semibold hover:bg-[#e8850f] transition-all transform hover:scale-105 shadow-xl"
                >
                  <FaHandHoldingHeart className="mr-2" />
                  Donate Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1e3a5f] transition-all"
                >
                  Learn More
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#2e7d32]/80 to-[#1e3a5f]/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#f7941d]/20 flex items-center justify-center">
                        <FaUsers className="text-6xl text-[#f7941d]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Join Our Community</h3>
                      <p className="text-gray-300">Together, we can make a difference</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#f7941d] rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-3xl font-bold text-white">5K+</span>
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#2e7d32] rounded-full flex items-center justify-center shadow-xl">
                  <FaLeaf className="text-3xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image indicators */}
        {settings.heroImages.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {settings.heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-[#f7941d] w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#f7941d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
                <FaBullseye className="inline mr-2" />
                Our Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6">
                Mission Statement
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {settings.missionStatement}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#1e3a5f] text-white rounded-lg font-semibold hover:bg-[#2a4a6f] transition-colors"
              >
                Learn More About Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={settings.missionImage}
                  alt="Our Mission"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-[#f7941d] flex items-center justify-center">
                        <FaBullseye className="text-2xl text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1e3a5f]">Empowering Youth</h4>
                        <p className="text-sm text-gray-600">Since 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f7941d]/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2e7d32]/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Thus Far Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#2e7d32]/10 text-[#2e7d32] rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              {settings.journeyTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {settings.journeyDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {settings.journeyItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Journey+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#f7941d] flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/10 text-[#f7941d] rounded-full text-sm font-medium mb-4">
              Our Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We implement various programs designed to address the needs of youth and communities in our area of operation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-4 group-hover:bg-[#f7941d] transition-colors">
                  <program.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg font-semibold hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              View All Projects
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/10 text-[#f7941d] rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What People Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <FaQuoteLeft className="text-3xl text-[#f7941d] mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-[#f7941d] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f7941d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your support can help us reach more youth and create lasting change in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#f7941d] rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              <FaHandHoldingHeart className="mr-2" />
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#f7941d] transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

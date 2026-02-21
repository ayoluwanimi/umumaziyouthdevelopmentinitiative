import { Link } from 'react-router-dom';
import { FaUsers, FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaHeart } from 'react-icons/fa';

export function Community() {
  const communityGroups = [
    {
      title: 'Youth Leaders Forum',
      members: '150+',
      description: 'A platform for young leaders to connect, share ideas, and collaborate on community projects.',
      activities: ['Monthly meetings', 'Leadership workshops', 'Community service'],
    },
    {
      title: 'Women Empowerment Group',
      members: '200+',
      description: 'Supporting women with skills training, micro-enterprise development, and advocacy.',
      activities: ['Skills training', 'Savings groups', 'Health awareness'],
    },
    {
      title: 'Environmental Champions',
      members: '100+',
      description: 'Young people committed to environmental conservation and sustainable practices.',
      activities: ['Tree planting', 'Clean-up campaigns', 'Awareness programs'],
    },
    {
      title: 'Education Support Network',
      members: '80+',
      description: 'Volunteers and mentors supporting students through tutoring and mentorship.',
      activities: ['Tutoring sessions', 'Career guidance', 'Study groups'],
    },
  ];

  const upcomingEvents = [
    {
      title: 'Youth Leadership Summit',
      date: 'Coming Soon',
      location: 'Umumazi Community Hall',
      description: 'Annual gathering of young leaders to discuss community development strategies.',
    },
    {
      title: 'Skills Training Workshop',
      date: 'Monthly',
      location: 'UMYIDI Training Center',
      description: 'Hands-on training in various vocational skills for youth employment.',
    },
    {
      title: 'Community Health Outreach',
      date: 'Quarterly',
      location: 'Various Locations',
      description: 'Free health screenings and awareness programs for community members.',
    },
  ];

  const impactStories = [
    {
      name: 'Obioma Success Story',
      story: 'Through UMYIDI\'s skills training program, Obioma learned tailoring and now runs a successful business employing 5 people.',
    },
    {
      name: 'Education Scholarship Impact',
      story: 'Over 50 students have completed their education through our scholarship program and are now contributing to society.',
    },
    {
      name: 'Environmental Initiative',
      story: 'Our tree planting campaign has seen over 2,000 trees planted across the community, improving the local environment.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/20 text-[#f7941d] rounded-full text-sm font-medium mb-6">
              Our Community
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Building Stronger Communities Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our vibrant community of change-makers, volunteers, and supporters working together to create positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Community Groups Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
              Community Groups
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Our Active Groups
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have established various community groups to address different needs and interests within our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {communityGroups.map((group, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                      <FaUsers className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e3a5f]">{group.title}</h3>
                      <span className="text-[#f7941d] text-sm font-medium">{group.members} members</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.activities.map((activity, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#2e7d32]/10 text-[#2e7d32] rounded-full text-xs font-medium"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/10 text-[#f7941d] rounded-full text-sm font-medium mb-4">
              Events
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Upcoming Events & Activities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our upcoming events and join us in making a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#1e3a5f] p-4 text-white">
                  <div className="flex items-center space-x-2 text-[#f7941d] mb-2">
                    <FaCalendarAlt />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 mb-3">
                    <FaMapMarkerAlt className="text-[#2e7d32]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#2e7d32]/10 text-[#2e7d32] rounded-full text-sm font-medium mb-4">
              Impact Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Stories of Change
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories of how our community programs have transformed lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-2xl p-6 text-white"
              >
                <FaHeart className="text-3xl text-[#f7941d] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{story.name}</h3>
                <p className="text-gray-300">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-[#2e7d32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Involved in Your Community
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                There are many ways you can contribute to community development. Whether through volunteering, donating, or participating in our programs, your involvement matters.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Volunteer for community projects',
                  'Join one of our community groups',
                  'Participate in events and workshops',
                  'Support youth education and training',
                  'Contribute to environmental initiatives',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-white">
                    <FaHandsHelping className="text-[#f7941d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2e7d32] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Become a Volunteer
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#f7941d] text-white rounded-lg font-semibold hover:bg-[#e8850f] transition-colors"
                >
                  Make a Donation
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Volunteer Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7941d] mb-2">100+</div>
                  <div className="text-white/80">Active Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7941d] mb-2">500+</div>
                  <div className="text-white/80">Hours Contributed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7941d] mb-2">20+</div>
                  <div className="text-white/80">Community Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7941d] mb-2">5000+</div>
                  <div className="text-white/80">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

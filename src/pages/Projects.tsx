import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaLeaf, FaHeart, FaHandsHelping, FaLightbulb, FaArrowRight, FaCheck } from 'react-icons/fa';

export function Projects() {
  const projects = [
    {
      icon: FaGraduationCap,
      title: 'Educational Scholarship Program',
      status: 'Ongoing',
      category: 'Education',
      description: 'Providing scholarships to underprivileged students to enable them complete their education from primary to tertiary level.',
      impact: '200+ students supported',
      color: 'bg-[#1e3a5f]',
    },
    {
      icon: FaUsers,
      title: 'Youth Skills Acquisition Center',
      status: 'Ongoing',
      category: 'Skills Development',
      description: 'A training center where young people learn vocational skills such as tailoring, carpentry, ICT, and more.',
      impact: '500+ youth trained',
      color: 'bg-[#2e7d32]',
    },
    {
      icon: FaLeaf,
      title: 'Green Community Initiative',
      status: 'Ongoing',
      category: 'Environment',
      description: 'Tree planting and environmental conservation project to combat climate change and beautify our community.',
      impact: '2000+ trees planted',
      color: 'bg-[#f7941d]',
    },
    {
      icon: FaHeart,
      title: 'Community Health Outreach',
      status: 'Ongoing',
      category: 'Health',
      description: 'Regular health screening, awareness campaigns, and medical support for community members.',
      impact: '1000+ beneficiaries',
      color: 'bg-[#1e3a5f]',
    },
    {
      icon: FaHandsHelping,
      title: 'Women Empowerment Program',
      status: 'Ongoing',
      category: 'Empowerment',
      description: 'Supporting women through skills training, micro-enterprise development, and financial literacy.',
      impact: '150+ women empowered',
      color: 'bg-[#2e7d32]',
    },
    {
      icon: FaLightbulb,
      title: 'Digital Literacy Program',
      status: 'Ongoing',
      category: 'Technology',
      description: 'Teaching basic computer skills and digital literacy to youth and community members.',
      impact: '300+ trained',
      color: 'bg-[#f7941d]',
    },
  ];

  const completedProjects = [
    {
      title: 'Back to School Campaign 2023',
      description: 'Provided school supplies and uniforms to 150 students at the start of the academic year.',
    },
    {
      title: 'Community Borehole Project',
      description: 'Constructed a borehole to provide clean water access to over 500 community members.',
    },
    {
      title: 'Youth Football Tournament',
      description: 'Organized a football competition bringing together 16 teams from the community.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/20 text-[#f7941d] rounded-full text-sm font-medium mb-6">
              Our Projects
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Creating Impact Through Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our ongoing and completed projects that are making a real difference in the lives of youth and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#2e7d32]/10 text-[#2e7d32] rounded-full text-sm font-medium mb-4">
              Active Projects
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Ongoing Initiatives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are our current projects that are actively creating impact in our communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`${project.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="text-4xl" />
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <span className="text-sm opacity-80">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#2e7d32] font-semibold text-sm">{project.impact}</span>
                    <button className="text-[#1e3a5f] hover:text-[#f7941d] transition-colors">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#f7941d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">6+</div>
              <div className="text-white/80">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/80">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
              Completed
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Successfully Completed Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A look at some of our past projects that have successfully achieved their objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#2e7d32]"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <FaCheck className="text-[#2e7d32] mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-[#1e3a5f]">{project.title}</h3>
                </div>
                <p className="text-gray-600 text-sm ml-7">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/10 text-[#f7941d] rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              How We Execute Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Identify Needs', desc: 'We assess community needs through research and consultation.' },
              { step: '02', title: 'Plan & Design', desc: 'We develop comprehensive project plans with clear objectives.' },
              { step: '03', title: 'Implement', desc: 'We execute projects with community involvement and support.' },
              { step: '04', title: 'Monitor & Evaluate', desc: 'We track progress and measure impact for continuous improvement.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Support Our Projects
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your contribution helps us expand our reach and impact more lives through our projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f7941d] text-white rounded-lg font-semibold hover:bg-[#e8850f] transition-colors"
            >
              Donate to a Project
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1e3a5f] transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

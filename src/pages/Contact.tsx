import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaClock } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      details: ['Umumazi Community', 'Nigeria'],
    },
    {
      icon: FaPhone,
      title: 'Phone Number',
      details: ['+234 XXX XXX XXXX', '+234 XXX XXX XXXX'],
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: ['info@umyidi.org', 'support@umyidi.org'],
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 5PM', 'Saturday: 10AM - 2PM'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/20 text-[#f7941d] rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-[#f7941d]/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-2xl text-[#f7941d]" />
                </div>
                <h3 className="font-semibold text-[#1e3a5f] mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl text-green-700">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="project">Project Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-[#1e3a5f] rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <p className="text-gray-300 mb-6">
                  Follow us on social media to stay updated on our activities, events, and impact stories.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-[#2e7d32] rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Volunteer With Us</h2>
                <p className="text-white/90 mb-6">
                  Want to contribute your time and skills to making a difference? Join our team of dedicated volunteers and be part of positive change in our community.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#f7941d] rounded-full"></span>
                    <span>Teaching and mentoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#f7941d] rounded-full"></span>
                    <span>Event organization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#f7941d] rounded-full"></span>
                    <span>Community outreach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#f7941d] rounded-full"></span>
                    <span>Administrative support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f7941d] rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Quick Response</h2>
                <p className="text-white/90 mb-4">
                  We aim to respond to all inquiries within 24-48 hours during business days.
                </p>
                <p className="text-white/90">
                  For urgent matters, please call us directly on our phone lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How can I donate to UMYIDI?',
                a: 'You can donate through our secure online payment system using Flutterwave. Visit our Donate page and choose your preferred donation amount.',
              },
              {
                q: 'How can I become a volunteer?',
                a: 'Fill out the contact form with "Volunteer Opportunity" as the subject, and our team will reach out to you with available opportunities.',
              },
              {
                q: 'Does UMYIDI accept corporate partnerships?',
                a: 'Yes! We welcome partnerships with organizations that share our vision. Contact us to discuss partnership opportunities.',
              },
              {
                q: 'How are donations used?',
                a: 'Donations are used directly to fund our programs including education scholarships, skills training, and community development initiatives.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-[#1e3a5f] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

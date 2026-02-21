import { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { FaHeart, FaGraduationCap, FaUsers, FaLeaf, FaHandHoldingHeart, FaCheck, FaShieldAlt, FaLock } from 'react-icons/fa';
import { useSiteContext, Payment } from '../context/SiteContext';

export function Donate() {
  const { settings, addPayment } = useSiteContext();
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [selectedProject, setSelectedProject] = useState('general');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const predefinedAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const projects = [
    { id: 'general', name: 'Where Most Needed' },
    { id: 'education', name: 'Education Scholarship Fund' },
    { id: 'skills', name: 'Skills Training Program' },
    { id: 'health', name: 'Community Health Outreach' },
    { id: 'environment', name: 'Environmental Conservation' },
  ];

  const getDonationAmount = () => {
    if (customAmount) return parseInt(customAmount);
    return selectedAmount || 0;
  };

  const txRef = `UMYIDI-${Date.now()}`;

  const config = {
    public_key: settings.flutterwavePublicKey || 'FLWPUBK_TEST-XXXXXXXXXXXXX-X',
    tx_ref: txRef,
    amount: getDonationAmount(),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd,banktransfer',
    customer: {
      email: donorInfo.email || 'donor@example.com',
      phone_number: donorInfo.phone || '',
      name: donorInfo.name || 'Anonymous Donor',
    },
    customizations: {
      title: 'UMYIDI Donation',
      description: `Donation to ${projects.find(p => p.id === selectedProject)?.name || 'UMYIDI'}`,
      logo: settings.logo || 'https://via.placeholder.com/100x100?text=UMYIDI',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleDonate = () => {
    if (!getDonationAmount() || getDonationAmount() < 100) {
      alert('Please enter a valid donation amount (minimum ₦100)');
      return;
    }

    if (!donorInfo.email) {
      alert('Please enter your email address');
      return;
    }

    setIsProcessing(true);

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        setIsProcessing(false);
        
        // Track the payment
        const payment: Payment = {
          id: response.transaction_id?.toString() || Date.now().toString(),
          txRef: response.tx_ref || txRef,
          amount: getDonationAmount(),
          currency: 'NGN',
          customerName: donorInfo.name || 'Anonymous Donor',
          customerEmail: donorInfo.email,
          customerPhone: donorInfo.phone,
          project: projects.find(p => p.id === selectedProject)?.name || 'General',
          status: response.status,
          date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        addPayment(payment);

        if (response.status === 'successful') {
          setShowSuccess(true);
          // Reset form
          setDonorInfo({ name: '', email: '', phone: '' });
          setCustomAmount('');
          setSelectedAmount(5000);
        }
        closePaymentModal();
      },
      onClose: () => {
        setIsProcessing(false);
      },
    });
  };

  const impactItems = [
    {
      icon: FaGraduationCap,
      amount: '₦5,000',
      impact: 'Provides school supplies for one student for a term',
    },
    {
      icon: FaUsers,
      amount: '₦25,000',
      impact: 'Sponsors vocational training for one youth',
    },
    {
      icon: FaLeaf,
      amount: '₦10,000',
      impact: 'Plants 50 trees in the community',
    },
    {
      icon: FaHandHoldingHeart,
      amount: '₦50,000',
      impact: 'Funds a full scholarship for one year',
    },
  ];

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-[#2e7d32] flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-4xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your generous donation has been received. You are making a real difference in the lives of youth and communities.
          </p>
          <p className="text-gray-600 mb-8">
            A confirmation email has been sent to your email address.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="px-8 py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#f7941d]/20 text-[#f7941d] rounded-full text-sm font-medium mb-6">
              Support Our Mission
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Make a Donation Today
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your contribution helps us empower youth, support education, and transform communities. Every donation makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Choose Your Donation</h2>

                {/* Donation Type Toggle */}
                <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === 'one-time'
                        ? 'bg-[#1e3a5f] text-white'
                        : 'text-gray-600 hover:text-[#1e3a5f]'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-[#1e3a5f] text-white'
                        : 'text-gray-600 hover:text-[#1e3a5f]'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Amount (NGN)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-4 rounded-xl font-semibold transition-all ${
                          selectedAmount === amount && !customAmount
                            ? 'bg-[#f7941d] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        ₦{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₦</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter custom amount"
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Project Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Direct Your Donation To
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                  >
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Donor Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent transition-all"
                  />
                </div>

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#f7941d] text-white rounded-xl font-bold text-lg hover:bg-[#e8850f] transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 shadow-lg"
                >
                  {isProcessing ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <FaHeart />
                      <span>
                        Donate ₦{getDonationAmount().toLocaleString()}
                        {donationType === 'monthly' ? '/month' : ''}
                      </span>
                    </>
                  )}
                </button>

                {/* Security Note */}
                <div className="mt-6 flex items-center justify-center space-x-4 text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <FaLock />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShieldAlt />
                    <span>Powered by Flutterwave</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1e3a5f] rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Your Impact</h3>
                <div className="space-y-6">
                  {impactItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-[#f7941d]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-xl text-[#f7941d]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#f7941d]">{item.amount}</div>
                        <p className="text-gray-300 text-sm">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2e7d32] rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Why Donate?</h3>
                <ul className="space-y-3">
                  {[
                    '100% of donations go to programs',
                    'Tax-deductible contributions',
                    'Transparent fund utilization',
                    'Regular impact reports',
                    'Direct community benefit',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCheck className="text-[#f7941d]" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">Other Ways to Give</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Bank Transfer</h4>
                    <p className="text-gray-600">Contact us for bank details</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">In-Kind Donations</h4>
                    <p className="text-gray-600">Books, equipment, supplies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Corporate Giving</h4>
                    <p className="text-gray-600">CSR partnerships welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#1e3a5f]">Trusted & Secure Donations</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <FaShieldAlt className="text-2xl text-[#2e7d32]" />
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaLock className="text-2xl text-[#2e7d32]" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaCheck className="text-2xl text-[#2e7d32]" />
              <span>Verified Organization</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

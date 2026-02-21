import { useState } from 'react';
import { useSiteContext, HeroImage, TeamMember, JourneyItem } from '../context/SiteContext';
import { FaCog, FaImages, FaUsers, FaCreditCard, FaSignOutAlt, FaLock, FaSave, FaPlus, FaTrash, FaHome, FaEdit, FaRoad, FaBullseye } from 'react-icons/fa';

export function Admin() {
  const { settings, updateSettings, isAdmin, login, logout } = useSiteContext();
  const [activeTab, setActiveTab] = useState('general');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  // Form states
  const [generalForm, setGeneralForm] = useState({
    siteName: settings.siteName,
    tagline: settings.tagline,
    logo: settings.logo,
    favicon: settings.favicon,
    flutterwavePublicKey: settings.flutterwavePublicKey,
    contactEmail: settings.contactEmail,
    contactPhone: settings.contactPhone,
    contactAddress: settings.contactAddress,
    facebookUrl: settings.facebookUrl,
    twitterUrl: settings.twitterUrl,
    instagramUrl: settings.instagramUrl,
    linkedinUrl: settings.linkedinUrl,
  });

  const [heroForm, setHeroForm] = useState({
    heroTitle: settings.heroTitle,
    heroSubtitle: settings.heroSubtitle,
    heroDescription: settings.heroDescription,
    heroImages: [...settings.heroImages],
  });

  const [missionForm, setMissionForm] = useState({
    missionStatement: settings.missionStatement,
    missionImage: settings.missionImage,
  });

  const [journeyForm, setJourneyForm] = useState({
    journeyTitle: settings.journeyTitle,
    journeyDescription: settings.journeyDescription,
    journeyItems: [...settings.journeyItems],
  });

  const [teamForm, setTeamForm] = useState({
    teamMembers: [...settings.teamMembers],
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setLoginError('');
    } else {
      setLoginError('Invalid password');
    }
  };

  const showSaveMessage = () => {
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const saveGeneralSettings = () => {
    updateSettings(generalForm);
    showSaveMessage();
  };

  const saveHeroSettings = () => {
    updateSettings(heroForm);
    showSaveMessage();
  };

  const saveMissionSettings = () => {
    updateSettings(missionForm);
    showSaveMessage();
  };

  const saveJourneySettings = () => {
    updateSettings(journeyForm);
    showSaveMessage();
  };

  const saveTeamSettings = () => {
    updateSettings(teamForm);
    showSaveMessage();
  };

  // Hero image handlers
  const addHeroImage = () => {
    const newImage: HeroImage = {
      id: Date.now().toString(),
      url: '',
      alt: '',
    };
    setHeroForm(prev => ({
      ...prev,
      heroImages: [...prev.heroImages, newImage],
    }));
  };

  const updateHeroImage = (id: string, field: keyof HeroImage, value: string) => {
    setHeroForm(prev => ({
      ...prev,
      heroImages: prev.heroImages.map(img =>
        img.id === id ? { ...img, [field]: value } : img
      ),
    }));
  };

  const removeHeroImage = (id: string) => {
    setHeroForm(prev => ({
      ...prev,
      heroImages: prev.heroImages.filter(img => img.id !== id),
    }));
  };

  // Journey item handlers
  const addJourneyItem = () => {
    const newItem: JourneyItem = {
      id: Date.now().toString(),
      image: '',
      title: '',
      description: '',
    };
    setJourneyForm(prev => ({
      ...prev,
      journeyItems: [...prev.journeyItems, newItem],
    }));
  };

  const updateJourneyItem = (id: string, field: keyof JourneyItem, value: string) => {
    setJourneyForm(prev => ({
      ...prev,
      journeyItems: prev.journeyItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const removeJourneyItem = (id: string) => {
    setJourneyForm(prev => ({
      ...prev,
      journeyItems: prev.journeyItems.filter(item => item.id !== id),
    }));
  };

  // Team member handlers
  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: '',
      role: '',
      department: '',
      image: '',
      bio: '',
    };
    setTeamForm(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, newMember],
    }));
  };

  const updateTeamMember = (id: string, field: keyof TeamMember, value: string) => {
    setTeamForm(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map(member =>
        member.id === id ? { ...member, [field]: value } : member
      ),
    }));
  };

  const removeTeamMember = (id: string) => {
    setTeamForm(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter(member => member.id !== id),
    }));
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#1e3a5f] flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-2xl text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">Admin Login</h1>
            <p className="text-gray-600 mt-2">Enter your password to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin}>
            {loginError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
                {loginError}
              </div>
            )}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Default password: umyidi2024
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'general', label: 'General', icon: FaCog },
    { id: 'hero', label: 'Hero Section', icon: FaHome },
    { id: 'mission', label: 'Mission', icon: FaBullseye },
    { id: 'journey', label: 'Journey', icon: FaRoad },
    { id: 'team', label: 'Team', icon: FaUsers },
    { id: 'images', label: 'Media', icon: FaImages },
    { id: 'payments', label: 'Payments', icon: FaCreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">UMYIDI Admin Panel</h1>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white/80 hover:text-white text-sm">
              View Site
            </a>
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {saveMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl text-green-700 flex items-center">
            <FaSave className="mr-2" />
            {saveMessage}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#1e3a5f] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* General Settings */}
              {activeTab === 'general' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">General Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                        <input
                          type="text"
                          value={generalForm.siteName}
                          onChange={(e) => setGeneralForm({ ...generalForm, siteName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                        <input
                          type="text"
                          value={generalForm.tagline}
                          onChange={(e) => setGeneralForm({ ...generalForm, tagline: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Logo URL</label>
                        <input
                          type="url"
                          value={generalForm.logo}
                          onChange={(e) => setGeneralForm({ ...generalForm, logo: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          placeholder="https://example.com/logo.png"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Favicon URL</label>
                        <input
                          type="url"
                          value={generalForm.favicon}
                          onChange={(e) => setGeneralForm({ ...generalForm, favicon: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          placeholder="https://example.com/favicon.ico"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-[#f7941d]/10 rounded-xl">
                      <h3 className="font-semibold text-[#1e3a5f] mb-3 flex items-center">
                        <FaCreditCard className="mr-2" />
                        Flutterwave Integration
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Flutterwave Public Key</label>
                        <input
                          type="text"
                          value={generalForm.flutterwavePublicKey}
                          onChange={(e) => setGeneralForm({ ...generalForm, flutterwavePublicKey: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          placeholder="FLWPUBK_TEST-XXXXXXXXXXXXX-X"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Get your public key from the Flutterwave dashboard
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-[#1e3a5f] mb-4">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            value={generalForm.contactEmail}
                            onChange={(e) => setGeneralForm({ ...generalForm, contactEmail: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input
                            type="text"
                            value={generalForm.contactPhone}
                            onChange={(e) => setGeneralForm({ ...generalForm, contactPhone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          value={generalForm.contactAddress}
                          onChange={(e) => setGeneralForm({ ...generalForm, contactAddress: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-[#1e3a5f] mb-4">Social Media Links</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                          <input
                            type="url"
                            value={generalForm.facebookUrl}
                            onChange={(e) => setGeneralForm({ ...generalForm, facebookUrl: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                          <input
                            type="url"
                            value={generalForm.twitterUrl}
                            onChange={(e) => setGeneralForm({ ...generalForm, twitterUrl: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                          <input
                            type="url"
                            value={generalForm.instagramUrl}
                            onChange={(e) => setGeneralForm({ ...generalForm, instagramUrl: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                          <input
                            type="url"
                            value={generalForm.linkedinUrl}
                            onChange={(e) => setGeneralForm({ ...generalForm, linkedinUrl: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={saveGeneralSettings}
                      className="px-6 py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors flex items-center space-x-2"
                    >
                      <FaSave />
                      <span>Save General Settings</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Hero Section Settings */}
              {activeTab === 'hero' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Hero Section Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
                      <input
                        type="text"
                        value={heroForm.heroSubtitle}
                        onChange={(e) => setHeroForm({ ...heroForm, heroSubtitle: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
                      <input
                        type="text"
                        value={heroForm.heroTitle}
                        onChange={(e) => setHeroForm({ ...heroForm, heroTitle: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hero Description</label>
                      <textarea
                        value={heroForm.heroDescription}
                        onChange={(e) => setHeroForm({ ...heroForm, heroDescription: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent resize-none"
                      />
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[#1e3a5f]">Background Images (Slideshow)</h3>
                        <button
                          onClick={addHeroImage}
                          className="flex items-center space-x-2 px-4 py-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#256d2a] transition-colors"
                        >
                          <FaPlus />
                          <span>Add Image</span>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {heroForm.heroImages.map((image, index) => (
                          <div key={image.id} className="p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-medium text-gray-700">Image {index + 1}</span>
                              <button
                                onClick={() => removeHeroImage(image.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm text-gray-600 mb-1">Image URL</label>
                                <input
                                  type="url"
                                  value={image.url}
                                  onChange={(e) => updateHeroImage(image.id, 'url', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                                  placeholder="https://example.com/image.jpg"
                                />
                              </div>
                              <div>
                                <label className="block text-sm text-gray-600 mb-1">Alt Text</label>
                                <input
                                  type="text"
                                  value={image.alt}
                                  onChange={(e) => updateHeroImage(image.id, 'alt', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                                  placeholder="Image description"
                                />
                              </div>
                            </div>
                            {image.url && (
                              <div className="mt-3">
                                <img
                                  src={image.url}
                                  alt={image.alt}
                                  className="h-24 w-40 object-cover rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160x96?text=Invalid+URL';
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={saveHeroSettings}
                      className="px-6 py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors flex items-center space-x-2"
                    >
                      <FaSave />
                      <span>Save Hero Settings</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Mission Settings */}
              {activeTab === 'mission' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Mission Statement Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                      <textarea
                        value={missionForm.missionStatement}
                        onChange={(e) => setMissionForm({ ...missionForm, missionStatement: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mission Image URL</label>
                      <input
                        type="url"
                        value={missionForm.missionImage}
                        onChange={(e) => setMissionForm({ ...missionForm, missionImage: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                        placeholder="https://example.com/mission-image.jpg"
                      />
                      {missionForm.missionImage && (
                        <div className="mt-3">
                          <img
                            src={missionForm.missionImage}
                            alt="Mission"
                            className="h-40 w-64 object-cover rounded-xl"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/256x160?text=Invalid+URL';
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <button
                      onClick={saveMissionSettings}
                      className="px-6 py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors flex items-center space-x-2"
                    >
                      <FaSave />
                      <span>Save Mission Settings</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Journey Settings */}
              {activeTab === 'journey' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Journey Thus Far Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                      <input
                        type="text"
                        value={journeyForm.journeyTitle}
                        onChange={(e) => setJourneyForm({ ...journeyForm, journeyTitle: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Section Description</label>
                      <textarea
                        value={journeyForm.journeyDescription}
                        onChange={(e) => setJourneyForm({ ...journeyForm, journeyDescription: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent resize-none"
                      />
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[#1e3a5f]">Journey Items (3 columns)</h3>
                        <button
                          onClick={addJourneyItem}
                          className="flex items-center space-x-2 px-4 py-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#256d2a] transition-colors"
                        >
                          <FaPlus />
                          <span>Add Item</span>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {journeyForm.journeyItems.map((item, index) => (
                          <div key={item.id} className="p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-medium text-gray-700">Item {index + 1}</span>
                              <button
                                onClick={() => removeJourneyItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-sm text-gray-600 mb-1">Image URL</label>
                                <input
                                  type="url"
                                  value={item.image}
                                  onChange={(e) => updateJourneyItem(item.id, 'image', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                                  placeholder="https://example.com/image.jpg"
                                />
                              </div>
                              <div>
                                <label className="block text-sm text-gray-600 mb-1">Title</label>
                                <input
                                  type="text"
                                  value={item.title}
                                  onChange={(e) => updateJourneyItem(item.id, 'title', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Description</label>
                              <textarea
                                value={item.description}
                                onChange={(e) => updateJourneyItem(item.id, 'description', e.target.value)}
                                rows={2}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent resize-none"
                              />
                            </div>
                            {item.image && (
                              <div className="mt-3">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="h-24 w-40 object-cover rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160x96?text=Invalid+URL';
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={saveJourneySettings}
                      className="px-6 py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors flex items-center space-x-2"
                    >
                      <FaSave />
                      <span>Save Journey Settings</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Team Settings */}
              {activeTab === 'team' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Team Members</h2>
                  
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <button
                        onClick={addTeamMember}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#256d2a] transition-colors"
                      >
                        <FaPlus />
                        <span>Add Team Member</span>
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {teamForm.teamMembers.map((member, index) => (
                        <div key={member.id} className="p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-gray-700">Team Member {index + 1}</span>
                            <button
                              onClick={() => removeTeamMember(member.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Name</label>
                              <input
                                type="text"
                                value={member.name}
                                onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Role/Position</label>
                              <input
                                type="text"
                                value={member.role}
                                onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Department</label>
                              <input
                                type="text"
                                value={member.department}
                                onChange={(e) => updateTeamMember(member.id, 'department', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Image URL</label>
                              <input
                                type="url"
                                value={member.image}
                                onChange={(e) => updateTeamMember(member.id, 'image', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent"
                                placeholder="https://example.com/photo.jpg"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Bio</label>
                            <textarea
                              value={member.bio}
                              onChange={(e) => updateTeamMember(member.id, 'bio', e.target.value)}
                              rows={2}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f7941d] focus:border-transparent resize-none"
                            />
                          </div>
                          <div className="flex items-center space-x-4 mt-3">
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="h-16 w-16 object-cover rounded-full"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64x64?text=No+Image';
                                }}
                              />
                            ) : (
                              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2e7d32] flex items-center justify-center text-white font-bold">
                                {member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'TM'}
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-[#1e3a5f]">{member.name || 'Team Member'}</p>
                              <p className="text-sm text-[#f7941d]">{member.role || 'Role'}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={saveTeamSettings}
                      className="px-6 py-3 bg-[#f7941d] text-white rounded-xl font-semibold hover:bg-[#e8850f] transition-colors flex items-center space-x-2"
                    >
                      <FaSave />
                      <span>Save Team Settings</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Media Settings */}
              {activeTab === 'images' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Media & Images</h2>
                  
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h3 className="font-semibold text-[#1e3a5f] mb-4 flex items-center">
                        <FaImages className="mr-2" />
                        Image Management Tips
                      </h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Use high-quality images (recommended: 1920x1080 for hero images)</li>
                        <li>• Host images on reliable CDN services like Cloudinary, Imgur, or your own server</li>
                        <li>• Use HTTPS URLs for security</li>
                        <li>• Optimize images for web to improve loading speed</li>
                        <li>• For team member photos, use square images (recommended: 400x400)</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-[#1e3a5f]/5 rounded-xl">
                      <h3 className="font-semibold text-[#1e3a5f] mb-4">Quick Links to Edit Images</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button
                          onClick={() => setActiveTab('hero')}
                          className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <span>Hero Background Images</span>
                          <FaEdit className="text-[#f7941d]" />
                        </button>
                        <button
                          onClick={() => setActiveTab('mission')}
                          className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <span>Mission Image</span>
                          <FaEdit className="text-[#f7941d]" />
                        </button>
                        <button
                          onClick={() => setActiveTab('journey')}
                          className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <span>Journey Images</span>
                          <FaEdit className="text-[#f7941d]" />
                        </button>
                        <button
                          onClick={() => setActiveTab('team')}
                          className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <span>Team Member Photos</span>
                          <FaEdit className="text-[#f7941d]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payments */}
              {activeTab === 'payments' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Payment Tracking</h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[#1e3a5f] rounded-xl p-6 text-white">
                        <h3 className="text-sm font-medium text-white/70">Total Donations</h3>
                        <p className="text-3xl font-bold mt-2">
                          ₦{settings.payments.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-[#2e7d32] rounded-xl p-6 text-white">
                        <h3 className="text-sm font-medium text-white/70">Successful Payments</h3>
                        <p className="text-3xl font-bold mt-2">
                          {settings.payments.filter(p => p.status === 'successful').length}
                        </p>
                      </div>
                      <div className="bg-[#f7941d] rounded-xl p-6 text-white">
                        <h3 className="text-sm font-medium text-white/70">Total Donors</h3>
                        <p className="text-3xl font-bold mt-2">
                          {new Set(settings.payments.map(p => p.customerEmail)).size}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-[#1e3a5f] mb-4">Recent Payments</h3>
                      {settings.payments.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No payments recorded yet</p>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Donor</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Project</th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {settings.payments.map((payment) => (
                                <tr key={payment.id} className="border-b hover:bg-gray-100">
                                  <td className="py-3 px-4 text-sm">{payment.date}</td>
                                  <td className="py-3 px-4">
                                    <div>
                                      <p className="font-medium text-sm">{payment.customerName}</p>
                                      <p className="text-xs text-gray-500">{payment.customerEmail}</p>
                                    </div>
                                  </td>
                                  <td className="py-3 px-4 font-semibold text-[#1e3a5f]">
                                    {payment.currency} {payment.amount.toLocaleString()}
                                  </td>
                                  <td className="py-3 px-4 text-sm">{payment.project}</td>
                                  <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      payment.status === 'successful'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                      {payment.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

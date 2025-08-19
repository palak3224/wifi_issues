import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MessageCircle, Phone, Mail, CheckCircle, Wifi } from 'lucide-react';

export default function WiFiTroubleshooter() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userContact, setUserContact] = useState({ name: '', email: '', phone: '' });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 5;

  const questions = {
    1: {
      title: "Which WiFi/Internet provider are you having issues with?",
      subtitle: "Select your internet service provider",
      options: [
        { 
          id: 'verizon', 
          label: 'Verizon', 
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDhIN8srPBBhZY6WrlG09NU24jFukmFiMuTlH-S8eiBr-78-x8GOg9phcQzmyW-ypLF4&usqp=CAU' 
        },
        { 
          id: 'att', 
          label: 'AT&T', 
          logo: 'https://mma.prnewswire.com/media/355192/at_t_inc__logo.jpg' 
        },
        { 
          id: 'tmobile', 
          label: 'T-Mobile', 
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSoTfWr2vV_9nRdaoWDdHQELSrRod0IDiaw&s' 
        },
        { 
          id: 'xfinity', 
          label: 'Xfinity', 
          logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/uuzfrjd9i9udpqjpvung' 
        },
        { id: 'other', label: 'Other Provider', logo: 'https://cdn-icons-png.flaticon.com/512/1828/1828833.png' }
      ]
    },
    2: {
      title: "What is your main WiFi/Internet issue?",
      subtitle: "Select the primary problem you're experiencing",
      options: [
        { id: 'no_internet', label: 'No internet connection at all', icon: '🚫' },
        { id: 'slow_speed', label: 'Very slow internet speeds', icon: '🐌' },
        { id: 'intermittent', label: 'Connection keeps dropping', icon: '📶' },
        { id: 'cant_connect', label: 'Can\'t connect to WiFi network', icon: '🔐' },
        { id: 'limited_range', label: 'Weak signal/limited range', icon: '📡' },
        { id: 'device_issues', label: 'Specific devices won\'t connect', icon: '📱' },
        { id: 'router_problems', label: 'Router/modem not working', icon: '📦' },
        { id: 'other_issue', label: 'Other WiFi/Internet issue', icon: '❓' }
      ]
    },
    3: {
      title: "When did this problem start?",
      subtitle: "Help us understand the timeline of your issue",
      options: [
        { id: 'just_now', label: 'Just started (within last hour)', icon: '⏰' },
        { id: 'today', label: 'Started today', icon: '📅' },
        { id: 'few_days', label: 'Started a few days ago', icon: '📆' },
        { id: 'week_plus', label: 'Over a week ago', icon: '⏳' },
        { id: 'after_change', label: 'After equipment/setup change', icon: '🔧' },
        { id: 'always_issue', label: 'Always been an issue', icon: '😤' },
        { id: 'other_timeline', label: 'Other timeline', icon: '❓' }
      ]
    },
    4: {
      title: "Let us help you resolve this issue",
      subtitle: "Provide your contact information so our tech support can assist you",
      isForm: true
    },
    5: {
      title: "We'll get your WiFi working again!",
      subtitle: "Our technical support team will contact you shortly",
      isResult: true
    }
  };

  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
    
    // Auto-advance for single-select questions
    setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    }, 500);
  };

  const handleContactSubmit = () => {
    if (userContact.name && userContact.email) {
      setCurrentStep(5);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getSelectedOption = (questionId) => {
    const answer = answers[questionId];
    if (!answer) return null;
    
    return questions[questionId].options.find(opt => opt.id === answer);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 lg:px-8"
      >
        {/* Header */}
        <motion.div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wifi className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl lg:text-3xl font-bold text-black">
              WiFi Troubleshooter
            </h1>
          </div>
          <p className="text-gray-600">
            Answer a few quick questions to get personalized help with your internet connection
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {Math.min(currentStep, totalSteps)} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((Math.min(currentStep, totalSteps) / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(currentStep, totalSteps) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question Cards */}
        <AnimatePresence mode="wait">
          {currentStep <= 3 && (
            <motion.div
              key={currentStep}
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl mb-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                  {questions[currentStep]?.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {questions[currentStep]?.subtitle}
                </p>
              </div>

              <div className="grid gap-4 max-w-3xl mx-auto">
                {questions[currentStep]?.options.map((option, index) => {
                  const isSelected = answers[currentStep] === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      variants={optionVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(currentStep, option.id)}
                      className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? 'border-blue-400 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 shadow-md'
                      }`}
                    >
                      <div className={`${isSelected ? 'scale-110' : ''} transition-transform`}>
                        {currentStep === 1 ? (
                          <img 
                            src={option.logo} 
                            alt={option.label}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <span className="text-2xl">{option.icon}</span>
                        )}
                        {currentStep === 1 && (
                          <span className="text-2xl hidden">🌐</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className={`font-semibold text-lg ${
                          isSelected ? 'text-blue-800' : 'text-gray-800'
                        }`}>
                          {option.label}
                        </span>
                      </div>
                      <ChevronRight className={`w-6 h-6 ${
                        isSelected ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>

                <div className="text-sm text-gray-500">
                  {answers[currentStep] ? 'Automatically advancing...' : 'Select an option to continue'}
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Form */}
          {currentStep === 4 && (
            <motion.div
              key="contact-form"
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                  {questions[4].title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {questions[4].subtitle}
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={userContact.name}
                    onChange={(e) => setUserContact({...userContact, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={userContact.email}
                    onChange={(e) => setUserContact({...userContact, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors text-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={userContact.phone}
                    onChange={(e) => setUserContact({...userContact, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors text-lg"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="bg-blue-100 border border-blue-300 rounded-2xl p-6">
                  <p className="text-blue-800 font-semibold mb-2">
                    📋 Issue Summary:
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Provider: {getSelectedOption(1)?.label || 'Not specified'}</li>
                    <li>• Issue: {getSelectedOption(2)?.label || 'Not specified'}</li>
                    <li>• Timeline: {getSelectedOption(3)?.label || 'Not specified'}</li>
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                  </button>

                  <button
                    onClick={handleContactSubmit}
                    disabled={!userContact.name || !userContact.email}
                    className="flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Help Now
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {currentStep === 5 && (
            <motion.div
              key="results"
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  Our Agent Will Reach You Soon!
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Thanks {userContact.name}! We've received your WiFi issue report for 
                  {answers[1] && ` ${getSelectedOption(1)?.label}`}. Our technical support team 
                  will contact you shortly to resolve your connection problem.
                </p>
                <div className="bg-blue-100 border border-blue-300 rounded-2xl p-6 mb-8">
                  <p className="text-lg font-semibold text-blue-800 mb-2">
                    ⚡ Priority Support Available
                  </p>
                  <p className="text-blue-700">
                    Need immediate assistance? Our 24/7 technical support team is ready to 
                    help you get back online in minutes, not hours.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid md:grid-cols-2 gap-6 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div>Call Now - 24/7</div>
                    <div className="text-sm font-normal opacity-90">Instant WiFi Support</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div>Live Chat - 24/7</div>
                    <div className="text-sm font-normal opacity-90">Message Our Experts</div>
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-4 mb-6">
                  <p className="text-yellow-800 font-semibold">
                    🔧 Expert WiFi Technicians Standing By
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Our certified network specialists resolve 95% of WiFi issues within 15 minutes.
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Available 24/7 • Average Response Time: Under 2 Minutes • Success Rate: 95%+
                </p>
              </motion.div>

              <div className="flex justify-center items-center mt-8">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setAnswers({});
                    setUserContact({ name: '', email: '', phone: '' });
                  }}
                  className="text-gray-500 hover:text-gray-700 underline flex items-center gap-2"
                >
                  Start New Troubleshoot
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
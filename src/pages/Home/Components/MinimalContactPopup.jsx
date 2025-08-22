import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, User, CheckCircle, Sparkles, Zap } from 'lucide-react';

export default function MinimalContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Show popup after 2 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("📩 Form Submitted:", formData);

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbx7ewhHUsKBDWoepPeIK9qmRfK2zRerrzBa58eKuqSdm6ofLGylzODFSBki-NO3FKc/exec";

      // Prepare data for x-www-form-urlencoded
      const formParams = new URLSearchParams();
      formParams.append("name", formData.name);
      formParams.append("email", formData.email);
      formParams.append("phone", formData.phone || "");
      formParams.append("provider", ""); // empty for now
      formParams.append("issue", "");    // empty for now

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formParams.toString(),
        });

        console.log("📡 Google Script Response:", response);

        if (response.ok) {
          console.log("✅ Data saved to Google Sheet");
          setIsSubmitted(true);

          // Auto-close after 4 seconds
          setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", phone: "" });
              setErrors({});
            }, 300);
          }, 4000);
        } else {
          console.error("❌ Failed to save data. Status:", response.status);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("⚠️ Error submitting to Google Sheets:", error);
        alert("Network error! Please try again.");
      }
    }
  };


  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-sm w-full relative overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 opacity-60"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-200/50 cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <X className="w-4 h-4 text-gray-600 pointer-events-none" />
            </button>

            {!isSubmitted ? (
              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="relative mx-auto mb-4"
                  >
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl p-3 w-14 h-14 mx-auto shadow-lg">
                      <Phone className="w-8 h-8 text-white mx-auto" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2"
                  >
                    Need Expert Help?
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-gray-600 font-medium"
                  >
                    Get instant assistance from our specialists
                  </motion.p>
                </div>

                {/* Form */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  {/* Name Field */}
                  <div>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Your full name *"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-3 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl text-sm focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                          errors.name 
                            ? 'border-red-400 focus:border-red-500 shadow-red-100' 
                            : 'border-gray-200/50 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100/50'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-xs mt-1 font-medium"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="email"
                        placeholder="Your email address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-3 py-3 bg-white/70 backdrop-blur-sm border-2 rounded-xl text-sm focus:outline-none transition-all duration-200 placeholder-gray-500 ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-500 shadow-red-100' 
                            : 'border-gray-200/50 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-100/50'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-xs mt-1 font-medium"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="tel"
                        placeholder="Phone number (optional)"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-3 py-3 bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl text-sm focus:border-blue-400 focus:outline-none focus:shadow-lg focus:shadow-blue-100/50 transition-all duration-200 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-200/50 mt-5 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Get Instant Help
                    </span>
                  </motion.button>

                  {/* Trust Indicators */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-4"
                  >
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500 bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-200/30">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="font-medium">Free • No Spam • 2min Response</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              // Success Message
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="relative z-10 p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="relative mx-auto mb-4"
                >
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-3 w-14 h-14 mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white mx-auto" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1"
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-3"
                >
                  Thanks {formData.name}! 🎉
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-gray-600 font-medium mb-4"
                >
                  Our expert will contact you within 2 minutes
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 rounded-xl p-3 mb-4 backdrop-blur-sm"
                >
                  <p className="text-blue-800 text-xs font-semibold flex items-center justify-center gap-1">
                    <Phone className="w-3 h-3" />
                    Calling: {formData.phone || formData.email}
                  </p>
                </motion.div>

                <motion.div
                  className="text-xs text-gray-400 font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨ Closing automatically...
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
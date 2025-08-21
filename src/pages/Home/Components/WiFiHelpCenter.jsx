import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Router, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WiFiHelpCenter() {
  const [activeSection, setActiveSection] = useState('connection-problems');
  const sectionRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    {
      id: 'connection-problems',
      title: 'Connection Problems',
      icon: Wifi,
      description: 'For users who can\'t connect to WiFi or have no internet access.',
      articles: [
        {
          title: 'No internet connection despite WiFi showing connected',
          content: 'If your device shows connected to WiFi but can\'t access the internet, try restarting your router by unplugging it for 30 seconds. Also check if other devices have the same issue to determine if it\'s device-specific.'
        },
        {
          title: 'Can\'t find or connect to your WiFi network',
          content: 'Make sure your WiFi network is broadcasting (not hidden) and within range. Check that you\'re entering the correct network password. If the network doesn\'t appear, try restarting your device\'s WiFi adapter.'
        },
        {
          title: 'Frequent disconnections from WiFi network',
          content: 'Intermittent disconnections can be caused by interference, weak signal, or power management settings. Move closer to the router, check for interference from other devices, and disable power saving mode on your WiFi adapter.'
        }
      ]
    },
    {
      id: 'speed-performance',
      title: 'Speed & Performance Issues',
      icon: Router,
      description: 'For problems related to slow speeds, buffering, and poor performance.',
      articles: [
        {
          title: 'Internet is extremely slow or pages won\'t load',
          content: 'Run a speed test to check your actual speeds against what you\'re paying for. Clear your browser cache, close unnecessary applications, and try connecting via ethernet cable to test if it\'s a WiFi-specific issue.'
        },
        {
          title: 'Video streaming keeps buffering or cutting out',
          content: 'Streaming issues are often due to bandwidth limitations or network congestion. Try lowering video quality, pausing other downloads, or upgrading to a higher speed plan if multiple devices are competing for bandwidth.'
        },
        {
          title: 'WiFi works but is much slower than expected',
          content: 'WiFi speeds are typically slower than ethernet. Check your distance from the router, look for interference from microwaves or other 2.4GHz devices, and consider upgrading to a 5GHz network if available.'
        }
      ]
    },
    {
      id: 'setup-configuration',
      title: 'Setup & Configuration',
      icon: Shield,
      description: 'For router setup, network configuration, and technical issues.',
      articles: [
        {
          title: 'How to set up a new router or modem',
          content: 'Connect your modem to the router via ethernet cable, plug in power, and wait 2-3 minutes for full startup. Use the setup wizard through your browser (usually 192.168.1.1) or the manufacturer\'s mobile app to configure your network name and password.'
        },
        {
          title: 'Router lights showing red or orange (error states)',
          content: 'Red or orange lights typically indicate connection issues. Check all cable connections, ensure your internet service is active, and try power cycling your modem and router. Contact your ISP if the issue persists after basic troubleshooting.'
        },
        {
          title: 'Changing WiFi password or network settings',
          content: 'Access your router\'s admin panel by typing its IP address (usually 192.168.1.1 or 192.168.0.1) in your browser. Login with admin credentials and navigate to WiFi or Wireless settings to change your network name, password, or security settings.'
        }
      ]
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      const sections = Object.keys(sectionRefs.current);
      let currentSection = sections[0];

      sections.forEach(sectionId => {
        const element = sectionRefs.current[sectionId];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            WiFi Issues Help Center
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Find solutions to common WiFi and internet problems and get back online quickly
          </p>
        </motion.div>

        {/* Mobile Navigation */}
        {isMobile && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Quick Navigation</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => scrollToSection(category.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${activeSection === category.id
                          ? 'bg-black text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{category.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Desktop Sidebar - Sticky */}
          {!isMobile && (
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <motion.button
                          key={category.id}
                          onClick={() => scrollToSection(category.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 text-left ${activeSection === category.id
                              ? 'bg-black text-white shadow-lg'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold mb-1">{category.title}</h4>
                            <p className={`text-sm ${activeSection === category.id ? 'text-gray-200' : 'text-gray-500'}`}>
                              {category.description}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Content Area */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="space-y-12">
              {categories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    ref={(el) => (sectionRefs.current[category.id] = el)}
                    className="scroll-mt-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg"
                    >
                      {/* Category Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-black text-white p-3 rounded-xl">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
                            {categoryIndex + 1}. {category.title}
                          </h2>
                          <p className="text-gray-600 text-lg">{category.description}</p>
                        </div>
                      </div>

                      {/* Articles */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800">Articles/Problems:</h3>
                        {category.articles.map((article, articleIndex) => (
                          <motion.div
                            key={articleIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: articleIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="border-l-4 border-black pl-6 py-2"
                          >
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                              • {article.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {article.content}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Contact Support CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Still Need Help?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn&apos;t find a solution to your WiFi problem, our technical support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
  href="tel:+18188397963"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg inline-block text-center"
>
  Contact Support
</motion.a>

            
          </div>
        </motion.div>
        <div className="mt-8 text-center">
          <Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
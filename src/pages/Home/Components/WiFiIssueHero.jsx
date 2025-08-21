import { motion } from 'framer-motion';
import { WifiOff, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WiFiIssueHero() {
  const [wifiSignal, setWifiSignal] = useState(3);
  
  // Simulate weak/fluctuating WiFi signal
  useEffect(() => {
    const interval = setInterval(() => {
      setWifiSignal(Math.floor(Math.random() * 4)); // 0-3 signal strength
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const wifiTextVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const signalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "backOut"
      }
    }
  };

  const SignalBar = ({ height, delay, isActive }) => (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ 
        scaleY: isActive ? 1 : 0.3,
        opacity: isActive ? 1 : 0.3
      }}
      transition={{ 
        duration: 0.3,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }}
      className={`${height} w-3 sm:w-4 rounded-t-sm origin-bottom ${
        isActive ? 'bg-red-500' : 'bg-gray-300'
      }`}
    />
  );

  return (
    <div className="pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-blue-100/30 to-pink-100/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-blue-200/20 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 w-full items-center max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
            >
              Having Problem 
              <br />
              <span className="text-gray-800">With WiFi?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg"
            >
              Don't worry, we're here to help you get back online.
              <br />
              Our tech support team is ready to fix your connection immediately.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Help
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
             >
                Connect Now
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - WiFi Issue Visual */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              {/* Background effects */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-red-100/30 rounded-full scale-150 blur-3xl"
              ></motion.div>
              
              {/* Main WiFi Disruption Scene */}
              <div className="relative flex flex-col items-center justify-center space-y-8 lg:space-y-12">
                
                {/* Large WiFi Router */}
                <motion.div
                  variants={wifiTextVariants}
                  className="relative z-10"
                >
                  {/* Router body - much larger */}
                  <div className="w-40 h-24 sm:w-48 sm:h-28 lg:w-56 lg:h-32 xl:w-64 xl:h-36 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl relative shadow-2xl border-2 border-gray-700">
                    {/* Router brand/logo area */}
                    <div className="absolute top-3 left-4 right-4 h-1 bg-gray-600 rounded-full"></div>
                    <div className="absolute top-5 left-4 w-8 h-3 bg-gray-600 rounded"></div>
                    
                    {/* Router status lights - larger */}
                    <div className="absolute top-6 sm:top-8 right-4 flex space-x-2">
                      <motion.div 
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full shadow-lg"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full shadow-lg"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-lg"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </div>
                    
                    {/* Ethernet ports */}
                    <div className="absolute bottom-4 left-4 flex space-x-1">
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-gray-600 rounded-sm"></div>
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-gray-600 rounded-sm"></div>
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-gray-600 rounded-sm"></div>
                      <div className="w-3 h-2 sm:w-4 sm:h-3 bg-yellow-500 rounded-sm"></div>
                    </div>
                    
                    {/* Multiple Antennas */}
                    <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-1.5 h-12 sm:h-16 bg-gray-700 rounded-full"></div>
                        <div className="w-4 h-3 bg-gray-700 rounded-full -mt-1"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-1.5 h-10 sm:h-14 bg-gray-700 rounded-full"></div>
                        <div className="w-4 h-3 bg-gray-700 rounded-full -mt-1"></div>
                      </div>
                    </div>
                    
                    {/* Power LED */}
                    <motion.div
                      className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Broken WiFi Waves */}
                <motion.div
                  variants={signalVariants}
                  className="relative"
                >
                  {/* WiFi wave arcs - broken/glitched */}
                  <div className="relative">
                    <motion.svg 
                      width="200" 
                      height="120" 
                      className="sm:w-64 sm:h-32 lg:w-80 lg:h-40"
                      viewBox="0 0 200 120"
                    >
                      {/* Outer wave - broken */}
                      <motion.path
                        d="M 20 60 Q 100 20 180 60"
                        fill="none"
                        stroke="rgb(239 68 68)"
                        strokeWidth="4"
                        strokeDasharray="10 5"
                        animate={{ 
                          strokeDashoffset: [0, 20],
                          opacity: [0.3, 0.8, 0.3] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                      />
                      
                      {/* Middle wave - glitching */}
                      <motion.path
                        d="M 40 60 Q 100 35 160 60"
                        fill="none"
                        stroke="rgb(239 68 68)"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        animate={{ 
                          strokeDashoffset: [0, 16],
                          opacity: [0.5, 1, 0.2, 1] 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                      />
                      
                      {/* Inner wave - intermittent */}
                      <motion.path
                        d="M 60 60 Q 100 45 140 60"
                        fill="none"
                        stroke="rgb(239 68 68)"
                        strokeWidth="2"
                        strokeDasharray="6 3"
                        animate={{ 
                          strokeDashoffset: [0, 12],
                          opacity: [0.7, 0.2, 0.9, 0.1] 
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                      />
                    </motion.svg>
                    
                    {/* Central WiFi icon with X overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        <WifiOff 
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-red-500" 
                          strokeWidth={2.5}
                        />
                        
                        {/* Glitch effect overlay */}
                        <motion.div
                          className="absolute inset-0 bg-red-500/20 rounded-full blur-sm"
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Error message with glitch effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center relative"
                >
                  <motion.div
                    animate={{ 
                      x: [0, -2, 2, 0],
                      textShadow: ["0 0 0px rgba(239,68,68,0)", "2px 0 0px rgba(239,68,68,0.8)", "-2px 0 0px rgba(59,130,246,0.8)", "0 0 0px rgba(239,68,68,0)"]
                    }}
                    transition={{ 
                      duration: 0.2, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut" 
                    }}
                    className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-black mb-2"
                  >
                    CONNECTION FAILED
                  </motion.div>
                  
                  <div className="bg-gray-900 text-green-400 font-mono text-xs sm:text-sm px-4 py-2 rounded border border-gray-700 max-w-xs mx-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Error: Network timeout</span>
                    </div>
                    <div className="mt-1 text-gray-500">
                      Signal: {wifiSignal}/4 | Ping: ∞ms
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}
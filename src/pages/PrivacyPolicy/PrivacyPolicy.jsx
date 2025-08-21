import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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

//   scrollto top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 lg:px-8"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
            <Link to="/">
            
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Help Center</span>
          </button>
            </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl lg:text-5xl font-bold text-black">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          variants={itemVariants}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you use our WiFi troubleshooting service at <span className="font-semibold text-blue-600">diagnose.wifishield.online</span>, we collect information that you voluntarily provide to us, including:
                </p>
                <ul className="text-gray-600 leading-relaxed mb-4 ml-6">
                  <li className="mb-2">• Personal information such as your name, email address, and phone number</li>
                  <li className="mb-2">• Information about your internet service provider and connection issues</li>
                  <li className="mb-2">• Technical information about your device and network for troubleshooting purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-gray-600 leading-relaxed mb-4 ml-6">
                  <li className="mb-2">• Provide technical support and resolve your WiFi connectivity issues</li>
                  <li className="mb-2">• Contact you regarding your support request and provide updates</li>
                  <li className="mb-2">• Improve our troubleshooting tools and enhance user experience</li>
                  <li className="mb-2">• Comply with legal obligations and protect our legitimate interests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="text-gray-600 leading-relaxed mb-4 ml-6">
                  <li className="mb-2">• With service providers who assist us in delivering technical support</li>
                  <li className="mb-2">• When required by law or to protect our rights and safety</li>
                  <li className="mb-2">• In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use encryption, secure data transmission, and restrict access to your information to authorized personnel only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="text-gray-600 leading-relaxed mb-4 ml-6">
                  <li className="mb-2">• Access, update, or correct your personal information</li>
                  <li className="mb-2">• Request deletion of your data, subject to legal retention requirements</li>
                  <li className="mb-2">• Opt out of non-essential communications</li>
                  <li className="mb-2">• Contact us with questions about this Privacy Policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy. Support case data is typically retained for 90 days unless longer retention is required for legal or business purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website <span className="font-semibold text-blue-600">diagnose.wifishield.online</span> may use cookies and similar tracking technologies to improve your experience. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at the top of this page and notify you through email or a prominent notice on <span className="font-semibold text-blue-600">diagnose.wifishield.online</span>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us through:
                </p>
                <ul className="text-gray-600 leading-relaxed mb-4 ml-6">
                  <li className="mb-2">• Our support team at <span className="font-semibold text-blue-600">diagnose.wifishield.online</span></li>
                  <li className="mb-2">• Email our privacy team directly</li>
                  <li className="mb-2">• Use the live chat feature on our website</li>
                </ul>
              </section>

              <div className="bg-blue-100 border border-blue-300 rounded-2xl p-6 mt-8">
                <p className="text-blue-800 font-semibold mb-2">
                  📋 Important Notice:
                </p>
                <p className="text-blue-700 text-sm">
                  By using our WiFi troubleshooting service at <span className="font-semibold">diagnose.wifishield.online</span>, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
                </p>
              </div>
            </div>
          </div>
        </motion.div>



        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            This Privacy Policy applies to all users of <span className="font-medium text-blue-600">diagnose.wifishield.online</span> and our WiFi troubleshooting services.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
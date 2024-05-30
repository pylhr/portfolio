import Link from "next/link";
import { FiMail } from 'react-icons/fi';
import { FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center bg-gray-100 rounded-lg p-6">
            <FiLinkedin className="text-3xl text-gray-600 mr-4" />
            <div>
              <a href="https://www.linkedin.com/in/priyanshu-lohar-13559515b/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-blue-600">Connect with me on LinkedIn</a>
              <p className="text-gray-600">Join my professional network on LinkedIn</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-6">
            <FiInstagram className="text-3xl text-gray-600 mr-4" />
            <div>
              <a href="https://www.instagram.com/pylhr/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-purple-600">Follow me on Instagram</a>
              <p className="text-gray-600">Stay updated with my latest posts and stories</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-6">
            <FiYoutube className="text-3xl text-gray-600 mr-4" />
            <div>
              <a href="https://www.youtube.com/channel/UCtqc-WbuuiSC_l9yVlpRNBw" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-red-600">Subscribe to my YouTube channel</a>
              <p className="text-gray-600">Watch tutorials, vlogs, and more</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-6">
            <FiMail className="text-3xl text-gray-600 mr-4" />
            <div>
              <a href="mailto:priyanshulohar1@gmail.com" className="text-lg font-semibold text-gray-800 hover:text-green-600">Send me an email</a>
              <p className="text-gray-600">Get in touch with me via email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

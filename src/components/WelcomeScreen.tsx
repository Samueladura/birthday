import { motion } from 'framer-motion';

type WelcomeScreenProps = {
  onUnlock: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onUnlock }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
    <motion.h1 
      className="text-4xl md:text-5xl font-semibold mb-6 text-center text-gray-800"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5 }}
    >
      A Surprise for Jewel
    </motion.h1>
    <motion.button 
      onClick={onUnlock}
      className="px-6 py-3 bg-white text-pink-600 font-medium rounded-lg shadow-lg hover:bg-pink-50 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Unlock Surprise
    </motion.button>
  </div>
);

export default WelcomeScreen;

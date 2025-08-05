import React from 'react';
import { motion } from 'framer-motion';
import giftImage from '../assets/giftImage.png';

interface GreetingScreenProps {
  onGiftClick: () => void;
}

const GreetingScreen: React.FC<GreetingScreenProps> = ({ onGiftClick }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
    <motion.h1 
      className="text-4xl md:text-5xl font-bold text-pink-700 mb-8 text-center"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, type: 'spring', bounce: 0.6 }}
    >
      Happy Birthday, Jewel!
    </motion.h1>
    <motion.img 
      src={giftImage}
      alt="Gift Box"
      className="w-48 h-48 md:w-64 md:h-64 cursor-pointer drop-shadow-lg"
      onClick={onGiftClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </div>
);

export default GreetingScreen;

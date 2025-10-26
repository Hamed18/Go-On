import { Link } from "react-router-dom";
import { FaBullhorn, FaTimes, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      delay,
    },
  },
});

const Headline = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide component when not visible

  return (
    <motion.div
      variants={fadeIn("up", 0.05)}
      initial="hidden"
      animate="show"
      className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-red-700/80 to-blue-700/80 py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg"
    >
      {/* Close button */}
      {/* <motion.button
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        animate="show"
        className="absolute top-2 right-2 md:right-4 text-white hover:text-gray-300 transition"
        onClick={() => setIsVisible(false)}
        aria-label="Close"
      >
        <FaTimes className="text-xl md:text-2xl ml-2 space-x-2 md:space-x-4" />
      </motion.button> */}

      {/* Message with icon */}
      <motion.div
        variants={fadeIn("left", 0.12)}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3"
      >
        <motion.span
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
        >
          <FaBullhorn className="text-yellow-300 text-2xl md:text-4xl" />
        </motion.span>
        <motion.h3
          variants={fadeIn("up", 0.17)}
          initial="hidden"
          animate="show"
          className="text-sm md:text-xl font-semibold md:font-bold"
        >
          Go On - Chittagong eSports Showdown!
        </motion.h3>
      </motion.div>

      {/* Register Now button */}
      <div className="flex justify-center mt-2">
        <Link to="/enroll">
          <motion.button
            variants={fadeIn("right", 0.19)}
            initial="hidden"
            animate="show"
            className="flex items-center text-sm md:text-xl font-semibold md:font-bold bg-yellow-400 hover:bg-red-400 text-violet-500 px-3 md:px-4 py-2 md:py-3 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Register Now
            <FaArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Headline;

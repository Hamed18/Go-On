import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; 
import { Link } from "react-router-dom";

const JoinBattle = () => {
  return (
    <section className="JoinBattle max-w-6xl mx-auto px-4 mb-16">
      
      {/* Animated Headline */}
      <motion.h2
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="text-2xl md:text-4xl font-bold text-center mb-6 mt-6"
      >
        Are you ready to prove yourself?
      </motion.h2>

      {/* Video */}
      <motion.div
        variants={fadeIn("up", 0.85)}
        initial="hidden"
        whileInView="show"
        className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/GCWkjdE8TQw?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1"
          title="Go On eSports Teaser"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </motion.div>

      {/* Join Button */}
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center mt-8 mb-6"
      >
        <Link to="/enroll">
          <button className="buttonStyle">
            Join the Battle
          </button>
        </Link>
      </motion.div>
      
    </section>
  );
};

export default JoinBattle;

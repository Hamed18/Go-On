import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // adjust the path if needed

const Enroll = () => {
  return (
    <section className="enroll">
    

      {/* Video Section */}
      <motion.section
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="rounded-2xl overflow-hidden shadow-lg mb-16 max-w-6xl mx-auto px-4"
      >
        {/* Animated Headline */}
        <motion.h2
          variants={fadeIn("up", 0.85)}
          initial="hidden"
          whileInView="show"
          className="text-2xl md:text-4xl font-bold text-center mb-6 mt-6"
        >
          Are you ready to prove yourself?
        </motion.h2>

        {/* Video */}
        <div className="relative w-full h-[350px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GCWkjdE8TQw?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1"
            title="Go On eSports Teaser"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </div>
      </motion.section>
    </section>
  );
};

export default Enroll;

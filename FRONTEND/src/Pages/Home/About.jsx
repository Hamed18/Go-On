import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="px-4 sm:px-6 lg:px-8 lg:16 flex flex-col md:flex-row gap-4 items-center md:items-start py-8 md:py-12"
      id="about"
    >
      {/* Left Side - Content */}
      <motion.div
        variants={fadeIn('left', 0.3)}
        className="text-center md:text-left md:w-1/2 space-y-4 p-2"
      >
        <motion.h3
          variants={textVariant(0.4)}
          className="font-bold text-lg md:text-xl"
        >
          Wonder what Go On is all about?
        </motion.h3>
        <motion.h2
          variants={textVariant(0.5)}
          className="font-bold text-2xl lg:text-3xl md:text-3xl"
        >
          Upgrade Yourself : Compete to win
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.6)}
          className="text-lg md:text-xl"
        >
          Go On is a new esports tournament organizer founded in 2025 with one clear goal: to give players the stage they deserve.
          Every match we host is built to challenge your skills, highlight your talent, and bring out the best in you and your team.
          We believe every player has a shot at greatness, and our tournaments are designed to give you the opportunity to prove it.
          Whether you’re competing for glory, growth, or the thrill of the game, Go On is here to push you forward.
        </motion.p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        variants={fadeIn('right', 0.3)}
        className="relative md:w-1/2"
      >
        <motion.img
          variants={fadeIn('up', 0.4)}
          src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263233/HomePagePic3_wdl3we.jpg"
          alt="Description of image"
          className="rounded-xl w-full"
        />
        <motion.div
          variants={fadeIn('up', 0.5)}
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-xl px-4 py-2"
        >
          <p className="text-white text-center text-lg md:text-xl font-semibold">
            A united and vibrant community with the goal of fostering esports.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import {
  FaGamepad,
  FaUsers,
  FaGift,
  FaMobileAlt,
  FaChild,
  FaArrowRight,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CurrentFest = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="current-fest"
      className="bg-gradient-to-r from-red-700/90 to-blue-700/90 py-12 px-4 sm:px-6 lg:px-8 text-white"
    >
      {/* Header */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <motion.h1
          variants={textVariant(0.4)}
          className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-3"
        >
          <MdLocationOn className="text-yellow-300" />
          Go On – Chittagong eSports Showdown 2025
          <GiPartyPopper className="text-yellow-300" />
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
        />
        <motion.p
          variants={fadeIn("up", 0.6)}
          className="mt-6 text-lg md:text-xl font-semibold text-gray-100"
        >
          Experience Chittagong’s biggest gaming festival — where competition,
          community, and excitement unite!
        </motion.p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        variants={fadeIn("up", 0.7)}
        className="max-w-5xl mx-auto bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-10 space-y-10"
      >
        {/* What is it */}
        <motion.div variants={fadeIn("up", 0.8)}>
          <motion.h2
            variants={textVariant(0.9)}
            className="text-2xl font-bold text-center text-violet-600 flex items-center justify-center gap-2 mb-6"
          >
            <FaGamepad className="text-violet-500" />
            What is it? 🤔
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <FaUsers className="text-blue-400" />,
                text: (
                  <>
                    Chittagong is set to host one of its most thrilling gaming
                    events — <strong>Go On – eSports Showdown 2025!</strong>{" "}
                    Bringing together students, local pros, and Free Fire fans
                    for an unforgettable competitive experience with a{" "}
                    <span className="text-yellow-500 font-bold">1,50,000৳</span>{" "}
                    prize pool! 💰
                  </>
                ),
              },
              {
                icon: <FaGamepad className="text-violet-500" />,
                text: (
                  <>
                    It’s more than competition — it’s a platform for gamers to
                    prove their skill 🏆, grow confidence, and experience the
                    thrill of true eSports. We aim to build a culture where
                    gaming empowers youth and opens new opportunities 🚀.
                  </>
                ),
              },
              {
                icon: <FaMobileAlt className="text-green-500" />,
                text: (
                  <>
                    The spotlight will shine on <strong>Free Fire 🔥</strong>,
                    one of Bangladesh’s favorite battle royale titles. Teams
                    will fight through fast-paced matches to claim glory 🥇 and
                    earn recognition among Chittagong’s finest players.
                  </>
                ),
              },
              {
                icon: <RiTeamLine className="text-pink-500" />,
                text: (
                  <>
                    Beyond the battlefields, it’s about connection 🤝 — students
                    and young enthusiasts gathering to celebrate gaming,
                    friendship, and teamwork. Cheer, play, and feel the
                    excitement live 🙌!
                  </>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn(
                  index % 2 === 0 ? "left" : "right",
                  1 + index * 0.1
                )}
                className="bg-gray-50 rounded-lg shadow-md p-5 hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{item.icon}</div>
                  <p className="font-semibold text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          variants={fadeIn("up", 1.4)}
          className="text-center border-t border-gray-200 pt-10"
        >
          <motion.h2
            variants={textVariant(1.45)}
            className="text-2xl font-bold text-violet-600 flex items-center justify-center gap-2 mb-6"
          >
            <FaGift className="text-yellow-400" />
            Prerequisites 📋
          </motion.h2>

          <motion.ul
            variants={fadeIn("up", 1.5)}
            className="space-y-4 text-gray-700 font-semibold max-w-xl mx-auto text-left"
          >
            <li className="flex items-center gap-3">
              <FaGamepad className="text-violet-500 text-xl" /> Ground: Battle
              Ground 🏟️
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="text-blue-400 text-xl" /> Format: Each team
              has 5 players (1 substitute) 👥
            </li>
            <li className="flex items-center gap-3">
              <FaChild className="text-pink-400 text-xl" /> Age requirement: 11+
              🧒
            </li>
            <li className="flex items-center gap-3">
              <FaMobileAlt className="text-green-500 text-xl" /> Only mobile
              players allowed 📱
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        variants={fadeIn("up", 1.7)}
        className="text-center mt-16 text-gray-100 max-w-3xl mx-auto"
      >
        <motion.h3
          variants={textVariant(1.8)}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          🎮 Ready to Join the Showdown?
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 1.9)}
          className="text-lg font-medium mb-6"
        >
          Whether you’re a player or a fan, this is your moment to be part of
          something electrifying. Join us and make history in Chittagong’s
          eSports scene!
        </motion.p>
        <div className="flex justify-center mt-6">
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
    </motion.section>
  );
};

export default CurrentFest;

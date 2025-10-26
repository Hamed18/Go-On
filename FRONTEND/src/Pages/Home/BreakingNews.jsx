import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaBullhorn, FaTrophy, FaUniversity, FaStar } from "react-icons/fa";

const BreakingNews = () => {
  return (
    <div className="flex my-4 md:my-6 items-center px-4 sm:px-6 lg:px-8">
      <Marquee pauseOnHover={true} speed={75}>
        <Link className="mr-12 text-2xl md:text-3xl font-bold flex items-center" to="/">
          <FaBullhorn className="text-blue-500 mr-2" />
          Welcome to Go On.
        </Link>
        <Link className="mr-12 text-2xl md:text-3xl font-bold flex items-center" to="/">
          <FaTrophy className="text-yellow-500 mr-2" />
          Go On is a new esports tournament organizer founded in 2025 in the heart of port city Chittagong.
        </Link>
        {/* <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaUniversity className="text-green-500 mr-2" />
          Welcome to Premier University Debating Society.
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          One of the prestigious debate clubs in the heart of port city Chittagong...
        </Link> */}
        <Link className="mr-12 text-2xl md:text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          A great esports event's coming next!
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TeamRegistrationForm from "../Enroll/TeamRegistrationForm";
import Footer from "@/Shared/Footer";

const UserDash = () => {
  return (
    <div className="pt-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold">User Dashboard</h3>
        <Link to="/">
          <Button className="gap-2">Go To Home</Button>
        </Link>
      </div>
      <div className="rounded-md border"></div>
      <div>
        <TeamRegistrationForm/>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UserDash;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const ManageUsers = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all teams from backend
  const fetchTeams = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/team-registration", {
        withCredentials: true,
      });
      setTeams(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch teams:", err);
      const msg = err.response?.data?.message || err.message || "Something went wrong!";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold">Manage Teams</h3>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading teams...</p>
      ) : teams.length === 0 ? (
        <p className="text-gray-500">No teams registered yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team._id}
              className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 mb-3">
                {team.teamLogo && (
                  <img
                    src={`http://localhost:4000/${team.teamLogo}`}
                    alt={team.teamFullName}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                )}
                <div>
                  <h4 className="text-lg font-semibold">{team.teamFullName}</h4>
                  <p className="text-sm text-gray-500">{team.teamShortName}</p>
                </div>
              </div>

              <div className="mt-2">
                <h5 className="font-medium text-gray-700 mb-1">Players:</h5>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  {team.players?.map((player, idx) => (
                    <li key={idx}>
                      <span className="font-semibold">{player.role}:</span> {player.fullName} (
                      {player.inGameName} | UID: {player.uid})
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                Registered at: {new Date(team.submittedAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageUsers;

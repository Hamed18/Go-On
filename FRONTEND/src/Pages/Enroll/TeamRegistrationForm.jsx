import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import React, { useState } from "react";
import Enroll from "./Enroll";

export default function TeamRegistrationForm() {
  const initialPlayer = { fullName: "", inGameName: "", uid: "" };
  const [teamFullName, setTeamFullName] = useState("");
  const [teamShortName, setTeamShortName] = useState("");
  const [players, setPlayers] = useState([
    { ...initialPlayer },
    { ...initialPlayer },
    { ...initialPlayer },
    { ...initialPlayer },
    { ...initialPlayer },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const inputClass = (error) =>
    `w-full rounded-lg border px-3 py-2 bg-gray-50 text-gray-900 placeholder-gray-400 
     focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 
     transition-colors duration-200 ${error ? "border-red-400" : "border-gray-300"}`;

  function handlePlayerChange(index, field, value) {
    setPlayers((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  }

  function validate() {
    const err = {};
    if (!teamFullName.trim()) err.teamFullName = "Team full name is required.";
    if (!teamShortName.trim()) err.teamShortName = "Team short name is required.";

    players.forEach((p, i) => {
      const base = `player${i + 1}`;
      if (!p.fullName.trim()) err[`${base}_fullName`] = "Full name required.";
      if (!p.inGameName.trim()) err[`${base}_inGameName`] = "In-game name required.";
      if (!p.uid.trim()) err[`${base}_uid`] = "In-game UID required.";
    });

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    const payload = {
      teamFullName,
      teamShortName,
      players: players.map((p, i) => ({
        role: i === 0 ? "IGL" : `Player ${i + 1}`,
        ...p,
      })),
      submittedAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:4000/api/team-registration",
        payload,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Team registered successfully!");
        console.log("✅ Server response:", res.data);
        setSubmitted(true);

        setTeamFullName("");
        setTeamShortName("");
        setPlayers([
          { ...initialPlayer },
          { ...initialPlayer },
          { ...initialPlayer },
          { ...initialPlayer },
          { ...initialPlayer },
        ]);
        setErrors({});
      }
    } catch (err) {
      console.error("❌ Registration failed:", err);
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong while submitting!";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Enroll />

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Team Registration</h1>
        <p className="text-sm text-gray-500 mb-6">
          Fill out the team and player details below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Team Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Team Full Name</label>
              <input
                value={teamFullName}
                onChange={(e) => setTeamFullName(e.target.value)}
                className={inputClass(errors.teamFullName)}
                placeholder="Example: The Phoenix Squad"
              />
              {errors.teamFullName && (
                <p className="text-xs text-red-500 mt-1">{errors.teamFullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Team Name (Short)</label>
              <input
                value={teamShortName}
                onChange={(e) => setTeamShortName(e.target.value)}
                className={inputClass(errors.teamShortName)}
                placeholder="Example: PHX"
              />
              {errors.teamShortName && (
                <p className="text-xs text-red-500 mt-1">{errors.teamShortName}</p>
              )}
            </div>
          </div>

          <hr className="border-t" />

          {/* Player Info */}
          <div className="space-y-4">
            {players.map((player, idx) => (
              <fieldset
                key={idx}
                className="p-4 rounded-lg border border-gray-100 bg-gray-50 shadow-sm"
              >
                <legend className="px-2 text-sm font-semibold">
                  {idx === 0 ? "IGL (Captain) — Player 1" : `Player ${idx + 1}`}
                </legend>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Full name</label>
                    <input
                      value={player.fullName}
                      onChange={(e) =>
                        handlePlayerChange(idx, "fullName", e.target.value)
                      }
                      className={inputClass(errors[`player${idx + 1}_fullName`])}
                      placeholder="e.g. Hamed Hasan"
                    />
                    {errors[`player${idx + 1}_fullName`] && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors[`player${idx + 1}_fullName`]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">In-Game Name</label>
                    <input
                      value={player.inGameName}
                      onChange={(e) =>
                        handlePlayerChange(idx, "inGameName", e.target.value)
                      }
                      className={inputClass(errors[`player${idx + 1}_inGameName`])}
                      placeholder="e.g. H4MED"
                    />
                    {errors[`player${idx + 1}_inGameName`] && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors[`player${idx + 1}_inGameName`]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">In-Game UID</label>
                    <input
                      value={player.uid}
                      onChange={(e) =>
                        handlePlayerChange(idx, "uid", e.target.value)
                      }
                      className={inputClass(errors[`player${idx + 1}_uid`])}
                      placeholder="e.g. 123456789"
                    />
                    {errors[`player${idx + 1}_uid`] && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors[`player${idx + 1}_uid`]}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-lg font-medium text-white shadow-sm w-full md:w-auto ${
                loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>

            <button
              type="button"
              onClick={() => {
                setTeamFullName("");
                setTeamShortName("");
                setPlayers([
                  { ...initialPlayer },
                  { ...initialPlayer },
                  { ...initialPlayer },
                  { ...initialPlayer },
                  { ...initialPlayer },
                ]);
                setErrors({});
                setSubmitted(false);
              }}
              className="px-4 py-2 rounded-lg border font-medium w-full md:w-auto"
            >
              Reset
            </button>

            {submitted && (
              <p className="text-sm text-green-700 mt-2 md:mt-0">
                Registration submitted successfully ✅
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // adjust the path if needed
// import Enroll from "../Enroll"; // adjust path if necessary
import React, { useState } from "react";
import Enroll from "./Enroll";

export default function TeamRegistrationForm() {
  const initialPlayer = { fullName: "", inGameName: "", uid: "" };
  const [teamFullName, setTeamFullName] = useState("");
  const [teamShortName, setTeamShortName] = useState("");
  const [players, setPlayers] = useState([
    { ...initialPlayer }, // IGL (player 1)
    { ...initialPlayer }, // player 2
    { ...initialPlayer }, // player 3
    { ...initialPlayer }, // player 4
    { ...initialPlayer }, // player 5
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    const payload = {
      teamFullName,
      teamShortName,
      players: players.map((p, i) => ({ role: i === 0 ? "IGL" : `Player ${i + 1}`, ...p })),
      submittedAt: new Date().toISOString(),
    };

    console.log("Submitting payload:", payload);
    setSubmitted(true);
  }

  return (
    <>
      {/* Enroll Section */}
      <Enroll />

      {/* Team Registration Form */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Team Registration</h1>
        <p className="text-sm text-gray-500 mb-6">Fill out the team and player details below.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Team Full Name</label>
              <input
                value={teamFullName}
                onChange={(e) => setTeamFullName(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 ${errors.teamFullName ? 'border-red-400' : 'border-gray-200'}`}
                placeholder="Example: The Phoenix Squad"
              />
              {errors.teamFullName && <p className="text-xs text-red-500 mt-1">{errors.teamFullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Team Name (Short)</label>
              <input
                value={teamShortName}
                onChange={(e) => setTeamShortName(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 ${errors.teamShortName ? 'border-red-400' : 'border-gray-200'}`}
                placeholder="Example: PHX"
              />
              {errors.teamShortName && <p className="text-xs text-red-500 mt-1">{errors.teamShortName}</p>}
            </div>
          </div>

          <hr className="border-t" />

          <div className="space-y-4">
            {players.map((player, idx) => (
              <fieldset key={idx} className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                <legend className="px-2 text-sm font-semibold">{idx === 0 ? 'IGL (Captain) — Player 1' : `Player ${idx + 1}`}</legend>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Full name</label>
                    <input
                      value={player.fullName}
                      onChange={(e) => handlePlayerChange(idx, 'fullName', e.target.value)}
                      className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 ${errors[`player${idx+1}_fullName`] ? 'border-red-400' : 'border-gray-200'}`}
                      placeholder="e.g. Hamed Hasan"
                    />
                    {errors[`player${idx+1}_fullName`] && <p className="text-xs text-red-500 mt-1">{errors[`player${idx+1}_fullName`]}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">In-Game Name</label>
                    <input
                      value={player.inGameName}
                      onChange={(e) => handlePlayerChange(idx, 'inGameName', e.target.value)}
                      className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 ${errors[`player${idx+1}_inGameName`] ? 'border-red-400' : 'border-gray-200'}`}
                      placeholder="e.g. H4MED"
                    />
                    {errors[`player${idx+1}_inGameName`] && <p className="text-xs text-red-500 mt-1">{errors[`player${idx+1}_inGameName`]}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">In-Game UID</label>
                    <input
                      value={player.uid}
                      onChange={(e) => handlePlayerChange(idx, 'uid', e.target.value)}
                      className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 ${errors[`player${idx+1}_uid`] ? 'border-red-400' : 'border-gray-200'}`}
                      placeholder="e.g. 123456789"
                    />
                    {errors[`player${idx+1}_uid`] && <p className="text-xs text-red-500 mt-1">{errors[`player${idx+1}_uid`]}</p>}
                  </div>
                </div>
              </fieldset>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 shadow-sm"
            >
              Submit Registration
            </button>

            <button
              type="button"
              onClick={() => {
                setTeamFullName("");
                setTeamShortName("");
                setPlayers([ { ...initialPlayer }, { ...initialPlayer }, { ...initialPlayer }, { ...initialPlayer }, { ...initialPlayer }]);
                setErrors({});
                setSubmitted(false);
              }}
              className="px-4 py-2 rounded-lg border font-medium"
            >
              Reset
            </button>

            {submitted && <p className="text-sm text-green-700">Registration submitted successfully (check console for payload).</p>}
          </div>
        </form>

      </div>
    </>
  );
}

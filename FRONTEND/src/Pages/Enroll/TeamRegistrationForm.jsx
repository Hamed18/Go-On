import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; 

export default function TeamRegistrationForm() {
  const initialPlayer = { fullName: "", inGameName: "", uid: "" };
  const [teamFullName, setTeamFullName] = useState("");
  const [teamShortName, setTeamShortName] = useState("");
  const [players, setPlayers] = useState(Array(5).fill({ ...initialPlayer }));
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState(null);

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
    setServerMessage(null);
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
      const res = await axios.post("http://localhost:4000/api/team-registration", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
        toast.success("✅ Team registered successfully!");
        setServerMessage({ type: "success", text: "Team registered successfully!" });

        // Reset form
        setTeamFullName("");
        setTeamShortName("");
        setPlayers(Array(5).fill({ ...initialPlayer }));
        setErrors({});
      }
    } catch (err) {
      const status = err.response?.status;
      let msg = "Something went wrong!";
      if (status === 400) msg = "Duplicate UID detected! One or more players already registered.";
      else if (status === 500) msg = "Server error — please try again later.";
      else if (err.response?.data?.message) msg = err.response.data.message;

      toast.error(`❌ ${msg}`);
      setServerMessage({ type: "error", text: msg });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
        {/* First Banner Section */}
      <motion.section
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        className="relative bg-indigo-700 text-white text-center px-6 py-16 rounded-2xl shadow-md sm:mb-12 md:mb-16 overflow-hidden"
      >
        {/* Background Gaming Image */}
        <motion.div
          variants={fadeIn("up", 0.71)}
          className="absolute inset-0 opacity-20"
          initial="hidden"
          whileInView="show"
        >
          <motion.img
            variants={fadeIn("up", 0.715)}
            initial="hidden"
            whileInView="show"
            src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263229/HomePagePic1_erz15a.jpg"
            alt="Gaming event"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeIn("up", 0.72)}
          initial="hidden"
          whileInView="show"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeIn("up", 0.73)}
            initial="hidden"
            whileInView="show"
            className="text-2xl md:text-4xl font-bold mb-6"
          >
            Enrollment for{" "}
            <span className="text-yellow-300">
              Go On - Chittagong eSports Showdown 2025
            </span>{" "}
            is Coming!
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.74)}
            initial="hidden"
            whileInView="show"
            className="italic text-lg md:text-xl font-medium"
          >
            Stay connected and gear up for the ultimate gaming showdown.
          </motion.p>
        </motion.div>
      </motion.section>
      <ToastContainer position="top-right" autoClose={4000} />

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
              {errors.teamFullName && <p className="text-xs text-red-500">{errors.teamFullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Team Name (Short)</label>
              <input
                value={teamShortName}
                onChange={(e) => setTeamShortName(e.target.value)}
                className={inputClass(errors.teamShortName)}
                placeholder="Example: PHX"
              />
              {errors.teamShortName && <p className="text-xs text-red-500">{errors.teamShortName}</p>}
            </div>
          </div>

          <hr className="border-t" />

          {/* Player Info */}
          <div className="space-y-4">
            {players.map((player, idx) => (
              <fieldset key={idx} className="p-4 rounded-lg border bg-gray-50 shadow-sm">
                <legend className="px-2 text-sm font-semibold">
                  {idx === 0 ? "IGL (Captain) — Player 1" : `Player ${idx + 1}`}
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  {["fullName", "inGameName", "uid"].map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-medium mb-1">{field}</label>
                      <input
                        value={player[field]}
                        onChange={(e) => handlePlayerChange(idx, field, e.target.value)}
                        className={inputClass(errors[`player${idx + 1}_${field}`])}
                      />
                      {errors[`player${idx + 1}_${field}`] && (
                        <p className="text-xs text-red-500">{errors[`player${idx + 1}_${field}`]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          {/* Buttons & server message */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-lg text-white ${
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
                setPlayers(Array(5).fill({ ...initialPlayer }));
                setErrors({});
                setServerMessage(null);
              }}
              className="px-4 py-2 rounded-lg border"
            >
              Reset
            </button>
          </div>

          {serverMessage && (
            <p className={`mt-4 text-sm ${serverMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {serverMessage.text}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

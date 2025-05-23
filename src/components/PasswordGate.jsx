import React, { useState } from "react";

function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_SITE_PASSWORD) {
      setUnlocked(true);

      setTimeout(() => {
        const el = document.querySelector("#trailhead");
        if (el){
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    else {
      alert("Incorrect password");
    }
  };

  if (unlocked) return children;

  return (
    <div className="min-h-screen flex items-start justify-center px-6 pt-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-8 w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Enter Password</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PasswordGate;
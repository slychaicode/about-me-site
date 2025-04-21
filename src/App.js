import PasswordGate from "./components/PasswordGate";
import Basecamp from "./components/Basecamp";
import Gear from "./components/Gear";
import AscentOne from "./components/AscentOne";
import AscentTwo from "./components/AscentTwo";
import AscentThree from "./components/AscentThree";
import AscentFour from "./components/AscentFour";
import Summit from "./components/Summit";
import Trailhead from "./components/Trailhead";

import { motion } from "framer-motion";
import { useState } from "react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";


function App() {

  const [unlockedSections, setUnlockedSections] = useState(["trailhead"]);

  const unlockSection = (id) => {
    if(!unlockedSections.includes(id)){
      setUnlockedSections((prev) => [...prev, id]);
    }
  };

  return (
    <PasswordGate>
        <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 text-white px-6 py-16 space-y-32">

          {unlockedSections.includes("summit") && (
            <section id="summit">
              <Summit /> 
            </section>
          )}

          {unlockedSections.includes("ascent-4") && (
            <section id="ascent-4">
              <AscentFour unlockNext={() => unlockSection("summit")} /> 
            </section>
          )}

          {unlockedSections.includes("ascent-3") && (
            <section id="ascent-3">
              <AscentThree unlockNext={() => unlockSection("ascent-4")} /> 
            </section>
          )}

          {unlockedSections.includes("ascent-2") && (
            <section id="ascent-2">
              <AscentTwo unlockNext={() => unlockSection("ascent-3")} /> 
            </section>
          )}

          {unlockedSections.includes("ascent-1") && (
            <section id="ascent-1">
              <AscentOne unlockNext={() => unlockSection("ascent-2")} /> 
            </section>
          )}


          {unlockedSections.includes("gear") && (
            <section id="gear">
              <Gear unlockNext={() => unlockSection("ascent-1")} /> 
            </section>
          )}
          
          {unlockedSections.includes("basecamp") && (
            <section id="basecamp">
              <Basecamp unlockNext={() => unlockSection("gear")} /> 
            </section>
          )}


          {unlockedSections.includes("trailhead") && (
            <section id="trailhead">
              <Trailhead unlockNext={() => unlockSection("basecamp")} /> 
            </section>
          )}
            
        </main>
    </PasswordGate>
  );

}

export default App;
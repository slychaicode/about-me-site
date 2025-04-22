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

          <section id="summit" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <Summit /> </section>
          <section id="ascent-4" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <AscentFour /> </section>
          <section id="ascent-3" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <AscentThree /> </section>
          <section id="ascent-2" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <AscentTwo /> </section>
          <section id="ascent-1" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <AscentOne /> </section>
          <section id="gear" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <Gear /> </section>
          <section id="basecamp" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <Basecamp /> </section>
          <section id="trailhead" className="min-h-screen flex items-start md:items-center justify-center pt-30 md:pt-0"> <Trailhead /> </section>
            
        </main>
    </PasswordGate>
  );

}

export default App;
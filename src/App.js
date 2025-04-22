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
import { useEffect, useState } from "react";

import "@fontsource/sora/400.css";
import "@fontsource/sora/700.css";


function App() {

  const [unlockedSections, setUnlockedSections] = useState(["trailhead"]);
  const [highlights, setHighlights] = useState(null);
  const [ascentDescriptions, setAscentDescriptions] = useState(null);

  const unlockSection = (id) => {
    if(!unlockedSections.includes(id)){
      setUnlockedSections((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_HIGHLIGHTS_URL)
      .then((res) => res.json())
      .then((data) => setHighlights(data))
      .catch((err) => console.error("Error loading highlights:", err));
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_ASCENT_DESCRIPTIONS_URL)
      .then((res) => res.json())
      .then((data) => setAscentDescriptions(data));
  }, []);

  return (
    <PasswordGate>
        <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 text-white px-6 py-16 space-y-32">

          <section id="summit" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0"> <Summit /> </section>


          <section id="ascent-4" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0">
            <AscentFour 
              description={ascentDescriptions?.ascentFour || ""}
              bullets={highlights?.ascentFour || []} 
            />
          </section>

          <section id="ascent-3" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0"> 
            <AscentThree
              description={ascentDescriptions?.ascentThree || ""}
              bullets={highlights?.ascentThree || []} 
            />
          </section>

          <section id="ascent-2" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0"> 
            <AscentTwo 
              description={ascentDescriptions?.ascentTwo || ""}
              bullets={highlights?.ascentTwo || []}
            />
          </section>
          
          <section id="ascent-1" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0">
            <AscentOne
              description={ascentDescriptions?.ascentOne || ""}
              bullets={highlights?.ascentOne || []}
            />
          </section>


          <section id="gear" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0"> <Gear /> </section>

          <section id="basecamp" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0"> <Basecamp /> </section>

          <section id="trailhead" className="min-h-screen flex items-start md:items-center justify-center pt-24 md:pt-0"> <Trailhead /> </section>
            
        </main>
    </PasswordGate>
  );

}

export default App;
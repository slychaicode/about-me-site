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
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

function App() {

  return (
    <PasswordGate>
        <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 text-white px-6 py-16 space-y-32">

          <section id="summit"> <Summit /> </section>
          <section id="ascent-4"> <AscentFour /> </section>
          <section id="ascent-3"> <AscentThree /> </section>
          <section id="ascent-2"> <AscentTwo /> </section>
          <section id="ascent-1"> <AscentOne /> </section>
          <section id="gear"> <Gear /> </section>
          <section id="basecamp"> <Basecamp /> </section>
          <section id="trailhead"> <Trailhead /> </section>
            
        </main>
    </PasswordGate>
  );

}

export default App;
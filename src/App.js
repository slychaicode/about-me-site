import PasswordGate from "./components/PasswordGate";
import Basecamp from "./components/Basecamp";
import Gear from "./components/Gear";
import AscentOne from "./components/AscentOne";
import AscentTwo from "./components/AscentTwo";
import AscentThree from "./components/AscentThree";
import AscentFour from "./components/AscentFour";
import Summit from "./components/Summit";
import { motion } from "framer-motion";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

function App() {

  return (
    <PasswordGate>
       <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 text-white px-6 py-16 space-y-32">

        <section id="basecamp" className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900">
          <Basecamp />
        </section>

        <section id="gear" className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800">
          <Gear />
        </section>

        <section id="ascent-1" className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900">
          <AscentOne />
        </section>

        <section id="ascent-2" className="bg-gradient-to-br from-indigo-900 via-slate-800 to-purple-900">
          <AscentTwo />
        </section>

        <section id="ascent-3" className="bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-950">
          <AscentThree />
        </section>

        <section id="ascent-4" className="bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900">
          <AscentFour />
        </section>

        <section id="summit" className="bg-gradient-to-br from-indigo-950 via-purple-900 to-white text-black">
          <Summit />
        </section>
        
      </main>
    </PasswordGate>
  );

}

export default App;
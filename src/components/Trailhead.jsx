import ClimbButton from "./ClimbButton";

export default function Trailhead({unlockNext}) {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome, Asana Hiring Team!</h1>
      <p className="text-lg text-slate-300 mb-8">Please follow the climb to learn more about me!</p>

        <ClimbButton
            target="#basecamp"
            label="Begin Your Climb" 
            unlockNext={unlockNext}
        />
    
    </section>
  );
}
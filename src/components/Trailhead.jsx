import ClimbButton from "./ClimbButton";

export default function Trailhead({unlockNext}) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
        <div className="text-white text-center px-6 max-w-xl space-y-6">
            
            <h1 className="text-4xl font-bold">Welcome, Asana Hiring Team!</h1>
            <p className="text-lg text-slate-300">
            Please follow the climb to learn more about me!
            </p>

            <ClimbButton
            target="#basecamp"
            label="Begin Your Climb"
            unlockNext={unlockNext}
            />
        
        </div>
    </section>
  );
}

// "h-screen flex flex-col items-center justify-center text-white text-center px-6"
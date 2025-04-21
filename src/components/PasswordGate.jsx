import { useState } from "react";

const PasswordGate = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input === process.env.REACT_APP_SITE_PASSWORD) {
            setAuthorized(true);
        }else{
            alert("Incorrect password");
        }
    };

    if(authorized) return children;

    return(
        <div className="min-h-screen flex items-start justify-center pt-24 px-6">
        <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="px-4 py-2 rounded text-black"
            />
            <button
            type="submit"
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
            >
            Submit
            </button>
        </form>
        </div>
    )
};

export default PasswordGate;
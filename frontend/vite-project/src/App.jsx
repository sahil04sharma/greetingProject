import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const fetchGreeting = async () => {
        const res = await fetch(`http://localhost:5000/api/greet?name=${name}`);
        const data = await res.json();
        setMessage(data.message || data.error);
        setName("");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={fetchGreeting}>Get Greeting</button>
            <h2>{message}</h2>
        </div>
    );
}

export default App;

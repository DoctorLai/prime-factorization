import "./App.css";
import { useState, useEffect } from "react";
import { primeFactorization, generatePrimes } from "./functions";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const [number, setNumber] = useState(24);
  const [result, setResult] = useState("24 => 23 * 3");
  const primes = generatePrimes(2000);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (value && Number(value) > 0) {
      const factors = primeFactorization(value);
      setResult(`${value} => ${factors}`);
    } else {
      setResult("Please enter a positive integer.");
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div>
        <h1>🔢 Prime Factorization App</h1>
        <input
          type="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter a positive integer"
        />

        {result && (
          <div className="result-box">
            <h2>
              {" "}
              <span dangerouslySetInnerHTML={{ __html: result }} />
            </h2>
          </div>
        )}
      </div>

      <div>
        <h3>All Prime Numbers up to 2000:</h3>
        <p style={{ maxWidth: "800px" }}>{primes.join(", ")}</p>
      </div>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <footer>
        <div className="footer">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/doctorlai"
              target="_blank"
              rel="noopener noreferrer"
            >
              @justyy
            </a>
          </p>
          <p>
            If you found this useful, consider buying me a{" "}
            <a
              href="https://justyy.com/out/bmc"
              target="_blank"
              rel="noopener noreferrer"
            >
              coffee
            </a>{" "}
            ☕
          </p>
          <p>
            Open Source on{" "}
            <a
              href="https://github.com/DoctorLai/prime-factorization"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

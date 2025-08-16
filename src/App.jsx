import "./App.css";
import { useState, useEffect } from "react";
import { primeFactorization, generatePrimes } from "./functions";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const [number, setNumber] = useState(24);
  const [result, setResult] = useState("");
  const primes = generatePrimes(2000);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleFactorize = () => {
    if (number > 0) {
      const factors = primeFactorization(number);
      setResult(`${number} => ${factors}`);
    } else {
      setResult("Please enter a positive integer.");
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <div>
        <h1>🔢 Prime Factorization App</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a positive integer"
        />
        <button onClick={handleFactorize}>Factorize</button>

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

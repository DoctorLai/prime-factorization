import "./App.css";
import { useState, useEffect } from "react";
import {
  generatePrimes,
  isPositiveIntegerInput,
  isPrime,
  primeFactorization,
} from "./functions";

const NUMBER_STORAGE_KEY = "primeFactorizationNumber";
const APP_VERSION = "2026.7.10";

function getFactorizationResult(value) {
  if (!isPositiveIntegerInput(value)) {
    return "Please enter a positive integer.";
  }

  const factors = primeFactorization(value);
  const category = isPrime(value) ? "prime" : "composite";
  return `${value} => ${factors}<br/><br/>(${value} is a ${category} number)`;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const [number, setNumber] = useState(() => {
    return localStorage.getItem(NUMBER_STORAGE_KEY) ?? "24";
  });
  const [result, setResult] = useState(() => getFactorizationResult(number));
  const primes = generatePrimes(2000);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    localStorage.setItem(NUMBER_STORAGE_KEY, value);
    setResult(getFactorizationResult(value));
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
              href="https://buymeacoffee.com/y0btg5r"
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
            </a>{" "}
            | Alternative Tool:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://helloacm.com/tools/factor/"
            >
              Integer Factorization to Prime Factors with API
            </a>
          </p>
          <p className="version">Version {APP_VERSION}</p>
        </div>
      </footer>
    </div>
  );
}

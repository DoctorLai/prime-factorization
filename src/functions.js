// functions.js
export function primeFactorization(input) {
  if (input === null || input === undefined || input === "") {
    return "No prime factors";
  }

  // Accept number | string | bigint
  let n;
  try {
    // Reject non-integers early
    if (typeof input === "number" && !Number.isInteger(input))
      return "No prime factors";
    // Convert safely to BigInt
    n = typeof input === "bigint" ? input : BigInt(input);
  } catch {
    return "No prime factors";
  }

  if (n < 2n) return "No prime factors";

  const factors = new Map();
  const add = (p) => factors.set(p, (factors.get(p) ?? 0) + 1);

  // Factor out 2s
  while (n % 2n === 0n) {
    add(2n);
    n /= 2n;
  }
  // Factor out 3s
  while (n % 3n === 0n) {
    add(3n);
    n /= 3n;
  }

  // 6k ± 1 optimization
  let i = 5n;
  while (i * i <= n) {
    while (n % i === 0n) {
      add(i);
      n /= i;
    }
    const j = i + 2n;
    while (n % j === 0n) {
      add(j);
      n /= j;
    }
    i += 6n;
  }
  if (n > 1n) add(n);

  return [...factors.entries()]
    .map(([p, e]) =>
      e === 1 ? `${p.toString()}` : `${p.toString()}<sup>${e}</sup>`,
    )
    .join(" * ");
}

export function generatePrimes(limit) {
  // Same as before; limit is a small Number (e.g., 1000)
  const n = Math.floor(Number(limit));
  if (n < 2 || !Number.isFinite(n)) return [];
  const sieve = Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) sieve[j] = false;
    }
  }
  return sieve.map((p, i) => (p ? i : null)).filter(Boolean);
}

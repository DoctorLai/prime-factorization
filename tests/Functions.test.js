import { describe, it, expect } from "vitest";
import { primeFactorization, generatePrimes } from "../src/functions";

describe("primeFactorization", () => {
  it("should return correct factorization for small numbers", () => {
    expect(primeFactorization(2)).toBe("2");
    expect(primeFactorization(3)).toBe("3");
    expect(primeFactorization(4)).toBe("2<sup>2</sup>");
    expect(primeFactorization(6)).toBe("2 * 3");
    expect(primeFactorization(24)).toBe("2<sup>3</sup> * 3");
  });

  it("should handle prime numbers correctly", () => {
    expect(primeFactorization(13)).toBe("13");
    expect(primeFactorization(97)).toBe("97");
  });

  it("should handle larger composite numbers", () => {
    expect(primeFactorization(100)).toBe("2<sup>2</sup> * 5<sup>2</sup>");
    expect(primeFactorization(360)).toBe("2<sup>3</sup> * 3<sup>2</sup> * 5");
  });

  it("should return message for invalid input", () => {
    expect(primeFactorization(1)).toBe("No prime factors");
    expect(primeFactorization(0)).toBe("No prime factors");
    expect(primeFactorization(-5)).toBe("No prime factors");
  });
});

describe("generatePrimes", () => {
  it("should generate primes up to 10", () => {
    expect(generatePrimes(10)).toEqual([2, 3, 5, 7]);
  });

  it("should include upper limit if it is prime", () => {
    expect(generatePrimes(13)).toContain(13);
  });

  it("should exclude non-primes", () => {
    const primes = generatePrimes(20);
    [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20].forEach((n) => {
      expect(primes).not.toContain(n);
    });
  });

  it("should return empty array for limit < 2", () => {
    expect(generatePrimes(1)).toEqual([]);
    expect(generatePrimes(0)).toEqual([]);
    expect(generatePrimes(-10)).toEqual([]);
  });
});

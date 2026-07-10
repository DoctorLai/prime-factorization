import { describe, it, expect } from "vitest";
import {
  generatePrimes,
  isPositiveIntegerInput,
  isPrime,
  primeFactorization,
} from "../src/functions";

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
    expect(primeFactorization("")).toBe("Please enter a number");
    expect(primeFactorization(1)).toBe("No prime factors");
    expect(primeFactorization(0)).toBe("No prime factors");
    expect(primeFactorization(-5)).toBe("No prime factors");
    expect(primeFactorization(Number.MAX_SAFE_INTEGER + 2)).toBe(
      "No prime factors",
    );
  });

  it("should handle BigInt input", () => {
    expect(primeFactorization(12345678901234567890n)).toBe(
      "2 * 3<sup>2</sup> * 5 * 101 * 3541 * 3607 * 3803 * 27961",
    );
  });

  it("should handle string input", () => {
    expect(primeFactorization("56")).toBe("2<sup>3</sup> * 7");
    expect(primeFactorization("97")).toBe("97");
    expect(primeFactorization("not a number")).toBe("No prime factors");
  });
});

describe("isPrime", () => {
  it("identifies prime and composite integers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(97)).toBe(true);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(100)).toBe(false);
    expect(isPrime("12345678901234567890")).toBe(false);
  });

  it("rejects invalid or non-prime inputs", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2.5)).toBe(false);
    expect(isPrime(Number.MAX_SAFE_INTEGER + 2)).toBe(false);
    expect(isPrime("not a number")).toBe(false);
  });
});

describe("isPositiveIntegerInput", () => {
  it("accepts positive integer input values", () => {
    expect(isPositiveIntegerInput("13")).toBe(true);
    expect(isPositiveIntegerInput(13)).toBe(true);
    expect(isPositiveIntegerInput(13n)).toBe(true);
  });

  it("rejects decimals, zero, negatives, and non-numeric values", () => {
    expect(isPositiveIntegerInput("2.5")).toBe(false);
    expect(isPositiveIntegerInput("0")).toBe(false);
    expect(isPositiveIntegerInput("-3")).toBe(false);
    expect(isPositiveIntegerInput(Number.MAX_SAFE_INTEGER + 2)).toBe(false);
    expect(isPositiveIntegerInput("not a number")).toBe(false);
    expect(isPositiveIntegerInput({ value: 13 })).toBe(false);
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

  it("should handle non-integer limits", () => {
    expect(generatePrimes(10.7)).toEqual([2, 3, 5, 7]);
    expect(generatePrimes(15.2)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});

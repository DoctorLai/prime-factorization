import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the Prime Factorization UI", () => {
    render(<App />);
    expect(screen.getByText(/Prime Factorization/i)).to.exist;
  });

  it("shows whether entered numbers are prime or composite", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter a positive integer");

    fireEvent.change(input, { target: { value: "13" } });
    expect(screen.getByText(/13 is a prime number/i)).to.exist;
    expect(localStorage.getItem("primeFactorizationNumber")).toBe("13");

    fireEvent.change(input, { target: { value: "24" } });
    expect(screen.getByText(/24 is a composite number/i)).to.exist;
  });

  it("restores the saved number and result from localStorage", () => {
    localStorage.setItem("primeFactorizationNumber", "13");

    render(<App />);

    expect(screen.getByPlaceholderText("Enter a positive integer").value).toBe(
      "13",
    );
    expect(screen.getByText(/13 is a prime number/i)).to.exist;
  });

  it("shows a positive integer message for empty or invalid values", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter a positive integer");

    fireEvent.change(input, { target: { value: "" } });
    expect(screen.getByText("Please enter a positive integer.")).to.exist;

    fireEvent.change(input, { target: { value: "0" } });
    expect(screen.getByText("Please enter a positive integer.")).to.exist;

    fireEvent.change(input, { target: { value: "2.5" } });
    expect(screen.getByText("Please enter a positive integer.")).to.exist;
  });

  it("toggles and persists dark mode", () => {
    render(<App />);
    const toggle = screen.getByRole("button", { name: /dark mode/i });

    fireEvent.click(toggle);

    expect(localStorage.getItem("darkMode")).toBe("true");
    expect(screen.getByRole("button", { name: /light mode/i })).to.exist;
  });
});

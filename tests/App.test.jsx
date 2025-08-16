import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders Prime Factorization UI", () => {
  render(<App />);
  const linkElement = screen.getByText(/Prime Factorization/i);
  expect(linkElement).to.exist;
});

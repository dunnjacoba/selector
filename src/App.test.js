import { render, screen, cleanup } from "@testing-library/react";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";

afterEach(cleanup);

test("Home", () => {
  render(<Home />);
  const needHelp = screen.getByText(/Need help/i);
  expect(needHelp).toBeInTheDocument();
});

test("Restaurants", () => {
  render(<Restaurant />);
  const display = screen.getByText(/Selection/i);
  expect(display).toBeInTheDocument();
});

test("wanna fail", () => {
  render(<Home />);
  expect(screen.getByTestId("one")).toBeInTheDocument();
});

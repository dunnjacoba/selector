import { render, screen } from "@testing-library/react";
import Home from "./pages/home";

test("Click", () => {
  render(<Home />);
  const needHelp = screen.getByText(/Need help/i);
  expect(needHelp).toBeInTheDocument();
});

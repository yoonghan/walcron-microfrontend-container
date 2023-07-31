import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MainPage from ".";

describe("MainPage", () => {
  it("should render correctly", () => {
    render(<MainPage />);
    expect(screen.getByText("Walcron's Microfrontend")).toBeInTheDocument();
    expect(screen.getByText("NPM shared library")).toBeInTheDocument();
  });
});

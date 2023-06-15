import Button from ".";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render button component correctly", () => {
    render(<Button />);
    expect(screen.getByText("I am a Button")).toBeInTheDocument();
  });
});

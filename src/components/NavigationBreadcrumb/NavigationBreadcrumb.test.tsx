import { describe, it, expect } from "vitest";
import NavigationBreadcrumb from ".";
import { render, screen } from "@testing-library/react";

describe("NavigationBreadcrumb", () => {
  it("should not render null pathname", () => {
    render(<NavigationBreadcrumb pathname={null} />);
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });

  it("should not render if the pathname only contains root", () => {
    render(<NavigationBreadcrumb pathname={"/"} />);
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });

  it("should render root pathname with sub contents correctly", () => {
    render(<NavigationBreadcrumb pathname={"/auth"} />);
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("auth")).toHaveAttribute("href", "/auth");
  });

  it("should render root pathname with sub sub contents correctly", () => {
    render(<NavigationBreadcrumb pathname={"/auth/login"} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("auth")).toBeInTheDocument();
    expect(screen.getByText("login")).toHaveAttribute("href", "/auth/login");
  });
});

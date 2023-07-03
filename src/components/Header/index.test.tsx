import { describe, it, expect } from "vitest";
import Header from ".";
import { render, screen } from "@testing-library/react";
import { AuthenticationContext } from "../../context/authentication";

describe("Header", () => {
  const renderComponent = (isSignedIn: boolean) => {
    render(
      <AuthenticationContext.Provider value={{ isSignedIn }}>
        <Header />
      </AuthenticationContext.Provider>
    );
  };

  it("should show login if user is not authenticated", () => {
    renderComponent(false);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should show logout if user is authenticated", () => {
    renderComponent(true);
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});

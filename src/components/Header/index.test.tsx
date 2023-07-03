import { describe, it, expect } from "vitest";
import Header from ".";
import { render, screen } from "@testing-library/react";
import { AuthenticationContext } from "../../context/authentication";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  const renderComponent = (isSignedIn: boolean) => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: (
            <AuthenticationContext.Provider
              value={{
                isSignedIn,
                setIsSignedIn: () => {
                  //empty intended
                },
              }}
            >
              <Header />
            </AuthenticationContext.Provider>
          ),
        },
        {
          path: "/profiler/auth/login",
          element: <div>Logged In</div>,
        },
        {
          path: "/profiler/auth/logout",
          element: <div>Logged Out</div>,
        },
      ],
      { initialEntries: ["/"] }
    );

    render(<RouterProvider router={router} />);
  };

  it("should show login if user is not authenticated", async () => {
    renderComponent(false);

    await userEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByText("Logged In")).toBeInTheDocument();
  });

  it("should show logout if user is authenticated", async () => {
    renderComponent(true);

    await userEvent.click(screen.getByRole("button", { name: "Logout" }));
    expect(screen.getByText("Logged Out")).toBeInTheDocument();
  });
});

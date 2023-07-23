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
        {
          path: "/profiler/profile",
          element: <div>Profile</div>,
        },
      ],
      { initialEntries: ["/"] }
    );

    render(<RouterProvider router={router} />);
  };

  it("should contain menu icon", () => {
    renderComponent(false);

    expect(
      screen.getByRole("button", { name: "main-menu" })
    ).toBeInTheDocument();
  });

  it("should show login if user is not authenticated", async () => {
    renderComponent(false);

    await userEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByText("Logged In")).toBeInTheDocument();
  });

  it("should show profile menu when user is logged in.", async () => {
    renderComponent(true);
    expect(
      screen.getByRole("button", { name: "profile-menu" })
    ).toBeInTheDocument();
  });

  describe("profile menu", () => {
    const renderComponentLoggedIn = async () => {
      renderComponent(true);
      await userEvent.click(
        screen.getByRole("button", { name: "profile-menu" })
      );
    };

    it("should logout user when logout it clicked", async () => {
      await renderComponentLoggedIn();
      await userEvent.click(
        await screen.findByRole("menuitem", { name: "Logout" })
      );
      expect(screen.getByText("Logged Out")).toBeInTheDocument();
    });

    it("should goto profile when profile it clicked", async () => {
      await renderComponentLoggedIn();
      await userEvent.click(
        await screen.findByRole("menuitem", { name: "Profile" })
      );
      expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("should toggle when clicked on profile menu", async () => {
      renderComponent(true);

      expect(screen.queryByText("Profile")).not.toBeInTheDocument();

      const mainMenuBtn = screen.getByRole("button", { name: "main-menu" });
      const profileMenuBtn = screen.getByRole("button", {
        name: "profile-menu",
      });

      await userEvent.click(profileMenuBtn);
      expect(screen.getByText("Profile")).toBeInTheDocument();

      await userEvent.click(mainMenuBtn);
      expect(screen.queryByText("Profile")).not.toBeInTheDocument();
    });
  });
});

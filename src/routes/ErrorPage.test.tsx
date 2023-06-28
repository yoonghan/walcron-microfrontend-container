import ErrorPage from "./ErrorPage";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Root from "./Root";

describe("error-page", () => {
  const renderComponent = (initialPageEntry: string) => {
    const router = createMemoryRouter(
      [
        { path: "/", element: <Root />, errorElement: <ErrorPage /> },
        {
          path: "/errorpage",
          element: <div>No error</div>,
          errorElement: <ErrorPage />,
          loader: async () => {
            throw new Error("Loading Error");
          },
        },
      ],
      {
        initialEntries: [initialPageEntry],
      }
    );

    render(<RouterProvider router={router} />);
  };

  it("should render error page when route is not found", () => {
    renderComponent("/wrongurl");
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should render error page that threw exception", async () => {
    renderComponent("/errorpage");
    expect(await screen.findByText("Loading Error")).toBeInTheDocument();
  });
});

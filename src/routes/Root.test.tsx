import Root from "./Root";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("root", () => {
  const router = createMemoryRouter(
    [
      { path: "/", element: <Root /> },
      { path: "/contacts/:contactId", element: <div>Click on contact</div> },
    ],
    {
      initialEntries: ["/"],
      initialIndex: 0,
    }
  );

  render(<RouterProvider router={router} />);

  it("should render root page", () => {
    expect(screen.getByText("React Router Contacts")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Profiler" })).toHaveAttribute(
      "href",
      "profiler"
    );
    expect(screen.getByRole("link", { name: "Chart" })).toHaveAttribute(
      "href",
      "chart"
    );
  });
});

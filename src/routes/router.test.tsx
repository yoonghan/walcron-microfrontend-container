import { definedRoute } from "./router";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("router", () => {
  it("should render root page", () => {
    const router = createMemoryRouter(definedRoute, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("React Router Contacts")).toBeInTheDocument();
  });

  it("should render error page", () => {
    const router = createMemoryRouter(definedRoute, {
      initialEntries: ["/invalid"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should render chart and child page", () => {
    const router = createMemoryRouter(definedRoute, {
      initialEntries: ["/chart"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Loading Chart")).toBeInTheDocument();
    expect(screen.queryByTestId("chart-mfe")).not.toBeInTheDocument();
  });

  it("should render profiler and child page", async () => {
    const router = createMemoryRouter(definedRoute, {
      initialEntries: ["/profiler"],
    });

    render(<RouterProvider router={router} />);
  });
});

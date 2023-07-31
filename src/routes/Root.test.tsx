import Root from "./Root";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("root", () => {
  const router = createMemoryRouter([{ path: "/", element: <Root /> }], {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />);

  it("should render root page", () => {
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });
});

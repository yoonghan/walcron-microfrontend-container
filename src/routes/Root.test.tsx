import Root from "./Root";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should render root page", async () => {
    expect(screen.getByText("React Router Contacts")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Your Name" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("link", { name: "Your Name" }));
    expect(await screen.findByText("Click on contact")).toBeInTheDocument();
  });
});

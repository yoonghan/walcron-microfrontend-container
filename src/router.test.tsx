import router from "./router";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider } from "react-router-dom";

describe("router", () => {
  render(<RouterProvider router={router} />);

  it("should render root page", async () => {
    expect(screen.getByText("React Router Contacts")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Your Name" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("link", { name: "Your Name" }));
    expect(await screen.findByText("your_handle")).toBeInTheDocument();
  });
});

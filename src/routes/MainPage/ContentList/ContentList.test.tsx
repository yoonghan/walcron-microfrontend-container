import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContentList from ".";

describe("ContentList", () => {
  it("should render correctly", () => {
    const contents = [
      {
        title: "Npm Description",
        description: "How npm should work",
        subDescription: "Caveats on why it worked",
        links: [
          {
            title: "View More",
            href: "https://www.walcron.com/link",
          },
        ],
      },
    ];
    render(<ContentList contents={contents}></ContentList>);
    expect(screen.getByText("Npm Description")).toBeInTheDocument();
    expect(screen.getByText("How npm should work")).toBeInTheDocument();
    expect(screen.getByText("Caveats on why it worked")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View More" })).toHaveAttribute(
      "href",
      "https://www.walcron.com/link"
    );
  });
});

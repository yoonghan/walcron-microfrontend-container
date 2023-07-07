import { describe, it, expect } from "vitest";
import { defaultProps } from "./authentication";

describe("error-page", () => {
  it("should have correct authentication defaults", () => {
    expect(defaultProps.isSignedIn).toStrictEqual(false);
    defaultProps.setIsSignedIn(false)
  });
});

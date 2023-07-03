import { describe, it, expect } from "vitest";
import { props } from "./authentication";

describe("error-page", () => {
  it("should have correct authentication defaults", () => {
    expect(props).toStrictEqual({
      isSignedIn: false,
    });
  });
});

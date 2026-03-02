import { describe, test, expect } from "vitest";
import { ConferencePaper } from "../../src/ejercicio-1/ConferencePaper";

describe("ConferencePaper", () => {
  test("should store conference data correctly", () => {
    const conf = new ConferencePaper(
      "Robotics in Space",
      ["Diana Torres"],
      ["Robotics"],
      "Abstract",
      new Date("2022-10-01"),
      "100-110",
      "IEEE",
      "Space Robotics Conference",
      "Tokyo, Japan",
      new Date("2022-09-20")
    );

    expect(conf.conferenceName).toBe("Space Robotics Conference");
    expect(conf.conferenceLocation).toBe("Tokyo, Japan");
  });

  test("should generate correct IEEE format", () => {
    const conf = new ConferencePaper(
      "Robotics in Space",
      ["Diana Torres"],
      ["Robotics"],
      "Abstract",
      new Date("2022-10-01"),
      "100-110",
      "IEEE",
      "Space Robotics Conference",
      "Tokyo, Japan",
      new Date("2022-09-20")
    );

    const ieee = conf.toIEEE();
    expect(ieee).toContain("Robotics in Space");
    expect(ieee).toContain("Tokyo, Japan");
  });

  test("should throw error if authors list is empty", () => {
    expect(() => {
      new ConferencePaper(
        "Title",
        [],
        ["Robotics"],
        "Abstract",
        new Date(),
        "10-20",
        "IEEE",
        "Conf",
        "Location",
        new Date()
      );
    }).toThrow("at least one author is required");
  });
});

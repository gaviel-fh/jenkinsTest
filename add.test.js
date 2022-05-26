const add = require("./add");

describe("add()", () => {
  test("1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("throws error if a non number is given as argument", () => {
    expect(() => add(1, "invalid")).toThrow();
  });
});

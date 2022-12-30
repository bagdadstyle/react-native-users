import sum from "../src/sum";

describe("Suma", () => {
  it("1 + 2 is 3", () => {
    expect(sum(1, 5)).toBe(3);
  });
});

import trappingRainwater from "./trappingRainwater";

test("when [0,1,0,2,1,0,3,1,0,1,2] then 8", () => {
    expect(trappingRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])).toBe(8);
});

test("when [] then 0", () => {
    expect(trappingRainwater([])).toBe(0);
});

test("when [1] then 0", () => {
    expect(trappingRainwater([1])).toBe(0);
});

test("when [3,4,3] then 0", () => {
    expect(trappingRainwater([3, 4, 3])).toBe(0);
});

test("when [0,1,0,2,1,0,1,3,2,1,2,1] then 6", () => {
    expect(trappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});

test("when [0,1,0,1] then 1", () => {
    expect(trappingRainwater([0, 1, 0, 1])).toBe(1);
});

test("when [0,1,0,2] then 1", () => {
    expect(trappingRainwater([0, 1, 0, 2])).toBe(1);
});

test("when [0,1,0,2,0] then 1", () => {
    expect(trappingRainwater([0, 1, 0, 2, 0])).toBe(1);
});
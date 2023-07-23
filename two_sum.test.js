import twoSum from "./two_sum.js";

test("when search 11 in [1,3,7,9,2] then [3,4]", () => {
    expect(twoSum([1, 3, 7, 9, 2], 11)).toStrictEqual([3, 4]);
});

test("when search 1 in [] then null", () => {
    expect(twoSum([], 1)).toBe(null);
});

test("when search 5 in [5] then null", () => {
    expect(twoSum([5], 5)).toBe(null);
});

test("when search 6 in [5,1] then [0,1]", () => {
    expect(twoSum([5, 1], 6)).toStrictEqual([0, 1]);
});

test("when search 13 in [1,3,7,9,2] then null", () => {
    expect(twoSum([1, 3, 7, 9, 2], 13)).toBe(null);
});
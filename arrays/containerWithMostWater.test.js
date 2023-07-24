import containerWithMostWater from  "./containerWithMostWater";

test("when apply [7,1,2,3,9] then 28", () => {
    expect(containerWithMostWater([7, 1, 2, 3, 9])).toBe(28);
});

test("when apply [] then 0", () => {
    expect(containerWithMostWater([])).toBe(0);
});

test("when apply [7] then 0", () => {
    expect(containerWithMostWater([7])).toBe(0);
});

test("when apply [6,9,3,4,5,8] then 32", () => {
    expect(containerWithMostWater([6, 9, 3, 4, 5, 8])).toBe(32);
});
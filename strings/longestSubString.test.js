import longestSubString from "./longestSubString";
test("when 'a b c c a b b' then 3", () => {
    expect(longestSubString('abccabb')).toBe(3);
});

test("when 'ccccccc' then 1", () => {
    expect(longestSubString('ccccccc')).toBe(1);
});

test("when '' then 0", () => {
    expect(longestSubString('')).toBe(0);
});

//          0 1 2 3 4 5
test("when 'a b c b d a' then 4", () => {
    expect(longestSubString('abcbda')).toBe(4);
});
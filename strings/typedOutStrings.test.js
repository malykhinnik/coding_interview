import typedOutStrings from "./typedOutStrings";

test("when '' and '' then true", () => {
    expect(typedOutStrings('','')).toBe(true);
});

test("when 'a' and 'a' then true", () => {
    expect(typedOutStrings('a','a')).toBe(true);
});

test("when 'a' and 'A' then false", () => {
    expect(typedOutStrings('a','A')).toBe(false);
});

test("when 'a' and '' then false", () => {
    expect(typedOutStrings('a','')).toBe(false);
});

test("when 'a#b' and 'b' then true", () => {
    expect(typedOutStrings('a#b','b')).toBe(true);
});

test("when 'cb#' and 'c' then true", () => {
    expect(typedOutStrings('cb#','c')).toBe(true);
});

test("when 'ab##c' and 'c' then true", () => {
    expect(typedOutStrings('ab##c','c')).toBe(true);
});

test("when 'a##b' and 'b' then true", () => {
    expect(typedOutStrings('a##b','b')).toBe(true);
});
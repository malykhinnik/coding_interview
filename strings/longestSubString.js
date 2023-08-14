export default longestSubString;

function longestSubString(s) {
    let size = s.length;
    if (size <= 1) {
        return s.length;
    }

    let arr = {};
    let R = 0;
    let max = 0;
    let L = 0;

    for (let i = 0; i < size; i++) {
        const c = s[i];
        const v = arr[c]
        if (v !== undefined && v >= L) {
            L = v + 1;
        }

        arr[c] = i;
        R = i;
        max = Math.max(max, R - L + 1);
    }

    return max;
}

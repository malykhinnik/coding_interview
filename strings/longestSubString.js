export default longestSubString;

function longestSubString(s) {
    const size = s.length;
    let max = 0;
    for (let i = 0; i < size; i++) {
        let L = s[i];
        let ri = i + 1;
        while (ri < size && L !== s[ri]) {
            ri++;
        }

        let count = 1;
        let li = i + 1;
        while (li < ri) {
            L = s[li];
            let newRi = li + 1;
            while (newRi < ri && L !== s[newRi]) {
                newRi++;
            }

            if (newRi < ri) {
                ri = newRi;
            } else {
                li++;
                count++;
            }
        }

        if (count > max) {
            max = count;
        }
    }

    return max;
}

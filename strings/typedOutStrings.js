export default typedOutStrings;

function typedOutStrings(s, t) {
    let si = s.length - 1;
    let ti = t.length - 1;
    while (si >= 0 || ti >= 0) {
        console.log({"si":si,"ti":ti})
        if (s[si] === '#') {
            let c = 2;
            while (c > 0) {
                si--;
                c--;
                console.log({"c":c})
                if (s[si] === '#') {
                    c += 2;
                    console.log({"si again #, c":c})
                }
            }

            console.log({"si - #, new si":si})
        }

        if (t[ti] === '#') {
            let c = 2;
            while (c > 0) {
                ti--;
                c--;
                if (t[ti] === '#') {
                    c += 2;
                }
            }

            console.log({"ti - #, new ti":ti})
        }

        if (s[si] === t[ti]) {
            si--;
            ti--;
            console.log({"new si":si, "new ti":ti})
        } else {
            console.log("false")
            return false;
        }
    }

    console.log("true")
    return true;
}

function typedOutString(str) {
    console.log({"str":str});
    const size = str.length;
    let newStr = [];
    let ni = 0;
    for (let i = 0; i < size; i++) {
        const v = str[i];
        console.log({"v":v});
        if (v === '#') {
            if (ni > 0) {
                ni--;
            }
            console.log({"ni":ni});
        } else {
            newStr[ni] = v;
            ni++;
            console.log({"newStr":newStr});
        }
    }

    return newStr.slice(0, ni).join('');
}
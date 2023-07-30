export default typedOutStrings;

function typedOutStrings(str1, str2) {
    var newStr1 = typedOutString(str1);
    var newStr2 = typedOutString(str2);
    console.log({"newStr1":newStr1, "newStr2":newStr2})
    return newStr1 === newStr2;
}

function typedOutString(str) {
    console.log({"str":str});
    const size = str.length;
    let newStr = [];
    let ni = 0;
    for (let i = 0; i < size; i++) {
        const v = str[i];
        console.log({"v":v});
        if (v === "#") {
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
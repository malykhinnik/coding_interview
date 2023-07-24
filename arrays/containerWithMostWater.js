export default containerWithMostWater;

function containerWithMostWater(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let h = Math.min(arr[i], arr[j]);
            let w = j - i;
            let temp = h * w;
            if (temp > res) {
                res = temp;
            }
        }
    }

    return res;
}
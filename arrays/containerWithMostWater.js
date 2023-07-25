export default containerWithMostWater;

function containerWithMostWater(arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxArea = 0;
    while (i < j) {
        const iv = arr[i];
        const jv = arr[j];
        const h = Math.min(iv, jv);
        const w = j - i;
        const area = h * w;
        maxArea = Math.max(area, maxArea);
        if (iv <= jv) {
            i++;
        } else {
            j--;
        }

    }

    return maxArea;
}
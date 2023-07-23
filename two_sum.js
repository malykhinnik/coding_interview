export default twoSum;

function twoSum(arr, target) {
    if (arr.length < 2) return null;

    let size = arr.length;
    for (let i = 0; i < size; i++) {
        let iVal = arr[i];
        for (let j = i + 1; j < size; j++) {
            if (iVal + arr[j] == target) {
                return [i, j];
            }
        }
    }

    return null;
}
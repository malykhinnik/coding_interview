export default trappingRainwater;

function trappingRainwater(arr) {
    let left = 0;
    let right = arr.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let totalWater = 0;
    while (left < right) {
        const leftValue = arr[left];
        if (arr[left] <= arr[right]) {
            if (maxLeft <= leftValue) {
                maxLeft = leftValue;
            } else {
                totalWater += maxLeft - leftValue;
            }

            left++;
        } else {
            const rightValue = arr[right];
            if (maxRight <= rightValue) {
                maxRight = rightValue;
            } else {
                totalWater += maxRight - rightValue;
            }

            right--;
        }
    }

    return totalWater;
};
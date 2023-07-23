export default twoSum;

function twoSum(arr, target) {
    //time complexity is N
    //space complexity is N
    if (arr.length < 2) return null;

    const jTargets = new Map();
    for (let i = 0; i < arr.length; i++) {
        let jTargetValue = jTargets.get(arr[i]);
        if (jTargetValue != undefined) {
            return [jTargetValue, i];
        }

        jTargets.set(target - arr[i], i)
    }

    return null;
}
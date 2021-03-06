/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

const nums4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 3;
const expected4 = true;

// bonus, how many times does the search num appear?
const nums5 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum5 = 8;
const expected5 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let arrLen = sortedNums.length;
    let searchInd = Math.floor((arrLen-1)/2)
    let prevIndexes = []
    let count = 0
    while (sortedNums[searchInd] !== searchNum) {
        console.log("Inside while loop. Count #:", count)
        console.log("Search Index =", searchInd, ":: Value at Index =", sortedNums[searchInd])
        console.log("Target Number =", searchNum)
        console.log("Previous Indexes =", prevIndexes)

        if (prevIndexes.includes(searchInd)) {
            return false
        } else {
            prevIndexes.push(searchInd)
        }

        if (sortedNums[searchInd] > searchNum){
            searchInd = Math.floor((searchInd)/2)
        }
        else {
            searchInd += Math.ceil((searchInd)/2)
        }
        count++
        console.log("\n---\n")
    }
    return true
}




console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))
console.log(binarySearch(nums4, searchNum4))
// console.log(binarySearch(nums5, searchNum5))
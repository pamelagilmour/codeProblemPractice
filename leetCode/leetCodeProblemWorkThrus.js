Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // my code starts here:
    let n = nums.length;
    let ans = [];
    for (i=0; i< n; i++) {
        ans.push(nums[i]);        
    }
    for (i=0; i< n; i++) {
        ans.push(nums[i]);        
    }
    return ans
};

console.log(getConcatenation([1,2,1]));
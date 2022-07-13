const removeDuplicates = function(nums) {
    for (i=0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            let d = nums.filter(x => x === nums[i]).length
            nums.splice(i, d - 1)
        }
    }
};
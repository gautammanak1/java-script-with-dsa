// Rotate an array to the right by k steps
function rotateArray(nums, k) {
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
let Array = [1, 2, 3, 4, 5];
let steps = 2;
console.log(rotateArray(Array, steps));

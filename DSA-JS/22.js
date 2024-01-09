// Find the median of two sorted arrays.
function SortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = merged.length;
  const mid = Math.floor(len / 2);
  return len % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
}

// Lets Check
let array1 = [1, 4];
let array2 = [4];
console.log(SortedArrays(array1, array2));

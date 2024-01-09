// Find the intersection of two array
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((num) => set2.has(num));
}
//Lets Check
let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
console.log(intersection(arr1, arr2));

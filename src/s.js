let count = 1;
let count2 = 1;

function findNumber(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftNum = nums[left];
    const rightNum = nums[right];
    if (leftNum !== target && rightNum !== target) {
      left++;
      right--;
    } else if (leftNum === target) return true;
    else return true;
    count++;
  }
  return false;
}

function findNumber2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    count2++;
    if (nums[i] === target) return true;
  }
  return false;
}

console.log(findNumber([2, 1, 4, 5, 6, 3, 8, 9, 4534, 56], 9), count);
console.log(findNumber2([2, 1, 4, 5, 6, 3, 8, 9, 4534, 56], 9), count2);

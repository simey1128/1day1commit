/**
 * 속도가 다른 두개의 pointer를 가지고 하나는 정상 속도로, 하나는 다른 요소가 나타났을 때에만 이동하는 것으로!
 * @param {*} nums
 * @returns
 */

function removeDuplicates(nums) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }

  return slow + 1;
}

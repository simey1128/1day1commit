/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 *
 * twosum의 경우 메모리 사용이랑 속도를 중간정도에 맞추려면 O(n^2)으로 이중 for문 돌리면 되는데
 * 속도는 object를 사용하는게 훨씬 더 빠르다!!!
 */
function twoSum(nums, target) {
  const max = nums.length;
  let obj = {};
  for (let i = 0; i < max; i++) {
    const num = nums[i];
    const need_num = target - num;

    const foundIdx = obj[need_num];
    if (foundIdx !== undefined) {
      return [i, foundIdx];
    }
    obj[num] = i;
  }
}

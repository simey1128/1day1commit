/*
이 문제는, target을 식별하고 target을 제외한 element들만을 반환하면 되는 것!
정렬과 상관이 없다

정렬이 상관이 없으면, 최대한 iteration을 줄이자.
 */

// 1. full iteration
let removeElement = function (nums, val) {
  const max = nums.length;

  let pos = 0;
  for (let i = 0; i < max; i++) {
    if (nums[i] !== val) {
      nums[pos] = nums[i];
      //nums[i] = pos === i ? nums[i] : val; ~ 쓸데없는 copy 줄이기
      pos++;
    }
  }

  return pos;
};

// 2. reduced iteration
removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};

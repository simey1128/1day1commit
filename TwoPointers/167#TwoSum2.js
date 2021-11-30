/*
input array is sorted ~ just locate pointer at fit place where minimize iteration
*/

// 어떤 경우가 있는지 모르니, 마주보는 two pointer가 낫겠다!

const twoSum = function (numbers, target) {
  let p1 = 0;
  let p2 = numbers.length;

  while (p1 < p2) {
    const sum = numbers[p1] + numbers[p2];
    if (sum === target) return [p1 + 1, p2 + 1];
    else if (sum < target) p1++;
    else p2--;
  }
};

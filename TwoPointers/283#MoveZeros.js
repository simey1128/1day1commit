//in-place

/*
1. using Array.splice
*/

let movezeros = function (nums) {
  const max = nums.length;
  for (let i = max - 1; i >= 0; i--) {
    if (!nums[i]) {
      nums.splice(i, 1); // nums의 i index를 제거한다.
      nums.push(0);
    }
  }
  return nums;
};

/*
2. using two pointers
pointer 'a' = iterating whole array
pointer 'b' = for zero elements
*/

movezeros = function (nums) {
  const max = nums.length;
  let pos = 0; // pointer
  for (let i = 0; i < max; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }
  for (let i = pos; i < max; i++) {
    nums[i] = 0;
  }
};

/*
pointer idx = for non zero elements ~ slow runner 
pointer i = iterate whole array ~ fast runner
 */
movezeros = function (nums) {
  var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
};

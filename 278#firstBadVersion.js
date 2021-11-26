/*
[1,2,...,n]인 배열에서,
처음으로 bad인 index찾기.
최소한으로 체킹해야하기 때문에 O(log n)으로 접근해야한다.
*/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0;
    let high = n - 1;
    let mid;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (isBadVersion(mid)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};

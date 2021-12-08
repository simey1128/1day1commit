/**
 * 변수를 정규식으로 만드는 방법 ~ new RegExp(variable)
 *
 * @param {*} haystack
 * @param {*} needle
 * @returns
 */
function strStr(haystack, needle) {
  var regex = new RegExp(needle);
  const result = haystack.search(regex);

  return result;
}

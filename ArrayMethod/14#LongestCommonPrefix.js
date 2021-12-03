function longestCommonPrefix(strs) {
  const item = strs[0];
  const length = item.length;

  let prefix = '';
  for (let i = 0; i < length; i++) {
    const targetPrefix = item[i];
    const isAllSame = strs.every((str) => str[i] === targetPrefix);

    if (isAllSame) {
      prefix += targetPrefix;
    } else {
      return prefix;
    }
  }
  return prefix;
}

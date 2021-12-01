var reverseWords = function (s) {
  const str = s.split(' ').map((e) => {
    return e.split('').reverse().join('');
  });

  return str.join(' ');
};

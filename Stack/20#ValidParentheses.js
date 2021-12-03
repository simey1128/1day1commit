/**
 * 짝이 만나서 하나가 되는거면 stack을 생각해봐야지!
 */

/**
 * 원래 답, 76ms
 */
let isValid = (s) => {
  //pre-check
  if (
    (!s.includes('(') && s.includes(')')) ||
    (s.includes('(') && !s.includes(')'))
  )
    return false;
  if (
    (!s.includes('[') && s.includes(']')) ||
    (s.includes('[') && !s.includes(']'))
  )
    return false;
  if (
    (!s.includes('{') && s.includes('}')) ||
    (s.includes('{') && !s.includes('}'))
  )
    return false;

  const RegExp = /\[\]|\(\)|\{\}/g;

  let str = s;
  let prev_str = str;

  while (true) {
    prev_str = str;

    str = str.replace(RegExp, '');

    if (prev_str === str) return false;
    if (!str.length) return true;
  }
};

/**
 * stack이용하기
 */

isValid = (s) => {
  let stack = [];
  let length = s.length;

  for (let i = 0; i < length; i++) {
    const item = s[i];
    switch (item) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (item !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

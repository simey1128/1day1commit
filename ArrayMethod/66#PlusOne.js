function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const added = digits[i] + 1;

    if (added === 10) {
      digits[i] = 0;
    } else {
      digits[i] = added;
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
}

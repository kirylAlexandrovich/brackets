module.exports = function check(str, bracketsConfig) {
  if (str.length <= 1) {
    return false;
  }

  let starts = [];
  let ends = [];

  bracketsConfig.forEach(brackets => {
    starts.push(brackets[0]);
    ends.push(brackets[1]);
  })

  let matching, ch;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    ch = str[i];

    if ((starts.indexOf(ch) === -1 || stack.indexOf(ch) > -1) && ends.indexOf(ch) > -1) {
      matching = starts[ends.indexOf(ch)];
      if (stack.length == 0 || (stack.pop() != matching)) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }

  return (stack.length == 0);
}

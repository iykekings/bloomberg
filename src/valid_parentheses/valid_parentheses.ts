export function isValid1(s: string) {
  const pattern = /\[\]|\{\}|\(\)/g;
  while (pattern.test(s)) {
    s = s.replace(pattern, "");
  }
  return s.length > 0 ? false : true;
};

type Open = "(" | "[" | "{";
export function isValid2(s: string) {
  const comp = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let Stack: Open[] = [];
  for (let i = 0; i < s.length; i++) {
    if ("({[".includes(s[i])) {
      Stack.push(s[i] as Open)
    } else {
      if (comp[Stack.pop() as Open] !== s[i]) return false;
    }
  }
  return true;
}
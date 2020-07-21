export function sortWords(input: string[], alphabets: string[]): string[] {
  const dict: Record<string, number> = {};
  for (let i = 0; i < alphabets.length; i++) {
    dict[alphabets[i]] = i;
  }

  const ans = input.sort((a, b) => {
    const aL = a.split(' ');
    const bL = b.split(' ');
    for (let i = 0; i < aL.length; i++) {
      if (dict[aL[i]] < dict[bL[i]]) return -1;
      if (dict[aL[i]] > dict[bL[i]]) return 1;
    }
    return -1;
  });

  return ans.map((w) => w.replace(/\s/g, ''));
}

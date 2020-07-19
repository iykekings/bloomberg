import { isValid1 as isValidRegex, isValid2 as isValidStack } from '../src/mod.ts';
import { assert } from './mod.ts';

Deno.test('Valid Parentheses with Regex', () => {
  assert(isValidRegex("()[]{}"));
  assert(isValidRegex("{[]}"));
  assert(isValidRegex("()"));
  assert(!isValidRegex("(]"));
  assert(!isValidRegex("([)]"));
  assert(isValidRegex("{[()]}"))
  assert(!isValidRegex("{[(])}"))
  assert(isValidRegex("{{[[(())]]}}"))
})

Deno.test('Valid Parentheses with Stack', () => {
  assert(isValidStack("()[]{}"));
  assert(isValidStack("{[]}"));
  assert(isValidStack("()"));
  assert(!isValidStack("(]"));
  assert(!isValidStack("([)]"));
  assert(isValidStack("{[()]}"))
  assert(!isValidStack("{[(])}"))
  assert(isValidStack("{{[[(())]]}}"))
})
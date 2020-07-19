import { isValid1 as isValidRegex, isValid2 as isValidStack } from '../src/valid_parentheses/valid_parentheses.ts';
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
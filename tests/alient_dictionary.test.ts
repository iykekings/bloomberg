import { sortWords } from '../src/mod.ts';
import { assertEquals } from './mod.ts';

Deno.test('Alien Dictionary', () => {
  const alphabets = [
    'a',
    'b',
    'c',
    'ch',
    'd',
    'dd',
    'e',
    'f',
    'ff',
    'g',
    'ng',
    'h',
    'i',
    'l',
    'll',
    'm',
    'n',
    'o',
    'p',
    'ph',
    'r',
    'rh',
    's',
    't',
    'th',
    'u',
    'w',
    'y',
  ];
  const inputs = ['dd r', 'n a h', 'd e a', 'dd', 'ng a h'];
  const test = sortWords(inputs, alphabets);

  assertEquals(test, ['dea', 'dd', 'ddr', 'ngah', 'nah']);
});

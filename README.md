# TypingTextGenerator

Typing Text is an npm package designed to help developers generate random numbers,words,alphabets,special characters for various purposes. It provides a convenient set of functions to generate text with customizable options.

## Installation

To install Typing Text, simply run:

npm i typingspeedtext

## Usage

#### Parameters:

- `num` (boolean): Whether to include numbers in the generated text.
- `alphabets` (boolean): Whether to include alphabets in the generated text.
- `characters` (boolean): Whether to include special characters in the generated text.
- `words` (boolean): Whether to include words in the generated text.
- `length` (number): The length of the generated text. 
-`count`(number):The length of majority element to be appended.

#### function syntax and use-

##### `generateWords`

Generates random text based on the provided options and returns the generated text.

function generateWords(num, alphabets, characters, words, length)

##### `generateMajorityElement`

Generates random text and appends a majority element based on the provided options. The majority element is appended a specified number of times to the generated text.

function generateMajorityElement(num, alphabets, characters, words, element, count, length)

##### `addarrayElementsandgenerate`

Generates random text and appends elements from an array to the generated text based on the provided options.

function addarrayElementsandgenerate(num, alphabets, characters, words, length, array)

```javascript
import {
  generateWords,
  generateMajorityElement,
  addarrayElementsandgenerate,
} from "typingspeedtext";

//or

import {
  generateWords,
  generateMajorityElement,
  addarrayElementsandgenerate,
} from "typingspeedtext/index.js";

const text = generateWords(true, true, false, true, 100);
//  generateWords(num, alphabets, characters, words, length)
// Generates a string on the basis of options provided

const newText = generateMajorityElement(
  true,
  false,
  false,
  false,
  "A",
  10,
  100
);
// Append majority element 'A' to the generated text
// element could be number or alphabet or special character
//  generateMajorityElement(num, alphabets, characters, words, element, count, length)

const array = ["apple", "banana", "cherry"];
const textWithArray = addarrayElementsandgenerate(
  true,
  true,
  false,
  true,
  100,
  array
);
// function generateWords(num, alphabets, characters, words, length)
// Generate text with additional array elements


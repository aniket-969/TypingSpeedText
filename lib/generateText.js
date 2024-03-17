import SetWords from "./setWords.js";

const SetWordsInstance = new SetWords();

function generateWords(num, alphabets, characters, words, length) {
  SetWordsInstance.generateTypingText(
    num,
    alphabets,
    characters,
    words,
    length
  );
  
  return SetWordsInstance.typingtext;
}

function generateMajorityElement(
  num,
  alphabets,
  characters,
  words,
  element,
  count,
  length
) {
  if (typeof element !== "string" || element.length !== 1) {
    throw new Error("Element must be a single character string.");
  }

  SetWordsInstance.generateTypingText(
    num,
    alphabets,
    characters,
    words,
    length
  );

  SetWordsInstance.appendMajorityElement(element, length, count);
 
  return SetWordsInstance.typingtext;
}

function addarrayElementsandgenerate(
  num,
  alphabets,
  characters,
  words,
  length,
  array
) {
  const totalLength = length + array.length;

  if (totalLength > 400) {
    throw new Error("Total length should be less than or equal to 400.");
  }

  SetWordsInstance.generateTypingText(
    num,
    alphabets,
    characters,
    words,
    length
  );

  SetWordsInstance.appendFromArray(array);
  
  return SetWordsInstance.typingtext;
}

export { generateWords, generateMajorityElement, addarrayElementsandgenerate };

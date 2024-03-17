declare module 'typingspeedtext' {
    export  function generateWords(
        num: boolean,
        alphabets: boolean,
        characters: boolean,
        words: boolean,
        length: number
      ): string;
    
      export  function generateMajorityElement(
        num: boolean,
        alphabets: boolean,
        characters: boolean,
        words: boolean,
        element: string,
        count: number,
        length: number
      ): string;
    
      export  function addarrayElementsandgenerate(
        num: boolean,
        alphabets: boolean,
        characters: boolean,
        words: boolean,
        length: number,
        array: string[] // Adjust the type of array as needed
      ): string;
    
  
  }
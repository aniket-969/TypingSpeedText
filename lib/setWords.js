const words = [
  "about",
  "above",
  "ability",
  "accept",
  "add",
  "after",
  "again",
  "air",
  "all",
  "almost",
  "along",
  "also",
  "always",
  "America",
  "an",
  "and",
  "animal",
  "another",
  "answer",
  "any",
  "are",
  "around",
  "as",
  "ask",
  "at",
  "away",
  "back",
  "be",
  "because",
  "believe",
  "been",
  "behavior",
  "before",
  "began",
  "begin",
  "being",
  "below",
  "between",
  "business",
  "big",
  "book",
  "both",
  "boy",
  "but",
  "by",
  "call",
  "came",
  "can",
  "campaign",
  "cancer",
  "candidate",
  "capital",
  "car",
  "carry",
  "change",
  "children",
  "city",
  "close",
  "come",
  "could",
  "country",
  "cut",
  "day",
  "did",
  "dark",
  "data",
  "daughter",
  "debate",
  "different",
  "do",
  "does",
  "don't",
  "decision",
  "defense",
  "degree",
  "Democrat",
  "democratic",
  "down",
  "each",
  "earth",
  "eat",
  "end",
  "economic",
  "economy",
  "edge",
  "education",
  "effect",
  "effort",
  "eight",
  "either",
  "election",
  "enough",
  "even",
  "every",
  "example",
  "eye",
  "face",
  "family",
  "far",
  "father",
  "feet",
  "federal",
  "feel",
  "feeling",
  "few",
  "field",
  "fight",
  "figure",
  "fill",
  "film",
  "final",
  "finally",
  "financial",
  "few",
  "find",
  "first",
  "follow",
  "food",
  "for",
  "form",
  "found",
  "four",
  "from",
  "get",
  "girl",
  "give",
  "go",
  "good",
  "got",
  "great",
  "green",
  "ground",
  "group",
  "grow",
  "growth",
  "guess",
  "gun",
  "guy",
  "group",
  "grow",
  "had",
  "hand",
  "hard",
  "has",
  "have",
  "he",
  "head",
  "hear",
  "help",
  "her",
  "herself",
  "high",
  "him",
  "himself",
  "his",
  "history",
  "hit",
  "hold",
  "hope",
  "hospital",
  "hot",
  "hotel",
  "hour",
  "here",
  "high",
  "him",
  "his",
  "home",
  "house",
  "how",
  "idea",
  "if",
  "important",
  "in",
  "Indian",
  "into",
  "is",
  "it",
  "its",
  "it's",
  "image",
  "imagine",
  "impact",
  "important",
  "improve",
  "in",
  "include",
  "including",
  "increase",
  "indeed",
  "indicate",
  "just",
  "keep",
  "kind",
  "key",
  "kid",
  "kill",
  "kitchen",
  "knowledge",
  "know",
  "land",
  "large",
  "last",
  "later",
  "learn",
  "leave",
  "left",
  "let",
  "letter",
  "life",
  "light",
  "like",
  "line",
  "list",
  "little",
  "live",
  "long",
  "look",
  "made",
  "make",
  "man",
  "many",
  "may",
  "me",
  "mean",
  "men",
  "might",
  "mile",
  "miss",
  "more",
  "most",
  "mother",
  "mountain",
  "move",
  "much",
  "must",
  "my",
  "name",
  "near",
  "need",
  "never",
  "new",
  "next",
  "night",
  "no",
  "not",
  "now",
  "number",
  "of",
  "off",
  "often",
  "oil",
  "old",
  "on",
  "once",
  "one",
  "only",
  "open",
  "or",
  "other",
  "our",
  "out",
  "over",
  "own",
  "page",
  "paper",
  "part",
  "people",
  "picture",
  "place",
  "plant",
  "play",
  "point",
  "put",
  "question",
  "quick",
  "quickly",
  "quite",
  "race",
  "radio",
  "raise",
  "range",
  "rate",
  "rather",
  "reach",
  "read",
  "ready",
  "real",
  "reality",
  "realize",
  "read",
  "really",
  "right",
  "river",
  "run",
  "said",
  "same",
  "saw",
  "say",
  "school",
  "sea",
  "second",
  "see",
  "seem",
  "sentence",
  "set",
  "she",
  "should",
  "show",
  "side",
  "small",
  "so",
  "some",
  "something",
  "sometimes",
  "song",
  "soon",
  "sound",
  "spell",
  "start",
  "state",
  "still",
  "stop",
  "story",
  "study",
  "such",
  "take",
  "talk",
  "tell",
  "than",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "thing",
  "think",
  "this",
  "those",
  "thought",
  "three",
  "through",
  "time",
  "to",
  "together",
  "too",
  "took",
  "tree",
  "try",
  "turn",
  "two",
  "travel",
  "treat",
  "treatment",
  "tree",
  "trial",
  "trip",
  "trouble",
  "true",
  "truth",
  "try",
  "turn",
  "TV",
  "two",
  "type",
  "under",
  "understand",
  "under",
  "until",
  "up",
  "us",
  "use",
  "very",
  "walk",
  "want",
  "was",
  "watch",
  "water",
  "way",
  "we",
  "well",
  "went",
  "were",
  "what",
  "when",
  "where",
  "which",
  "while",
  "white",
  "who",
  "why",
  "will",
  "with",
  "without",
  "word",
  "work",
  "world",
  "would",
  "write",
  "year",
  "you",
  "young",
  "your",
];

const specialChar = "!@#$%^&*()-+=[]{}|;:,.<>?/`";
const alhabets = "abcdefghijklmnopqrstuvwxyz";

class SetWords {
  constructor() {
    this.typingtext = "";
  }

  addWords(length) {
    const shuffledWords = this.shuffleArray(words);

    const selectedWords = shuffledWords.slice(0, length);
    this.typingtext += selectedWords.join(" ") + " ";
    // console.log("After words",this.typingtext);
  }

  addNumbers(length) {
    for (let i = 0; i < length; i++) {
      this.typingtext += Math.floor(Math.random() * 10) + " ";
    }
    //   console.log('after numbers',this.typingtext);
  }

  addCharacters(length) {
    const specialCharLength = specialChar.length;
    for (let i = 0; i < length; i++) {
      this.typingtext +=
        specialChar.charAt(Math.floor(Math.random() * specialCharLength)) + " ";
    }
    //   console.log('after chara',this.typingtext);
  }

  addAlphabets(length) {
    for (let i = 0; i < length; i++) {
      this.typingtext += alhabets.charAt(Math.floor(Math.random() * 26)) + " ";
    }
    //   console.log("after alphabets",this.typingtext)
  }

  shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  appendMajorityElement(element, length, count) {
    count = Math.min(count, length);

    for (let i = 0; i < count; i++) {
      this.typingtext += element + " ";
    }
    const wordsArray = this.typingtext.split(" ");
    const shuffledWordsArray = this.shuffleArray(wordsArray);
    this.typingtext = shuffledWordsArray.join(" ");
  }

  appendFromArray(array) {
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array.");
    }

    array.forEach((element) => {
      this.typingtext += element.toString() + " ";
    });
    const wordsArray = this.typingtext.split(" ");

    // Shuffle the array of words
    const shuffledWordsArray = this.shuffleArray(wordsArray);

    // Join the shuffled array of words back into a string
    this.typingtext = shuffledWordsArray.join(" ");
  }

  generateTypingText(isNum, isAlpha, isCharacters, isWords, length) {
    if (
      typeof isNum !== "boolean" ||
      typeof isAlpha !== "boolean" ||
      typeof isCharacters !== "boolean" ||
      typeof isWords !== "boolean"
    ) {
      throw new Error(
        "Invalid input type. All parameters isNum, isAlpha, isCharacters, isWords must be boolean."
      );
    }
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error(
        "Invalid length. Length must be a natural number positive integer"
      );
    }

    if (length > 400) {
      length = 400;
    }

    const trueCount = [isNum, isAlpha, isCharacters, isWords].filter(
      (val) => val
    ).length;

    const divisor = Math.floor(length / trueCount) + 1;

    if (isNum) {
      this.addNumbers(divisor);
    }

    if (isAlpha) {
      this.addAlphabets(divisor);
    }
    if (isWords) {
      this.addWords(divisor);
    }
    if (isCharacters) {
      this.addCharacters(divisor);
    }

    const wordsArray = this.typingtext.split(" ");

    // Shuffle the array of words
    const shuffledWordsArray = this.shuffleArray(wordsArray);

    // Join the shuffled array of words back into a string
    this.typingtext = shuffledWordsArray.join(" ");
  }
}

export default SetWords;

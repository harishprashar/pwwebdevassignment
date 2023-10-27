function wordCount(sentence) {
  const words = sentence.toLowerCase().split(/\W+/).filter(Boolean);
  const wordMap = new Map();

  for (const word of words) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }

  return wordMap;
}

const sentence = "please please submit your assignment on time, your assignments are important";
const result = wordCount(sentence);
console.log(result);
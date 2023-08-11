// Original story
let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Split the story into words
let storyWords = story.split(" ");

// Words to be replaced or filtered
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

// Count variable to keep track of word processing
let count = 0;

// Count the total number of words in the story
storyWords.forEach((word) => {
  count++;
});

// Filter out unnecessary word
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

// Correct misspelled word
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful"; // Corrected spelling
  } else {
    return word;
  }
});

// Find index of the bad word
const badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

// Replace the bad word with a better word
storyWords[badWordIndex] = "really"; // Replaced "freaking" with "really"

// Check if all words have a length greater than 10
let lengthCheck = storyWords.every((word) => {
  return word.length > 10;
});

// Replace long words with "dazzling" using forEach
storyWords.forEach((word, index) => {
  if (word.length > 10) {
    storyWords[index] = "dazzling";
  }
});

// Construct the new story string
const newStory = storyWords.join(" ");

// Display the new story and other checks
console.log(newStory); // Output the modified story
console.log(lengthCheck); // Output whether all words are >10 characters

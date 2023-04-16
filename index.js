const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
How can we "iterate" through individual words in a string?
  * Use the split method
*/

const titleCased = () => {
  return tutorials.map(tutorial => {
    const sent = tutorial.split(" ");
    const capitals = sent.map(word => word[0].toUpperCase() + word.slice(1));
    const capitalizedWords = capitals.join(" ");
    return capitalizedWords;
  });
};



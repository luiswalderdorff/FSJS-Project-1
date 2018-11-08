// Quotes for the generator
const quotes = [
  {
    quote: `Don’t walk in front of me… I may not follow.
            Don’t walk behind me… I may not lead.
            Walk beside me… just be my friend.`,
    source: "Albert Camus",
    citation: "",
    year: "",
    tag: "friendship"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost",
    citation: "The Harper Book of Quotations",
    year: "1993",
    tag: "life"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
    citation: "Mark Twain's Notebook",
    year: "1894",
    tag: "truth"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "A Testament of Hope: The Essential Writings and Speeches",
    year: "",
    tag: "love"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    source: "Ralph Waldo Emerson",
    citation: "",
    year: "",
    tag: "individuality"
  }
];

// Select a quote at random

function getRandomQuote (array) {
  const randomNumber = Math.floor(Math.random() * (array.length));
  return array[randomNumber];
}


// Create HTML for the quote and print it to the page

function printQuote () {
  const randomQuote = getRandomQuote(quotes);
  let quoteHTML = "";
  quoteHTML = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    quoteHTML += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.tag) {
    quoteHTML += `<br /><span class="tag">tag: ${randomQuote.tag}</span>`
  }
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML;
  // Create Random Color (had to put inside of function, so a new color is created every time, not just on page start)
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  //Change to random background color
  document.querySelector("body").style.backgroundColor = randomColor;
  // Make the timer reset every time the function is called (so it also takes 20 seconds after the click Event is fired)
  clearInterval(timer);
  timer = setInterval(printQuote, 20000);
}

// Print new quote to page every 20 seconds

let timer = setInterval(printQuote, 20000);

// Click Event Handler
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

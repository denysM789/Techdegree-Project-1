/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The world is yours", 
    source: "Tony Montana", 
  },
  {
    quote: "What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do…?", 
    source: "Friedrich Nietzsche", 
  },
  {
    quote: "Ask yourself: Have you been kind today? Make kindness your daily modus operandi and change your world.", 
    source: "Annie Lennox", 
  },
  {
    quote: "Anything that has real and lasting value is always a gift from within", 
    source: "Franz Kafka", 
  },
  {
    quote: "In the highest civilization, the book is still the highest delight. He who has once known its satisfactions is provided with a resource against calamity.", 
    source: "Ralph Waldo Emerson", 
    citation: "His book",
    date: "1938",
  }
]; 


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomQuote = quotes[ Math.floor( Math.random() * quotes.length ) ];
  return randomQuote;
};


/***
 * `printQuote` function
***/
function printQuote() {
  const callGetRandomQuote = getRandomQuote(quotes);
  var html = `
  <p class="quote">${callGetRandomQuote.quote} </p>
  <p class="source"> ${callGetRandomQuote.source}
  `;
  

  if ( callGetRandomQuote.citation !== undefined) {
    html += `
    <span class='citation' ${callGetRandomQuote.citation} </span>
    `;
  }

  if ( callGetRandomQuote.date !== undefined) {
    html += `
    <span class='year'> ${callGetRandomQuote.date} </span>
    `;
}

    html += `</p>`;

    document.getElementById('quote-box').innerHTML = html; 
    

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Grab the elements to be able to change them.
let quoteBtn = document.querySelector('#quote-btn');
let author = document.querySelector('#author');
let quote = document.querySelector('#quote');

//list of quotes
let quotes = [
    {
        author: "Billy",
        quote: "Billy knows best"
    },
    {
        author: "Steve",
        quote: "Coding is fun"
    },
    {
        author: "Ted D",
        quote: "The best way to learn web developing is to build on what you know."
    }
];

//initiate first quote
author.innerHTML = quotes[0].author;
quote.innerHTML = quotes[0].quote;


let currentQuoteIndex = 0;

//Give the button functionality to change the quote
quoteBtn.addEventListener('click', function(){
    // generate random number for array index
    let random = Math.floor(Math.random()*quotes.length);

    //If the new quote index is the same as previous then generate a new one
    while(currentQuoteIndex == random){
        random = Math.floor(Math.random()*quotes.length);
    }
   
    //Display new quote
    author.innerHTML = quotes[random].author;
    quote.innerHTML = quotes[random].quote;

    //set this quote as the current one
    currentQuoteIndex = random;
 
});


//Grab the elements to be able to change them.
let quoteBtn = document.querySelector('#quote-btn');
let author = document.querySelector('#author');
let quote = document.querySelector('#quote');

let currentQuoteIndex = 0;

//Give the button functionality to change the quote
quoteBtn.addEventListener('click', function(){

    let requestQuotes = new XMLHttpRequest;
    requestQuotes.open('Get','https://type.fit/api/quotes');
    requestQuotes.onload = function(){

        let theQuotes = JSON.parse(requestQuotes.responseText);
        
            // generate random number for array index
        let random = Math.floor(Math.random()*theQuotes.length);

        //If the new quote index is the same as previous then generate a new one
        while(currentQuoteIndex == random){
            random = Math.floor(Math.random()*theQuotes.length);
        }

        //Display new quote
        author.innerHTML = "- " + theQuotes[random].author;
        quote.innerHTML = theQuotes[random].text;

        //set this quote as the current one
        currentQuoteIndex = random;
    };
    requestQuotes.send();
});


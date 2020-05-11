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

//creates an array of objects, that stores all available quotes.
var quotes = [
    {
     quote: 'All our dreams can come true, if you have the courage to pursue them',
     source: 'Walt Disney', 
     citation: 'quoteswise.com',
     year:'2016',
     categorization: 'Motivation Quotes'
    },
    {
     quote: 'Be the change you wish to see in the world',
     source: 'Mahatma Gandhi', 
     citation: 'huffpost.com',
     year:'2010', 
     categorization: 'Motivation Quotes'
    },
    {
     quote: 'I have not failed. I have just found 10,000 ways that will not work',
     source: 'Thomas Edison', 
     citation: 'goodreads.com',
     year:'',
     categorization: 'Entrepreneurship'
    },
    {
     quote: 'Someone is sitting in the shade today because someone planted a tree a long time ago.',
     source: 'Warren Buffet', 
     citation: '',
     year:'',
     categorization: 'Entrepreneurship'
    },
    {
     quote: 'Learn to Stop Negotiating with Yourself',
     source: 'Tony Robbins', 
     citation: 'Tony Robbins Podcast',
     year:'',
     categorization: 'Growth Mindset'
    },
    {
     quote: 'Action expresses priorities',
     source: 'Mahatma Gandhi', 
     citation: '',
     year:'',
     categorization: 'Growth Mindset'
    },
    {
     quote: 'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.',
     source: 'Mark Twain', 
     citation: '',
     year:'',
     categorization: 'Growth Mindset'
    },
    {
     quote: 'A leader is one who knows the way, goes the way, and shows the way.',
     source: 'John C. Maxwell', 
     citation: '',
     year:'',
     categorization: 'Entrepreneurship'
    },
  {
     quote: 'Successful entrepreneurs do not wait got the perfect moment - they create it.',
     source: 'Richard Branson', 
     citation: '',
     year:'',
     categorization: 'Entrepreneurship'
    }  
];

//creates an array of objects that stores all available background colours

var backgroundColor =[
    {backgroundColor:'pink'},
    {backgroundColor:'purple'},
    {backgroundColor:'blue'},
    {backgroundColor:'green'},
    {backgroundColor:'orange'},
    {backgroundColor:'yellow'},
    {backgroundColor:'limegreen'}
];


/***
 * `getRandomQuote` function
***/

//function that generates a random Quote
    function getRandomQuote(){
        var randomNumber = Math.floor(Math.random()*quotes.length);
        return quotes[randomNumber]; 
    }

//function that generates a random Color
    function getRandomColour(){
        var randomColor = Math.floor(Math.random()*backgroundColor.length);
        return backgroundColor[randomColor];
    }

/***
 * `printQuote` function
***/

//funtion that prints a random Quote to the screen on screen load and on button press
    function printQuote(){
        var printValue = getRandomQuote();
        var HTMLquote = "";
        HTMLquote += '<p class="quote">' + printValue.quote + '</p>';
        HTMLquote += '<p class="source">' + printValue.source;
        //conditional statement, prints citation if there is an assigned value to the variable
        if(printValue.citation){
            HTMLquote += '<span class="citation">' + printValue.citation + '</span>';
        }
        //conditional statement, prints year if there is an assigned value to the variable
        if(printValue.year){
        HTMLquote += '<span class="source">' + printValue.year+ '</span>';
        }
        //conditional statement, prints categorizatio if there is an assigned value to the variable
        if(printValue.categorization){
            HTMLquote += '<span class="citation">' + printValue.categorization + '</span>';
        }
        HTMLquote += '</p>';
        
        //DOM element selection & manipulation to insert html code with newly generated random quote
        
        document.getElementById("quote-box").innerHTML = HTMLquote;
        
        //DOM element selection & manipulation to set the background color or the document
        
        randomColour = getRandomColour().backgroundColor;
        
        document.body.style.backgroundColor = randomColour;
    }

//function that automatically resets the Quote printed to the screen & the background colour every 3 seconds
    function resetInterval(){
        var pageResetInterval = setInterval(printQuote,3000);
    };

//function calls to printQuote and to automatically reset the Quote & Color every 3 seconds.

printQuote();
resetInterval();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


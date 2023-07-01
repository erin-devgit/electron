const quotes = [
    {
        quote :"A long life may not be good enough, but a good life is long enough.",
        author:"Benjamin Franklin",
    },
    {
        quote :"Life is like playing a violin in public and learning the instrument as one goes on.",
        author:"Samuel Butler",
    },
    {
        quote :"Happiness lies in the joy of achievement and the thrill of creactive effort.",
        author:"Franklin D. Roosevelt",
    },
    {
        quote :"For the things we have to learn before we can do them, we learn by doing them.",
        author:"Asritotle",
    },
    {
        quote :"We need men who can dream of thing that never were.",
        author:"John F. Kennedy",
    },
    {
        quote :"A day spent with you is my favorite day. So today is my new favorite day.",
        author:"Winnie The Pooh",
    },
    {
        quote :"If you can't say something nice, don't say nothing at all",
        author:"Bambi",
    },
    {
        quote :"The only way to get what you want in this world is throgh hard work",
        author:"The princess and the Frog",
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
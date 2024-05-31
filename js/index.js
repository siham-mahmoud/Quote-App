var authors = [
    'Confucius',
    'Tony Robbins',
    'Peter Drucker',
    'Dalai Lama',
    'Nelson Mandela'
];

var quotes = [
    'It does not matter how slowly you go as long as you do not stop.',
    'The only impossible journey is the one you never begin.',
    'The best way to predict the future is to create it.',
    'Happiness is not something ready made. It comes from your own actions.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.'
];

let lastRandom = -1;

function generateQuote() {
    var random;
    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (random === lastRandom);

    lastRandom = random;

    document.querySelector('#quoteOutput').innerHTML = `\"${quotes[random]}\"`;
    document.querySelector('#authorOutput').innerHTML = `--${authors[random]}`;

}
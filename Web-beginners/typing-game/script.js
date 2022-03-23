// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
let timer;
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const divElement = document.getElementById('typing');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () => {
    // randomly select a quote from the quotes array
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // quote into an array of words -> track the word the player is currently typing
    words = quote.split(' ');
    // player will start on the first word
    wordIndex = 0;

    // UI updates
    // highlight the word on the display
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // display the quote to the player
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';

    // Setup the divbox
    divElement.style.visibility = 'visible';

    // Setup the textbox
    typedValueElement.style.visibility = 'visible';
    // Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event hander

    // Start the timer
    startTime = new Date().getTime();
    timer = setInterval(function() {
        const runningtime = new Date().getTime() - startTime;
        messageElement.innerHTML = (runningtime / 1000).toFixed(2);
    }, 10);
})

typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence
        // Display success
        clearInterval(timer);
        messageElement.innerHTML = '';
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${(elapsedTime / 1000).toFixed(2)} seconds.`;
        messageElement.innerHTML = message; 

        // hide textbox
        typedValueElement.style.visibility = 'hidden';
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        // end of word
        // clear the typedValueElemets for the new word
       typedValueElement.value = '';
       // move th the next word
       wordIndex++;
       // reset the class name for all elements in quote
       for (const wordElement of quoteElement.childNodes) {
           wordElement.className = '';
       }
       // highlight the new word
       quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        // currently correct
        // highlight the next word
        typedValueElement.className = '';
    } else {
        // error state
        typedValueElement.className = 'error';
    }
});
// Random Quote Generator with optional Facebook Share Button

// Array of quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex];
    document.getElementById('quote-display').textContent = quoteText;

    // Update Facebook share link if available
    const facebookShareButton = document.getElementById('facebook-share');
    if (facebookShareButton) {
        const encodedQuote = encodeURIComponent(quoteText);
        facebookShareButton.href = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodedQuote}`;
    }
}

// HTML structure
const appHTML = `
    <div style="font-family: Arial, sans-serif; text-align: center; margin: 20px;">
        <h1>Random Quote Generator</h1>
        <p id="quote-display" style="font-size: 1.5em; margin: 20px 0;">Click below to generate a quote!</p>
        <button onclick="generateQuote()" style="padding: 10px 20px; font-size: 1em;">Generate Quote</button>
        <br><br>
        <a id="facebook-share" 
           href="#" 
           target="_blank" 
           style="display: inline-block; margin-top: 10px; text-decoration: none; color: #3b5998; font-size: 1em;">Share on Facebook</a>
    </div>
`;

document.body.innerHTML = appHTML;

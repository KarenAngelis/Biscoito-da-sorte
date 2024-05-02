
// FUNCTION TO CLICK ON THE CLOSED COOKIE AND OPEN THE FORTUNE COOKIE

function handleClick() {
    // Selects the #closed-cookie element and the #open-cookie element
    var closedCookie = document.getElementById('closed-cookie');
    var openCookie = document.getElementById('open-cookie');

    // Checks if the #closed-cookie element exists
    if (closedCookie) {
        // Hides the #closed-cookie element
        closedCookie.style.display = 'none';
    }

    // Checks if the #open-cookie element exists
    if (openCookie) {
        // Displays the #open-cookie element
        openCookie.style.display = 'block';
    }
}

// FUNCTION TO CLICK ON THE COOKIE ON THE OPEN COOKIE BUTTON AND RETURN IT TO THE ORIGINAL STATE

// Function to handle click on the "Open Another Cookie" button
function handleOpenAnotherCookie() {
    // Selects the #closed-cookie and #open-cookie elements
    var closedCookie = document.getElementById('closed-cookie');
    var openCookie = document.getElementById('open-cookie');

    // Checks if the #closed-cookie element exists and is hidden
    if (closedCookie && closedCookie.style.display === 'none') {
        // Displays the #closed-cookie element
        closedCookie.style.display = 'block';
    }

    // Checks if the #open-cookie element exists and is visible
    if (openCookie && openCookie.style.display !== 'none') {
        // Hides the #open-cookie element
        openCookie.style.display = 'none';
    }
}

// Selects the "Open Another Cookie" button
var openAnotherCookieButton = document.getElementById('open-another-cookie');

// Adds an event listener for click on the button
if (openAnotherCookieButton) {
    openAnotherCookieButton.addEventListener('click', handleOpenAnotherCookie);
}

// FUNCTION TO CHANGE AND RANDOMLY SELECT FORTUNE MESSAGES:
// Array of random messages
var fortuneMessages = [
    "Be happy, life is only one",
    "Enjoy every moment of your life",
    "Great achievements are coming",
    "Believe in your dreams and move forward",
    "Be grateful for what you have",
    "Everything will be fine in the end",
    "Maintain a positive attitude",
    "Success is on your horizon"
];

// Function to select a random message
function selectRandomMessage() {
    // Generates a random index based on the length of the message array
    var randomIndex = Math.floor(Math.random() * fortuneMessages.length);
    // Returns the message corresponding to the random index
    return fortuneMessages[randomIndex];
}

// Function to update the message text in the HTML element
function updateFortuneText() {
    // Selects the <p> element with the id "fortune-text"
    var fortuneTextElement = document.getElementById("fortune-text");
    // Checks if the element was found
    if (fortuneTextElement) {
        // Selects a random message
        var randomMessage = selectRandomMessage();
        // Updates the message text in the HTML element
        fortuneTextElement.textContent = randomMessage;
    }
}

// Function to reload the page
function reloadPage() {
    location.reload(); // Reloads the page
}

// Adds an event listener to the "Open Another Cookie" button
var openAnotherCookieButton = document.getElementById("open-another-cookie");
if (openAnotherCookieButton) {
    openAnotherCookieButton.addEventListener("click", reloadPage);
}

// Calls the updateFortuneText() function to display a random message initially
updateFortuneText();
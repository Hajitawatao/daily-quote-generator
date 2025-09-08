const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Don’t let yesterday take up too much of today.",
  "It always seems impossible until it’s done.",
  "Do something today that your future self will thank you for."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

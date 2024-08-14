export function renderQuote(quotes, i) {
    return `
    <strong>Tap to see more.</strong>
    <h1 class="question">How is your experience with small courses?</h1>
    <p class="quote" style="font-size: ${Math.max(0.8, 2.5 - Math.sqrt(quotes[i].length / 150).toFixed(2)) * 16}px">${quotes[i]}</p>
    <br>
    <span class="position">${i + 1}/${quotes.length}</span>
    <br>
    `
}
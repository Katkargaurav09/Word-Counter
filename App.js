const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

function updateCounts() {
  if (!input.value) {
    resetCounts();
    return;
  }

  const wordsArray = input.value.trim().match(/\b\w+\b/g);
  wordCount.innerText = wordsArray ? wordsArray.length : 0;

  // Count Characters
  const characters = input.value.replace(/\s/g, "");
  characterCount.innerText = characters.length;

  // Count Sentences
  const sentenceArray = input.value.trim().match(/[^\.!\?]+[\.!\?]+/g);
  sentenceCount.innerText = sentenceArray ? sentenceArray.length : 0;

  // Count Paragraph
  const paragraphArray = input.value.split("\n").filter((p) => p.trim() !== "");

  paragraphCount.innerText = paragraphArray.length;
}

function resetCounts() {
  wordCount.textContent =
    characterCount.textContent =
    sentenceCount.textContent =
    paragraphCount.textContent =
      "0";
}

input.addEventListener("input", updateCounts);

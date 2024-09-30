// Sett startverdien for de ulike tellerene
let wordCounter = 0; // 
let positionCounter = 0;
let wrongCounter = 0;

// Lag en liste med ulike ord
// Hentet fra https://en.wiktionary.org/wiki/Wiktionary:Example_sentences
const words = 'an example sentence is a sentence written to demonstrate usage of a particular word in context';
const wordsList = words.split(" ")

// TODO: Hent ut HTML #id og knappen
const word = document.getElementById('word');
const wrongs = document.getElementById('wrongs');
const letter = document.getElementById('letter');
const button = document.getElementById('startKnapp');

const setWord = () => {
  // Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  word.textContent = wordsList[wordCounter];
};

const changeWord = () => {
  // Nullstill posisjonstelleren
  positionCounter = 0;
  // Oppdater telleren vi bruker for å velge ut ord
  wordCounter += 1;
  setWord();
};

// Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  return (letter === word[position])
};

// Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  return (position === word.length)
};

const handleKeyUp = ({ key }) => {
  // Hent ut ordet vi skal skrive
  let word = wordsList[wordCounter];
  if (checkPosition(word, positionCounter, key)) {
    // Øk posisjonstelleren
      positionCounter += 1;
    if (wordIsCorrect(word, positionCounter)) {
      // Trigg funksjonen som bytter ord
      changeWord();
    }
  } else {
    // Oppdater telleren for "feil"
    wrongCounter += 1;
  }
  updateUI(key);
};

const updateUI = (key) => {
  if (words[wordCounter]) {
    wrongs.textContent = `Antall feil: ${wrongCounter}`;
    letter.innerHTML = key;
    word.innerHTML = `
    <span class="green">${wordsList[wordCounter].slice(0, positionCounter)}</span>
    ${wordsList[wordCounter].slice(positionCounter)}`;
  }
};

window.addEventListener('keyup', handleKeyUp);
button.addEventListener('click', () => {
  button.disabled = true;
  setWord();
});

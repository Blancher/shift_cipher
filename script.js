document.getElementById('submit').addEventListener('click', () => {
  let number = document.getElementById('number').value;
  const mode = document.getElementById('select').value;
  const word = document.getElementById('word').value;
  const returned = document.getElementById('returned');
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let newString = '';
  let returnedArray = [];
  if (word === '' || number === '') {
    returnedArray.push('Please fill out all input fields before submitting.');
  }
  if (number > 26) {
    returnedArray.push("The shift number can't be greater than 26.");
  }
  if (number < 0) {
    returnedArray.push("The shift number can't be negative.");
  }
  if (word !== '' && number >= 0 && number <= 26) {
    number = parseInt(number);
    const index = num => mode === 'encrypt' ? alphabet[alphabet.indexOf(word[num].toUpperCase()) + number] : alphabet[alphabet.lastIndexOf(word[num].toUpperCase()) - number];
    for (let i=0; i < word.length; i++) {
      if (alphabet.includes(word[i].toUpperCase())) {
        newString += index(i);
      } else {
        newString += word[i];
      }
    }
    returnedArray.push(newString);
  }
  returned.textContent = returnedArray.join('');
});

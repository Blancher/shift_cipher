document.getElementById('submit').addEventListener('click', () => {
  let number = document.getElementById('number').value;
  const mode = document.getElementById('select').value;
  const word = document.getElementById('word').value;
  const returned = document.getElementById('returned');
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let newString = '';
  let returnedString = [];
  if (word == '' || number == '') {
    returnedString.push('Please fill out all input fields before submitting.');
  }
  /*if (number > 26) {
    returnedString.push("The shift number can't be greater than 26.");
  }*/
  if (number < 0) {
    returnedString.push("The shift number can't be negative.");
  }
  if (word != '' && number > -1 && number <= 26) {
    number = parseInt(mathmod(number,26));
    if (mode == 'encrypt') {
      for (let i=0; i < word.length; i++) {
        if (!alphabet.includes(word[i].toUpperCase())) {
          newString += word[i];
        } else if (alphabet.includes(word[i].toUpperCase())) {
          newString += alphabet[alphabet.indexOf(word[i].toUpperCase()) + number];
        }
      }
    } else if (mode == 'decrypt') {
      for (let i=0; i < word.length; i++) {
        if (!alphabet.includes(word[i].toUpperCase())) {
          newString += word[i];
        } else if (alphabet.includes(word[i].toUpperCase())) {
          newString += alphabet[alphabet.lastIndexOf(word[i].toUpperCase()) - number];
        }
      }
    }
    returnedString.push(newString);
  }
  returned.textContent = returnedString.join('');
});

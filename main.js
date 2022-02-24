let checkVowelBtn = document.querySelector('button');
let checkConsonantBtn = document.querySelector('.consonant');
let checkBothBtn = document.querySelector('.both');
let body = document.querySelector('body');

checkVowelBtn.addEventListener('click', checkVowel);
checkConsonantBtn.addEventListener('click', checkConsonant);
checkBothBtn.addEventListener('click', checkBoth);

function checkVowel(e) {
  let textInput = document.querySelector('.text').value;

  let vowel = textInput.match(/[aeiou]/gi);
  let outPut = document.createElement('h2');
  outPut.className = 'vowel-number';
  outPut.appendChild(
    document.createTextNode(
      `Your word was '${textInput}' and it had ${vowel.length} vowels.`
    )
  );
  body.appendChild(outPut);

  document.querySelector('.text').value = '';
}

function checkConsonant(e) {
  let textInput = document.querySelector('.text').value;

  let consonant = textInput.match(/[bcdfghjklmnpqrstvwxyz]/gi);

  let outPut = document.createElement('h2');
  outPut.className = 'consonant-number';
  outPut.appendChild(
    document.createTextNode(
      `Your word was '${textInput}' and it had ${consonant.length} consonants`
    )
  );
  body.appendChild(outPut);

  document.querySelector('.text').value = '';
}

function checkBoth(e) {
  let textInput = document.querySelector('.text').value;

  let vowel = textInput.match(/[aeiou]/gi);
  let consonant = textInput.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  let sum = '';

  let outPut = document.createElement('h2');
  outPut.className = 'vowel-number';
  outPut.appendChild(
    document.createTextNode(
      `Your word was '${textInput}' and it had ${vowel.length} vowels and ${consonant.length}
      consonants.`
    )
  );
  body.appendChild(outPut);

  document.querySelector('.text').value = '';
}

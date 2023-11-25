# Projects related to DOM

## Project Link 
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code

## Project  1 =>

```javascript
    
    console.log("NAMAN")

    const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      button.innerHTML = 'naman';
      if (e.target.id === 'grey') {
        button.style.backgroundColor = 'magenta';
      }
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      button.innerHTML = 'naman';
      if (e.target.id === 'white') {
        button.style.backgroundColor = 'pink';
      }
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      button.innerHTML = 'naman';
      if (e.target.id === 'blue') {
        button.style.backgroundColor = 'red';
      }
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      button.innerHTML = 'Naman';
      if (e.target.id === 'yellow') {
        button.style.backgroundColor = 'orange';
      }
    }
  });
});

    
```


## Project 2 =>

```javaScript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === `` || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height ${`height`}';
    results.style.color = 'maroon';
  } else if (weight === `` || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight ${`weight`}';
    results.style.color = 'cyan';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    results.style.color = 'green';
  }
});


```

## Project 3 =>

```javaScript

console.log("TIME")
const clock = document.getElementById('clock');
// document.querySelector('#clock')




setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString()
}, 1000)

```

## Project 4  =>
```javaScript

let number = console.log(Math.floor(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.loworHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
// displayMessage()

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert(`Enter a valid number`);
  } else if (guess < 1 || guess > 100) {
    alert(`Enter a valid number`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === number) {
    displayMessage(`You Guessed It Right.`);
    endGame();
  } else if (guess < number) {
    displayMessage(`Number Is TOOO Low.`);
  } else if (guess > number) {
    displayMessage(`Number Is TOOO High.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    number = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


### Project 6 =>

```javaScript

 
 const randomColor = function(){
   const hex = '0123456789ABCDEF'
   let color = '#'

   for(let i = 0 ; i < 6 ; i++ ){
    color += hex[Math.floor(Math.random()*16)]
   }
   return color;
 };

 let intervalId;

 const startChangingColor = function(){
    intervalId  = setInterval(changeBgcolor,600)

  function changeBgcolor(){
    document.body.style.backgroundColor = randomColor()
  }
 }
 
 const stopChangingColor = function(){
   clearInterval(intervalId)
   intervalId = null;
}

//  console.log(randomColor());

document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)


```

### Project 5 =>

```javaScript

  
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
  insert.innerHTML =`
  <div class ='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keycode}s</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  </div>
  `
})

```
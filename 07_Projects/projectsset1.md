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
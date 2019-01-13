//setTimeout() and setInterval in javascript

//setTimeout function used to set a certain time period will perform a certain task and it will only execute once.
function timeOut() {
  setTimeout(function() {
    alert("Timeout function.");
  }, 3000);
}


//setInterval function has same syntax and function as the setTimeout() function, but with the setInterval() function, the number of times is done forever


function intervalFuc() {
  setInterval(function() {
    alert("Interval function")
  }, 3000);
}

//ondbClick: occurs when you double click on html tag.

function ondbClickEvent() {
  alert('on double click');
}


//onchange: occurs when the value of html changes, usually used in the tag input form.
var number2 = 10;

function onChangeEvent() {}

function additionFuc(num) {
  return parseInt(num) + number2;
}

function DevisionFuc(num) {
  return num / number2;
}

function subtractionFuc(num) {
  return num - number2;
}

function multiplicationFuc(num) {
  return num * number2;
}

//onmouseover: occurs when mouse occurs enter to html tag
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

//onmouseover: occurs when mouse occurs leave the html tag
function normstlalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

//onkeydown: occurs when typing any key into the input box

function onKeyDown(elem) {
  alert("On Key Down");
}

//onload: it happens when the htm tags start running

function onLoad() {
  alert("OnLoad - Welcome to my Javascript tutorial");
}


//onkeyup: occurs when you type, but when the key is release the key is activated

function onKeyUp(elem) {
  var elemValue = document.getElementById('onkeyup');
  elemValue.value = elemValue.value.toUpperCase();

}


//addEventListener: to add event to html tags
function addEListerner() {
  var elemValue = document.getElementById('txt-val');
  elemValue.addEventListener('keyup', function() {
    document.getElementById('result').innerHTML = elemValue.value.toUpperCase();
  });
}


function checkInputLenght() {
  var elemValue = document.getElementById('txt-val');
  elemValue.addEventListener('keyup', function() {
    if (elemValue.value.length > 5) {
      alert('Your enter more than 5.');
    }
  });
}

function windowEvent() {
  window.addEventListener('resize', function() {
    document.getElementById('result').innerHTML = 'Zoom Browser';
  });
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SPB1.jpg') {
      myImage.setAttribute ('src','images/SPB2.jpg');
    } else {
        myImage.setAttribute ('src','images/SPB1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = promt('Пожалуйста, введите имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Обязательно посетите Петербург, ' + myName;
} if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Обязательно посетите Петербург, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
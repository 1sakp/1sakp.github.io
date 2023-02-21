function add(event){

    var str = (event.target.parentNode.childNodes[3].textContent);

    document.getElementById('popup').innerHTML = "Du har laggt till: "+str+"!";
    var popup = document.getElementById('popup');
    popup.style.display = "block"

    popup.classList.toggle("fade");
    popup.style.animation="out";

    setTimeout(function myFunction() {
    popup.style.display = "none";
    }, 1000)
}

function cost(){
    document.getElementById('costorder').innerHTML = "Totala Kostnaden:   "+numberValue;
}

function clear(){
    document.getElementById('costorder').innerHTML = "TOtatla kostnaden:   ";
}

function buy(){
    document.getElementById('bought').innerHTML = "Du har köppt!";
}

function login(){
    document.getElementById('login').innerHTML = "Du har loggat in!";
}

// document.getElementById("para")

// document.getElementById("head")

// document.getElementsByTagName('p')

let fdiv = document.querySelector('#fdiv');

let newElement = document.createElement('span');
newElement.textContent = "LoveBabar"

fdiv.insertAdjacentElement('beforebegin', newElement)
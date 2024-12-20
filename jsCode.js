// document.getElementById("para")

// document.getElementById("head")

// document.getElementsByTagName('p')

let fdiv = document.querySelector('#fdiv');

// let newElement = document.createElement('span');
// newElement.textContent = "LoveBabar"

// fdiv.insertAdjacentElement('afterend', newElement)
// fdiv.insertAdjacentElement('afterbegin', newElement)
// fdiv.insertAdjacentElement('beforebegin', newElement)


let parent = document.querySelector('#fdiv')
let child = document.querySelector('#fpara')
parent.removeChild(child);
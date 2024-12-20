// let heading = document.getElementById("main-heading")
// console.log(heading.textContent);

// let description = document.querySelector(".description");
// console.log(description.textContent);

// let boxes = document.querySelectorAll('.box')
// console.log(boxes.length);

// let title = document.getElementById("title")
// title.textContent = "New title"

// let info = document.getElementById("info")
// info.textContent = "<strong>This is updated content</strong>"

// let boxx = document.getElementById('boxx')
// boxx.style.backgroundColor = "Blue"
// boxx.style.border = "2px solid blue"
// boxx.style.borderRadius = "10px"

// let link = document.getElementById("link");
// link.setAttribute("href", "https://google.com");
// link.textContent = "Visit Google"

// let button = document.getElementById("click-me")
// let output = document.getElementById("output");
// button.addEventListener("click", function(){
//     output.textContent = "Clicked"
// } )

let input = document.getElementById("name-input");
let display = document.getElementById("display-name")
input.addEventListener("input", function (){
    display.textContent = `Hello, ${input.value}!`;
})

let hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", function(){
    hoverBox.style.backgroundColor = "blue";
})

hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "green"
})
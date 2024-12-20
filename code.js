let items = document.getElementsByClassName("item");
for(let i = 0; i < items.length; i++){
    items[i].style.color = "blue"
}

let firstParagraph = document.querySelector(".text");
firstParagraph.style.fontWeight = "bold"

let listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
    item.style.backgroundColor = "lightblue"
})

let button = document.querySelector(".toggle-btn")
button.addEventListener("click", function(){
    if(button.textContent === "ON"){
        button.textContent = "OFF";
        button.style.backgroundColor = "red"
    }else{
        button.textContent = "ON";
        button.style.backgroundColor = "green";
    }
})


let items = document.getElementsByClassName("item")
for (let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function () {
        for (let j = 0; j < items.length; j++){
            items[j].style.backgroundColor = "";
        }
        items[i].style.backgroundColor = "red"
    })
}


let button = document.getElementById("add-item");
let list = document.getElementById("dynamic-list")
button.addEventListener("click", function(){
    let newItem = document.createElement("li")
        newItem.textContent = "New Item";
        list.appendChild(newItem)
})

let box = document.querySelector("#box");
box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "hotpink";
    box.style.transform = "scale(3.5)"
    box.style.transition = "all 0.5s"
});
box.addEventListener("mouseout", function (){
    box.style.backgroundColor = "greenyellow";
    box.style.transform = "scale(2)"
})


let parentList = document.getElementById("parent-list");
parentList.addEventListener("click", function (event){
    if(event.target.tagname === "LI"){
        alert(`You Clicked : ${event.target.textContent}`)
    }
})


let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

outer.addEventListener("click", function () {
    console.log("Outer Div Clicked");
});

inner.addEventListener("click", function () {
    console.log("Inner Button Clicked");
});


let start = document.getElementById("start");
let stop = document.getElementById("stop");
let counter = document.getElementById("counter");

let count = 0;
function updateCounter() {
    count++;
    counter.textContent = count;
}

start.addEventListener("click", function () {
    document.addEventListener("click", updateCounter);
});

stop.addEventListener("click", function () {
    document.removeEventListener("click", updateCounter);
});


let list = document.getElementById("nested-list");
let button = document.getElementById("add-nested-item");

button.addEventListener("click", function () {
    let newListItem = document.createElement("li");
    newListItem.innerHTML = `Item <ul><li>Nested Item</li></ul>`;
    list.appendChild(newListItem);
});

// let items = document.getElementsByClassName("item");
// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue"
// }

let firstParagraph = document.querySelector(".text");
firstParagraph.style.fontWeight = "bold"

let listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
    item.style.backgroundColor = "lightblue"
})

// let button = document.querySelector(".toggle-btn")
// button.addEventListener("click", function(){
//     if(button.textContent === "ON"){
//         button.textContent = "OFF";
//         button.style.backgroundColor = "red"
//     }else{
//         button.textContent = "ON";
//         button.style.backgroundColor = "green";
//     }
// })


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

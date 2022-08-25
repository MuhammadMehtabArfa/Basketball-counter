let x =0
let main = document.getElementById("para")
console.log(para)

function one(){
    console.log("button clicked")
    x += 1
    main.textContent =x
console.log(x)
}
function two(){
    console.log("button clicked")
    x += 2
     main.textContent =x
    console.log(x)
}
function three(){
    console.log("button clicked")
    x += 3
     main.textContent =x
    console.log(x)
}

let y =0
let main1 = document.getElementById("para1")
console.log(para1)

function on(){
    console.log("button clicked")
    y += 1
    main1.textContent =y
console.log(y)
}
function tw(){
    console.log("button clicked")
    y += 2
     main1.textContent =y
    console.log(y)
}
function th(){
    console.log("button clicked")
    y += 3
     main1.textContent =y
    console.log(y)
}
function res(){
    console.log("button clicked")
   main.textContent=0
   x=0
}
function rest(){
    console.log("button clicked")
   main1.textContent=0
   y=0
}
let me = document.getElementById("save-el")
console.log(me)
function save(){
 me.innerHTML += x + "-" +y +"---" 
 main.textContent=0
 x=0
 main1.textContent=0
 y=0
}
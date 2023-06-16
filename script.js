let div1= document.querySelector(".div1");
let div2= document.querySelector(".div2");
let div3= document.querySelector(".div3");
let div4= document.querySelector(".div4");
let div5= document.querySelector(".div5");

div1.addEventListener("click",()=>{
    div1.style.width="55%"
    div2.style.width="10%"
    div3.style.width="10%"
    div4.style.width="10%"
    div5.style.width="10%"

})
div2.addEventListener("click",()=>{
    div1.style.width="10%"
    div2.style.width="55%"
    div3.style.width="10%"
    div4.style.width="10%"
    div5.style.width="10%"

})
div3.addEventListener("click",()=>{
    div1.style.width="10%"
    div2.style.width="10%"
    div3.style.width="55%"
    div4.style.width="10%"
    div5.style.width="10%"

})
div4.addEventListener("click",()=>{
    div1.style.width="10%"
    div2.style.width="10%"
    div3.style.width="10%"
    div4.style.width="55%"
    div5.style.width="10%"

})
div5.addEventListener("click",()=>{
    div1.style.width="10%"
    div2.style.width="10%"
    div3.style.width="10%"
    div4.style.width="10%"
    div5.style.width="55%"

})
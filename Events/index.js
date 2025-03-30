let button = document.getElementById("but")


button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML= "Button was click".length
})
button.addEventListener("click", ()=>{
   alert("BUTTON WAS CLICK")
})
function start(){
    alert("Button  was Clicked")
}
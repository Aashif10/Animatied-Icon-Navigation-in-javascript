let toggle=document.querySelector('#toggle');
let menu=document.querySelector("#menu")
let active=document.getElementById("menu");
 

// toggle.onclick=function(){
//         toggle.style.backgroundColor="white" 
//         menu.style.transform="scale(1)"
//         menu.style.width="400px";
//         menu.style.height="400px"
//         menu.style.backgroundColor="pink";
// }
toggle.addEventListener("click",function(){
    menu.classList.toggle('active');
})
document.addEventListener('DOMContentLoaded',()=>{const e=document.getElementById("name-selection-screen"),
t=document.getElementById("avatar-selection-screen"),n=document.getElementById("name-form"),
o=document.querySelector(".name-input"),d=document.getElementById("girl-avatar"),
i=document.getElementById("boy-avatar");n.addEventListener("submit",n=>{n.preventDefault(),
o.value.trim()?(e.classList.add("hidden"),t.classList.remove("hidden")):alert("Please enter your name.")});
const a=()=>{window.location.href="notes.html"};d.addEventListener("click",a),
i.addEventListener("click",a)});
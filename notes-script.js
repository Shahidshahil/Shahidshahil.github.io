document.addEventListener('DOMContentLoaded',()=>{const o="https://iili.io/FRkqJO7.png";
async function t(){const t=document.getElementById("notes-list");try{const n=await fetch(`notes.json?t=${new Date().getTime()}`);
if(!n.ok)throw new Error("Network response was not ok");const e=await n.json();
if(0===e.length)return void(t.innerHTML="<p>No notes have been added yet.</p>");
t.innerHTML="",e.forEach(n=>{const e=document.createElement("div");
e.className="note-item";const d=document.createElement("img");d.src=o;
d.alt="Note Logo",d.className="note-logo";const l=document.createElement("p");
l.textContent=n.title,l.className="note-title";const a=document.createElement("a");
a.href=n.link,a.textContent="Download",a.className="download-button",
a.target="_blank",e.appendChild(d),e.appendChild(l),e.appendChild(a),
t.appendChild(e)})}catch(n){t.innerHTML="<p>Could not load notes. Please check back later.</p>",
console.error("Error loading notes:",n)}}t()});
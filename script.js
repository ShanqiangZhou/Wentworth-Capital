const nav = document.getElementById("nav");
const toggle = document.getElementById("menuToggle");
const backdrop = document.getElementById("backdrop");

function isMobile(){ return window.matchMedia("(max-width: 720px)").matches; }

function openNav(){
  nav?.classList.add("open");
  backdrop?.classList.add("show");
}
function closeNav(){
  nav?.classList.remove("open");
  backdrop?.classList.remove("show");
  document.querySelectorAll(".dropdown.open").forEach(d=>d.classList.remove("open"));
}

toggle?.addEventListener("click", ()=>{
  if(nav.classList.contains("open")) closeNav();
  else openNav();
});
backdrop?.addEventListener("click", closeNav);

document.querySelectorAll(".nav-trigger[data-dd]").forEach(t=>{
  t.addEventListener("click", ()=>{
    if(!isMobile()) return;
    const id = t.getAttribute("data-dd");
    const dd = document.getElementById(id);
    if(!dd) return;
    const opened = dd.classList.contains("open");
    document.querySelectorAll(".dropdown.open").forEach(d=>d.classList.remove("open"));
    if(!opened) dd.classList.add("open");
  });
});

document.querySelectorAll("a").forEach(a=>{
  a.addEventListener("click", ()=>{ if(isMobile()) closeNav(); });
});

const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();

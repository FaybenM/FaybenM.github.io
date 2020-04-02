const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
//when working on the page we did base our code on the MDN IMage Gallery page and wanted to reference it

/* Looping through images */


  
  /* Wiring up the Darken/Lighten button */
  
  function Color(){
    const classButton = btn.getAttribute("class");
    btn.setAttribute("class", "light");
    btn.innerText = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    if(classButton === "light"){
      btn.setAttribute("class","dark");
      btn.innerText = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  }
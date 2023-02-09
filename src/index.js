const pas_tableau = document.getElementById("pas_tableau");
const tableau = document.getElementById("tableau");
const switch_button = document.getElementById("switch_button");
const list = document.getElementById("List");
const table = document.getElementById("Table");
const animationToLeftList = document.getElementById("animationToLeftList");
const animationToLeftTable = document.getElementById("animationToLeftTable");

function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

reveal();

async function is_checked_false(){

  animationToLeftList.classList.toggle("animate__backOutLeft");
  tableau.classList.toggle("hidden"); 
  await delay(700);
  animationToLeftTable.classList.toggle("animate__backInRight");

  pas_tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");

  await delay(700);
  animationToLeftList.classList.toggle("animate__backOutLeft");
  animationToLeftTable.classList.toggle("animate__backInRight");
  return list;

}
async function is_checked_true(){

  animationToLeftTable.classList.toggle("animate__backOutLeft");

  await delay(700);
  pas_tableau.classList.toggle("hidden");
  animationToLeftList.classList.toggle("animate__backInRight");

  tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");

  await delay(700);
  animationToLeftList.classList.toggle("animate__backInRight");
  animationToLeftTable.classList.toggle("animate__backOutLeft");
  return table;

}

switch_button.onclick = function(){
  if (switch_button.checked){
    is_checked_false();
  }
  else{
    is_checked_true();
  }
}

let today = new Date();
let time = today.getHours();
let bonjour_bonsoir = document.getElementById("bonjour");


function day_night(){
  time > 18 ? bonjour_bonsoir.textContent = "Bonsoir": bonjour_bonsoir.textContent = "Bonjour";
}


let fr = document.querySelectorAll(".fr");
let en = document.querySelectorAll(".en");
let id_lang = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");

function switchlanguage(lang){
  for (let i = 0; i < id_lang.length; i++){
    id_lang[i].classList.add("active_lang");

    if (lang == 'fr'){
      for(let e = 0; e < en.length; e++){
        en[e].classList.remove("active_lang");
      }
      day_night();
    }
    else if(lang == 'en'){
      for(let f = 0; f < fr.length; f++){
        fr[f].classList.remove("active_lang");
      }

    }
  }
}




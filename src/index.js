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
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

async function is_checked_false(){

  animationToLeftList.classList.toggle("animationToLeftList");
  animationToLeftTable.classList.toggle("animationToLeftTable");
  await delay(1000);
  tableau.classList.toggle("hidden"); 

  pas_tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");

  await delay(1900);
  animationToLeftTable.classList.toggle("animationToLeftTable");
  animationToLeftList.classList.toggle("animationToLeftList");
}
async function is_checked_true(){

  animationToLeftList.classList.toggle("animationToLeftTable");
  animationToLeftTable.classList.toggle("animationToLeftList");

  await delay(1000);

  pas_tableau.classList.toggle("hidden");
  tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");

  await delay(1900);
  animationToLeftList.classList.toggle("animationToLeftTable");
  animationToLeftTable.classList.toggle("animationToLeftList");
}

switch_button.onclick = function(){
  if (switch_button.checked){
    is_checked_false();
  }
  else{
    is_checked_true();
  }
}



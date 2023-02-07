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

  animationToLeftList.classList.toggle("animate__backOutLeft");
  tableau.classList.toggle("hidden"); 
  await delay(1050);
  animationToLeftTable.classList.toggle("animate__backInRight");

  pas_tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");

  await delay(1050);
  animationToLeftList.classList.toggle("animate__backOutLeft");
  animationToLeftTable.classList.toggle("animate__backInRight");

}
async function is_checked_true(){

  animationToLeftTable.classList.toggle("animate__backOutLeft");

  await delay(1050);
  pas_tableau.classList.toggle("hidden");
  animationToLeftList.classList.toggle("animate__backInRight");

  tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");

  await delay(1050);
  animationToLeftList.classList.toggle("animate__backInRight");
  animationToLeftTable.classList.toggle("animate__backOutLeft");

}

switch_button.onclick = function(){
  if (switch_button.checked){
    is_checked_false();
  }
  else{
    is_checked_true();
  }
}



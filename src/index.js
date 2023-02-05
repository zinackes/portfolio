const pas_tableau = document.getElementById("pas_tableau");
const tableau = document.getElementById("tableau");
const switch_button = document.getElementById("switch_button");
const list = document.getElementById("List");
const table = document.getElementById("Table");

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

function is_checked(){
  tableau.classList.toggle("hidden");
  pas_tableau.classList.toggle("hidden");
  list.classList.toggle("list");
  table.classList.toggle("table");
}

switch_button.onclick = function(){
  if (switch_button.checked){
    is_checked();
  }
  else{
    is_checked();
  }
}



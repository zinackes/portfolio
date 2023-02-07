document.onreadystatechange = function(){
    if(document.readyState !== "complete"){
        document.querySelector("main").style.display = "none";
    }else{
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".preloader").style.display = "none";
        document.querySelector("main").style.display = "flex";
    }
}
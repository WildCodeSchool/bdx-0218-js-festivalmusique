const butRock = document.querySelector(".rock");
const butMetal = document.querySelector(".metal");
const butPop = document.querySelector(".pop");

requestRock = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apis?style=rock")
  xhr.send(null);
}

requestMetal = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apis?style=metal")
  xhr.send(null);
}

requestPop = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apis?style=pop")
  xhr.send(null);
}

// EVENEMENT onClick

butRock.addEventListener("click", function(e) {
    e.preventDefault();
    requestRock(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg
    });
});

butMetal.addEventListener("click", function(e) {
    e.preventDefault();
    requestMetal(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg
    });
});

butPop.addEventListener("click", function(e) {
    e.preventDefault();
    requestPop(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg
    });
});
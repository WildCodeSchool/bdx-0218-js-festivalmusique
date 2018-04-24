const butVendredi = document.querySelector(".vendredi");
const butSamedi = document.querySelector(".samedi");
const butDimanche = document.querySelector(".dimanche");
const butAll = document.querySelector(".butall");

// REQUETE AJAX

requestVendredi = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apij?jour=vendredi")
  xhr.send(null);
}

requestSamedi = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apij?jour=samedi")
  xhr.send(null);
}

requestDimanche = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apij?jour=dimanche")
  xhr.send(null);
}

requestAll = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", "/programmation/apij?jour=")
  xhr.send(null);
}

// EVENEMENT onClick

butVendredi.addEventListener("click", function(e) {
    e.preventDefault();
    requestVendredi(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg;
    });
});

butSamedi.addEventListener("click", function(e) {
    e.preventDefault();
    requestSamedi(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg;
    });
});

butDimanche.addEventListener("click", function(e) {
    e.preventDefault();
    requestDimanche(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg;
    });
});

butAll.addEventListener("click", function(e) {
    e.preventDefault();
    requestAll(function(arg){
    	document.querySelector(".programmation-gallery").innerHTML = arg;
    });
});



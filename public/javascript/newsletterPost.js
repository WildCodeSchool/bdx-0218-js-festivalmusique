const butNews = document.querySelector("#button-newsletter");
const input = document.querySelector("#input-newsletter").value;

requestNews = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", `/news/newsletter?mail=${input}`)
  xhr.send(null);
}

// EVENEMENT onClick
butNews.addEventListener("click", function(e) {
    e.preventDefault();
    requestNews(function(arg){
        // document.querySelector(".programmation-gallery").innerHTML = arg;
    });
});

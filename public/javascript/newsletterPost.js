const butNews = document.querySelector("#button-newsletter");
const input = document.querySelector("#input-newsletter").value;

requestNews = (cb) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("GET", `/news/newsletter?mail=${input}`);
  xhr.send(null);
}

butNews.addEventListener("click", function(e) {
    e.preventDefault();
    requestNews(function(arg){
      const p = document.querySelector(".alert-news");
    	p.setAttribute("class", "alert");
      p.setAttribute("class", "alert-success");
      p.innerHTML = "Merci";
      setTimeout(()=>{p.style.display = "none"});
    });
});


.alert-news
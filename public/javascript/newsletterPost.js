const butNews = document.querySelector("#button-newsletter");

requestNews = (cb) => {
	const inputNews = document.querySelector("#input-newsletter").value;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          cb(xhr.responseText);
      }
  };
  xhr.open("POST", `/news/apim?mail=${inputNews}`)
  xhr.send(null);
}

butNews.addEventListener("click", function(e) {
	if ((inputContent.match(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/))) {
		e.preventDefault();
  	requestNews(function(arg) {
  		const pAlert = document.querySelector("#alert-newsletter");
  	  pAlert.style.display = "block";
  		pAlert.className = "alert alert-success";
  		pAlert.innerHTML =  "reception réussie !";
  		setTimeout(() => {pAlert.style.display = "none"},2000);
  	});
	} else {
	    const pAlert = document.querySelector("#alert-newsletter");
		  pAlert.style.display = "block";
			pAlert.className = "alert alert-danger";
			pAlert.innerHTML =  "Erreur de saisie";
			setTimeout(() => {pAlert.style.display = "none"},2000);
	}
});




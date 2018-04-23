let form = document.forms.namedItem("uploadBanner");

form.addEventListener('submit', function (event) {

	let $feedback = $("#popup");

	// objet pour transmettre un input de type file
	let	dataForm = new FormData(form);

	// Utilisateur de XMLHttpRequest
	let request = new XMLHttpRequest();

	// response du serveur 
	request.onreadystatechange = function () {
		if (request.readyState == 4 && (request.status == 200 || request.status == 0)) {
			// Pour faire apparaitre mon popup
			$feedback.html(request.response);
			// Pour faire disparaitre mon popup
			setTimeout(() => {
				$feedback.html("");
			}, 2000);
		}
	};

	// requête asynchrone du formulaire
	request.open("POST", "/admin/api/banner", true);
	request.onload = function (oEvent) {
		// Feedback si la requète n'est pas envoyé
		if (request.status != 200) {
			$feedback.innerHTML = "Erreur " + request.status + " lors de la tentative d’envoi du fichier.<br \/>";
		}
	};
	
	// envoie des données du formulaire dans un objet
	request.send(dataForm);

	event.preventDefault();
}, false);
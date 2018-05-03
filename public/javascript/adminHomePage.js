let form = document.forms.namedItem("uploadBanner");
let formPoster = document.forms.namedItem("uploadPoster");
let formCaroussel = document.forms.namedItem("uploadCaroussel");

form.addEventListener('submit', function (event) {
	let $feedback = $("#popup");
	let	dataForm = new FormData(form);
	let request = new XMLHttpRequest();
	// response du serveur
	request.onreadystatechange = function () {
		if (request.readyState == 4 && (request.status == 200 || request.status == 0)) {
			$feedback.html(request.response);
			setTimeout(() => {
				$feedback.html("");
			}, 2000);
		}
	};
	request.open("POST", "/admin/api/banner", true);
	request.onload = function (oEvent) {
		if (request.status != 200) {
			$feedback.innerHTML = "Erreur " + request.status + " lors de la tentative d’envoi du fichier.<br \/>";
		}
	};

	request.send(dataForm);
	event.preventDefault();
}, false);



formPoster.addEventListener('submit', function (event) {
	let $feedback = $("#popupPoster");
	let dataForm = new FormData(formPoster);
	let request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && (request.status == 200 || request.status == 0)) {
			$feedback.html(request.response);
			setTimeout(() => {
				$feedback.html("");
			}, 2000);
		}
	};
	request.open("POST", "/admin/api/poster", true);
	request.onload = function (oEvent) {
		if (request.status != 200) {
			$feedback.innerHTML = "Erreur " + request.status + " lors de la tentative d’envoi du fichier.<br \/>";
		}
	};
	request.send(dataForm);
	event.preventDefault();
}, false);



formCaroussel.addEventListener('submit', function (event) {
	let $feedback = $("#popupCaroussel");
	let dataForm = new FormData(formCaroussel);
	let request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && (request.status == 200 || request.status == 0)) {
			$feedback.html(request.response);
			setTimeout(() => {
				$feedback.html("");
			}, 3000);
		}
	};
	request.open("POST", "/admin/api/caroussel", true);
	request.onload = function (oEvent) {
		if (request.status != 200) {
			$feedback.innerHTML = "Erreur " + request.status + " lors de la tentative d’envoi du fichier.<br \/>";
		}
	};
	request.send(dataForm);
	event.preventDefault();
}, false);


let formBannerText = document.forms.namedItem("uploadBannerText");
formBannerText.addEventListener('submit', function (event) {
	let $feedback = $("#popupBannerText");
	let dataForm = new FormData(formBannerText);

	// /!\ on ne peut pas faire de console.log de dataForm, pour visualiser les data, utiliser event.target
	// console.log(event.target);

	let request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && (request.status == 200 || request.status == 0)) {
			$feedback.html(request.response);
			setTimeout(() => {
				$feedback.html("");
			}, 3000);
		}
	};
	request.open("POST", "/admin/api/homePage/banner", true);
	request.onload = function (oEvent) {
		if (request.status != 200) {
			$feedback.innerHTML = "Erreur " + request.status + " lors de la tentative d’envoi du fichier.<br \/>";
		}
	};
	request.send(dataForm);
	event.preventDefault();
}, false);

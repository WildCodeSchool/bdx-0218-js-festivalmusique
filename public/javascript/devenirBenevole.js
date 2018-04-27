let p = document.querySelector(".status");

if (p.innerHTML !== "") {
	p.className = "alert alert-success";
	p.style.visibility = 'visible';
	setTimeout(() => {p.style.visibility = "hidden"},2000);
}

let p = document.querySelector(".status");

if (p && p.innerText !== "") {
	p.className = "alert alert-success";
	p.style.visibility = 'visible';
	setTimeout(() => {
		p.style.visibility = "hidden";
		p.className = "";
		p.innerText = "";
	}, 3000);
}

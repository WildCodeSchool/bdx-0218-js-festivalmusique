window.addEventListener("load", function(e) {
  const status = document.querySelector(".status");
    status.style.display = 'none';
    status.style.display = "block";
    status.className = "alert alert-succes";
    status.innerHTML =  "DEMANDE DE BENEVOLAT ENVOYEE";
    setTimeout(() => {pAlert.style.display = "none"},2000);
  }
});

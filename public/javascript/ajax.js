const butVendredi = document.querySelector(".vendredi");

request = (cb) => {

    var xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            cb(xhr.responseText);
        }
    };

    // xhr.open("GET", "XMLHttpRequest_getString.php?Nick=" + nick + "&Name=" + name, true);
    xhr.open("GET", "../../routes/programmation.js?jour=vendredi")
    xhr.send(null);
}


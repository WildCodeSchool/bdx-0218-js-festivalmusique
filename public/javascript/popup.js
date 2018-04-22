// function myFunction() {
// 	let data = "bonjour"
// 	document.getElementById("popup-upload").innerHTML = "Paragraph changed!";
// 	$.post("uploaddufichier", data, () => {
// 		$("#popup-upload").innerHTML = "le texte a afficher";
// 		setTimeout( () => {
// 			$("#popup-upload").innerHTML = ""
// 		})
// 	})
// }


	$("#BTN").click(function () {
		console.log("HELLOOOOO")
		console.log($("#monFormulaireTEST"));

		console.log($("#monFormulaireTEST").serialize())
		
		$("#popup-uploadTEST").text($("#monFormulaireTEST").serialize());
	});


function test() {
	let data = "bonjour"
	// FONCTIONNE
	document.getElementById("popup-upload").innerHTML = data;

	setTimeout(() => {
		document.getElementById("popup-upload").innerHTML = "";
	}, 3000);
};

// function popup() {
// 	$.post("uploaddufichierTEST", dataEnvoyer,

// 		function (dataRetournerServeur, status) {
// 			alert("Data: " + data + "\nStatus: " + status);
// 		});
// 		setTimeout(() => {
			
// 		}, 2000);
// }

// $(selector).post(URL,data,function(data,status,xhr),dataType)

// serialize form
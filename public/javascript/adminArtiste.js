$( document ).ready(function() {
	$form = $("#formArtiste");

	$('#add', $form).on("click", function() {
		$form.submit();
		// // solution en attendant pour retourner sur la page admin/artiste après le post
		// $(location).attr('href',"http://localhost:3000/admin/artiste");
	});

	$('#modify', $form).on("click", function() {
		$form.attr("action", "/admin/artiste?_method=PUT");
		$form.submit();
	});

	$('#delete', $form).on("click", function() {
		$form.attr("action", "/admin/artiste?_method=DELETE");
		$form.submit();
	});
});

// ajax sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification/suppression
const getArtiste = (id) => {
	$.get( "/admin/api/artiste/" + id, function( data ) {
		 $( ".test" ).html(data);
	});
}
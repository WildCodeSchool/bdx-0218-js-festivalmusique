$( document ).ready(function() {
	$form = $("#formArtiste");

	$('#add', $form).on("click", function() {
		//$form.submit();
		$.ajax({
			type: "POST",
			url: '/admin/api/artiste/',
			data: $form.serialize(),
			success: function (data) {
				$( ".test" ).html(data);
				$('.status').addClass('alert alert-success');
				$('.status').text('Artiste ajouté avec succès');
			},
			error: function () {
				$('.status').addClass('alert alert-danger');
				$('.status').text('L\'ajout d\'artiste n\'a pas fonctionné');
			}
		});
	});

	// $('#modify', $form).on("click", function() {
	// 	$form.attr("action", "/admin/artiste?_method=PUT");
	// 	//$form.submit();
	// });

	// $('#delete', $form).on("click", function() {
	// 	$form.attr("action", "/admin/artiste?_method=DELETE");
	// 	//$form.submit();
	// });
});

// ajax sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification/suppression
const getArtiste = (id) => {
	$.get( "/admin/api/artiste/" + id, function( data ) {
		 $( ".test" ).html(data);
	});
}
// modification artiste
const putArtiste = (id) => {
	$.ajax({
		type: "PUT",
		url: "/admin/test/artiste/" + id,
		data: $form.serialize(),
		success: function (data) {
			$('.status').addClass('alert alert-success');
			$('.status').text('Artiste modifié avec succès');
		},
		error: function () {
			$('.status').addClass('alert alert-danger');
			$('.status').text('La modification de l\'artiste n\'a pas fonctionné');
		}
	});
}
// supression artiste
const deleteArtiste = (id) => {
	$.ajax({
		type: "POST",
		url: '/admin/teste/artiste/' + id,
		success: function (data) {
			$( ".test" ).html(data);
			$('.status').addClass('alert alert-success');
			$('.status').text('Artiste supprimé avec succès');
		},
		error: function () {
			$('.status').addClass('alert alert-danger');
			$('.status').text('La suppression de l\'artiste n\'a pas fonctionné');
		}
	});
}
// sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification/suppression
const getArtiste = (id) => {
	$.get( "/admin/api/artiste/" + id, function( data ) {
		 $( ".form" ).html(data);
	});
}

// ajout d'artiste
const postArtiste = () => {
	$.ajax({
		type: "POST",
		url: '/admin/api/artiste/',
		data: $("#formArtiste").serialize(),
		success: function (data) {
			$( ".form" ).html(data);
			$('.status').addClass('alert alert-success');
			$('.status').text('Artiste ajouté avec succès');
		},
		error: function () {
			$('.status').addClass('alert alert-danger');
			$('.status').text('L\'ajout d\'artiste n\'a pas fonctionné');
		}
	});
}

// modification artiste
const putArtiste = (id) => {
	$.ajax({
		type: "PUT",
		url: "/admin/api/artiste/" + id,
		data: $("#formArtiste").serialize(),
		success: function (data) {
			$( ".form" ).html(data);
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
		url: '/admin/api/artiste/' + id,
		success: function (data) {
			$( ".form" ).html(data);
			$('.status').addClass('alert alert-success');
			$('.status').text('Artiste supprimé avec succès');
		},
		error: function () {
			$('.status').addClass('alert alert-danger');
			$('.status').text('La suppression de l\'artiste n\'a pas fonctionné');
		}
	});
}

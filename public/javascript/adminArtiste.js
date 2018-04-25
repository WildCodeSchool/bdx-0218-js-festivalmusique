$(document).ready(function() {

	// sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification/suppression
	$(".admin-upd-artiste").on("click", function() {
		const id = $(this).parents(".artiste").data("artisteId");
		$.get( "/admin/api/artiste/" + id, function( data ) {
			 $( ".form" ).html(data);
		});
	});

	// supression artiste
	$(".admin-del-artiste").on("click", function() {
		const id = $(this).parents(".artiste").data("artisteId");
		if (confirm("Etes-vous sûr de vouloir supprimer l'artiste")) {
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
	});

	$("#admin").on("click", ".admin-form-update", function() {
		const id = $(this).data("artisteId");
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
	});

	$("#admin").on("click", ".admin-form-add", function() {
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
	});
});

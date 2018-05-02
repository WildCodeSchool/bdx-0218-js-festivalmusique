$(document).ready(function() {

		$(".admin-add-artiste").on("click", function() {
		$.get( "/admin/add/artiste/", function( data ) {
			 $( ".form" ).html(data);
		});
	});

	// sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification/suppression
	$("#admin").on("click",".admin-upd-artiste", function() {
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
					$('#artistesTable tr[data-artiste-id=' + id + ']').remove();
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
				var tmp = $("#formArtiste")[0].artisteName.value;
				$('#artistesTable tr[data-artiste-id=' + id + '] td:first-child').text(tmp);
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
				console.log(data)
				var tmp = $("#formArtiste")[0].artisteName.value;
				$( ".form" ).html(data);
				$('.status').addClass('alert alert-success');
				$('.status').text('Artiste ajouté avec succès');
				// Récupérationb de l'id
				var artisteId = $("#lastArtiste").data("lastArtisteId");
				$('#artistesTable').append("<tr class='artiste' data-artiste-id='" + artisteId + "'><td>" + tmp + "</td><td><button class='btn-nav-admin-in btn button--orange admin-upd-artiste' >Modifier</button></td><td><button class='btn-nav-admin-in btn button--orange admin-del-artiste'  >Supprimer</button></td></tr>");
			},
			error: function () {
				$('.status').addClass('alert alert-danger');
				$('.status').text('L\'ajout d\'artiste n\'a pas fonctionné');
			}
		});
	});
});

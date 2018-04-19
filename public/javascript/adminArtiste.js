$( document ).ready(function() {
	$form = $("#formArtiste");

	$('#add', $form).on("click", function() {
		$form.submit();
	});

	$('#modify', $form).on("click", function() {
		$form.attr("action", "/users?_method=PUT");
		$form.submit();
	});

	$('#delete', $form).on("click", function() {
		$form.attr("action", "/users?_method=DELETE");
		$form.submit();
	});
});

$(document).ready(function() {
	$("#btnFinDe").click(function() {
		var name = $("#txtnameQ").val();
		var email = $("#inputEmail3").val();
		var messageP1 = $("#txtMsg1").val();
		var messageP2 = $("#txtSeguimiento").val();
		var msg = "Respuesta 1: " + messageP1 + "Respuesta 2: " + messageP2;
		$("#returnmessage").empty(); // To empty previous error/success message.
		// Checking for blank fields.
		if (name == '' || email == '' || msg == '') {
			alert("Surgio un error, porfavor vuelve a intentar");
		} else {
		// Returns successful data submission message when the entered information is stored in database.
			$.post("https://denubacom.000webhostapp.com/email.php", {
				name1: name,
				email1: email,
				message1: msg
			});
		}
	});
});
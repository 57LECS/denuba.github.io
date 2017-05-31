$(document).ready(function(){
	 
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes();
	var mail;
	$("#txtHr1").text(time);
	$("#btnMoSu").click(function(){
		var name = $("#txtnameS").val();
		mail = $("#inputEmail3S").val();
		if (name != "" && mail != "") {
			$("#msgCliente").show();        
			$("#msgAut").text(name);
			$("#modalSugerencia").modal("toggle");
			$("#btnDemoEnviarQu").hide();
			name = $("#txtnameS").text("");
			mail = $("#inputEmail3S").text("");
		} else {
			$("#txtNoti").text("Porfavor ingresa la informacion solicitada");
		}
	})

	$("#btnDemoEnviarQu").click(function(){
		var dt = new Date();
		var time1 = dt.getHours() + ":" + dt.getMinutes()
		$("#time1").text(time1);
        $("#typeMsg").show();
        $("#btnDemoEnviar").hide();
        $("#txtMsg1").prop('disabled', true);
        setTimeout(function() 
  		{
    		$("#typeMsg").hide();
  		}, 5000);
        $("#newMsg").show();
	})

	$("#btnFinSu").click(function(){
		var dt = new Date();
		var time1 = dt.getHours() + ":" + dt.getMinutes()
		var name = $("#msgAut").val();
		var sug = $("#txtMsg1").val();
		if (name != "" && sug != "") {
			$("#frmNuevo").show();        
			$("#txtNewUsrNom").text(name);
			$("#txtUsrHra").text(time1);
			$("#txtNewUsrMnsg").text(sug);
			$("#modalSugerencia").modal("toggle");
			$("#msgCliente").hide();
		} else {
			$("#txtNoti").text("Porfavor ingresa la informacion solicitada");
		}
	})

	$("#newMsg").hide();
	$("#usrMnsgSeg").hide();
	$("#typeMsg").hide();
	$("#msgCliente").hide(); 
	$("#frmNuevo").hide();
});
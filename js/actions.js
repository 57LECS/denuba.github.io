$(document).ready(function(){
	
	$("#msgCliente").hide();
	$("#typeMsg").hide();
	$("#newMsg").hide();
	$("#typeMsg2").hide();
	$("#newMsg2").hide();
	$("#usrMnsgSeg").hide();
	$("#typeMsg3").hide();
	$("#newMsg3").hide();
	$("#typeMsg4").hide();
	$("#newMsg4").hide();
	$("#respFinQue").hide();
	$("#newSug").hide();

	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes();
	$("#txtHr1").text(time);
	$("#btnMoSu").click(function(){
		//boton para abrir el primer cuadro de dialogo del usuario
		var name = $("#txtnameS").val();
		var mail = $("#inputEmail3S").val();
		if (name != "" && mail != "") {
			$("#msgCliente").show();        
			$("#msgAut").text(name);
			$("#modalSugerencia").modal("toggle");
			$("#btnDemoEnviarQu").hide();
			$("#btnDemoSuFin").show();
			$("#txtnameS").text("");
			$("#inputEmail3S").text("");
		} else {
			$("#txtNoti").text("Porfavor ingresa la informacion solicitada");
		}
		return false;
	})

	$("#btnMoQu").click(function(){
		//boton para abrir el primer cuadro de dialogo del usuario
		var name = $("#txtnameQ").val();
		var mail = $("#inputEmail3").val();
		if (name != "" && mail != "") {
			$("#msgCliente").show();        
			$("#msgAut").text(name);
			$("#modalQueja").modal("toggle");
			$("#btnDemoSuFin").hide();
			$("#btnDemoEnviarQu").show();
			$("#txtnameQ").text("");
			$("#inputEmail3").text("");
		} else {
			$("#txtNoti").text("Porfavor ingresa la informacion solicitada");
		}
		return false;
	})

	
	$("#btnDemoEnviarQu").click(function(){
		var dt = new Date();
		var hrs = dt.getHours();
		hrs = ("0" + hrs).slice(-2);
		var min = dt.getMinutes();
		min = ("0" + min).slice(-2);
		var timeFF = hrs + " : " + min;
		$("#time1").text(timeFF);
        $("#typeMsg").show();
        $("#btnDemoEnviarQu").hide();
        $("#txtMsg1").prop('disabled', true);
        setTimeout(function() 
  		{
    		$("#typeMsg").hide();
    		$("#newMsg").show();
  		}, 3000);
  		setTimeout(function() 
  		{
    		$("#typeMsg2").show();
  		}, 7000);
  		setTimeout(function() 
  		{
    		$("#typeMsg2").hide();
    		$("#newMsg2").show();
  		}, 9000);
  		setTimeout(function() 
  		{
    		$("#usrMnsgSeg").show();
  		}, 10000);
        return false;
	})

	$("#btnSeguimientoEnviar").click(function(){
		var dt = new Date();
		var hrs = dt.getHours();
		hrs = ("0" + hrs).slice(-2);
		var min = dt.getMinutes();
		min = ("0" + min).slice(-2);
		var timeFF = hrs + " : " + min;
		$("#time1").text(timeFF);
        $("#typeMsg3").show();
        $("#btnSeguimientoEnviar").hide();
        $("#txtSeguimiento").prop('disabled', true);
        setTimeout(function() 
  		{
    		$("#typeMsg3").hide();
    		$("#newMsg3").show();
  		}, 3000);
  		setTimeout(function() 
  		{
    		$("#typeMsg4").show();
  		}, 7000);
  		setTimeout(function() 
  		{
    		$("#typeMsg4").hide();
    		$("#newMsg4").show();
  		}, 8000);
  		setTimeout(function() 
  		{
    		$("#respFinQue").show();
  		}, 13000);
        return false;
	})


	$("#btnFinSu").click(function(){
		//funcion para cerrar el ultimo modal de confirmacion de sugerencia
		var dt = new Date();
		var hrs = dt.getHours();
		hrs = ("0" + hrs).slice(-2);
		var min = dt.getMinutes();
		min = ("0" + min).slice(-2);
		var timeFF = hrs + " : " + min;
		var name = $("#msgAut").text();
		var sug = $("textarea#txtMsg1").val();
		var ntext = name+"<span class='subtext' id='txtNewHra'>"+timeFF+"</span>";
		if (name != "" && sug != "") {
			$("#newSug").show();      
			$("#txtNewAut").html(ntext);
			$("#txtNewSug").text(sug);
			$("#modalFinSu").modal("toggle");
		} else {
			$("#txtNoti").text("Porfavor ingresa la informacion solicitada");
		}
		limp();
		return false;
	})


	
});
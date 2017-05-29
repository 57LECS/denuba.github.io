$(document).ready(function(){
	$("#newMsg").hide();
	$("#typeMsg").hide();
	$("#msgCliente").hide();  
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes();
	var mail;
	$("#txtHr1").text(time);
	$("#btnMoSu").click(function(){
        $("#msgCliente").show();        
        var dt = new Date();
		var name = $("#txtnameS").val();
		mail = $("#inputEmail3S").val();
		$("#msgAut").text(name);
		$("#modalSugerencia").modal("toggle");
	})

	$("#btnDemoEnviar").click(function(){
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


});
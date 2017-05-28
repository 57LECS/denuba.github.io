$(document).ready(function(){
	$("#newMsg").hide();
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes();
	$("#txtHr1").text(time);
	$("#btnDemoEnviar").click(function(){
        $("#newMsg").show();
        var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes()
		$("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
        })
	})
});
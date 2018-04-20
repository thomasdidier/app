/////////////////////////////////////////////////////////////////////
/**** variable connection ****/

var user = {id: "toto", password: "123"}
	,inputId = document.getElementById("inputId")
	,inputPassword = document.getElementById('inputPassword')
	,connexion = document.getElementById("connexion")


////////////////////////////////////////////////////////////////////
/**** variable animation ****/

var btn = document.getElementById('btn')
	,animated = document.getElementById('rotating')
	,removeBtn = document.getElementById('removeBtn')
	,btn2 = document.getElementById('btn2')


////////////////////////////////////////////////////////////////////
/**** animation ****/

btn.addEventListener("click", function(event){
		animated.id = "rotating";
				animated.className = "animated bounce displayBtn";
						btn.innerHTML = '<button type="button" id="btn2" >remove class</button>'

})

document.getElementById("connecter").innerHTML = "<h2>salut toto</h2>"


//////////////////////////////////////////////////////////////////////////////////
/**** meteo ****/

$(document).ready(function(){
	$('#submitWeather').click(function(){
	var city = $("#city").val();
	
	if(city != ""){
		
		$.ajax({
			url:'https://api.openweathermap.org/data/2.5/weather?q='+ city + ',fr&units=metric&lang=fr&appid=06a821a408fbe8ad9d8881394efee483',
			type: "GET",
			dataType:"jsonp",
			success: function(data){
				var widget = show(data);

				$("#show").html(widget);
				$("#city").val('');
			}
		});
	
	}else{
		$("#error").html('Field connot be empty');
	}

	});
	
});

function show(data){

	return"<h3><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h3>" +
		"<h3><strong>description</strong>:"+ data.weather[0].description +"</h3>" +
		"<h3><strong>Meteo a</strong>:"+ " " + data.name + ", " + data.sys.country +" </h3>" +
		"<h3><strong>temperature</strong>:"+ " " + data.main.temp + " °" +"</h3>" +
		"<h3><strong>temperature min</strong>:"+ " " + data.main.temp_min + " °" +"</h3>" +
		"<h3><strong>temperature max</strong>:"+ " " + data.main.temp_max + " °" +"</h3>" +
		"<h3><strong>Vent</strong>:"+ " " + data.wind.speed +"</h3>" + 
		"<h3><strong>humidity</strong>:"+ " " + data.main.humidity + " %" +"</h3>" +
		"<h3><strong>pression</strong>:"+ " " + data.main.pressure +"</h3>";
		;
}

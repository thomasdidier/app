/////////////////////////////////////////////////////////////////////
/**** variable connection ****/

var user = {id: "toto", password: "123"}
	,inputId = document.getElementById("inputId")
	,inputPassword = document.getElementById('inputPassword')
	,connexion = document.getElementById("connexion")








//////////////////////////////////////////////////////////////////////////////////
/**** current meteo ****/

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
				document.getElementById('weather').id = 'weatherAfter'
			

			}

		});
	
	}else{
		$("#error").html('Field connot be empty');
	}

	});
	
});

function show(data){
		if(data.weather[0].id >= 200 && data.weather[0].id <= 232){
			document.getElementById("t").id = "orage";
			}
		if(data.weather[0].id >= 300 && data.weather[0].id <= 321){
			document.getElementById("t").id = "grelon";
		}
		if(data.weather[0].id >= 500 && data.weather[0].id <= 504){
			document.getElementById("t").id = "eclairci";
		}
		if(data.weather[0].id >= 511 && data.weather[0].id <= 531){
			document.getElementById("t").id = "pluie";
		}
		if(data.weather[0].id >= 600 && data.weather[0].id <= 622){
			document.getElementById("t").id = "neige";
		}
		if(data.weather[0].id == 800){
			document.getElementById("t").id = "soleil";
		}

		if(data.weather[0].id == 802){
		document.getElementById("t").id = "couvert";
		}

		if(data.weather[0].id == 803){
		document.getElementById("t").id = "tresCouvert";
		}
	
		if(data.weather[0].id == 804){
		document.getElementById("t").id = "tresCouvert";
		}


	return"<div><h3><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h3>" +
		"<h3><strong>description</strong>:"+ data.weather[0].description +"</h3>" +
		"<h3><strong>Meteo a</strong>:"+ " " + data.name + ", " + data.sys.country +" </h3>" +
		"<h3><strong>temperature</strong>:"+ " " + data.main.temp + " °" +"</h3>" +
		"<h3><strong>temperature min</strong>:"+ " " + data.main.temp_min + " °" +"</h3>" +
		"<h3><strong>temperature max</strong>:"+ " " + data.main.temp_max + " °" +"</h3>" +
		"<h3><strong>Vent</strong>:"+ " " + data.wind.speed +"</h3>" + 
		"<h3><strong>humidity</strong>:"+ " " + data.main.humidity + " %" +"</h3>" +
		"<h3><strong>pression</strong>:"+ " " + data.main.pressure +"</h3> </div>";
		;
}


	



//////////////////////////////////////////////////////////////////////////////////
/**** forecast meteo ****/






$(document).ready(function(){
	$('#submitWeather').click(function(){
	var city = $("#city").val();
	
	if(city != "" ){
		



		$.ajax({
			url:'https://api.openweathermap.org/data/2.5/forecast/?q='+ city +',fr&units=metric&lang=fr&cnt=7&appid=06a821a408fbe8ad9d8881394efee483',
			type: "GET",
			dataType:"jsonp",
			success: function(data){

				var demain = data.list[0].main.temp
				,apresDemain = data.list[1].main.temp
				,dansTroisJour = data.list[2].main.temp
				,dansQuatreJour = data.list[3].main.temp
				,demainPluit = data.list[0].main.humidity
				,apresDemainPluit = data.list[1].main.humidity
				,dansTroisJourPluit = data.list[2].main.humidity
				,dansQuatreJourPluit = data.list[3].main.humidity
				



				
var line = document.getElementById("line")
var lineChart = new Chart(line, {
	type:"line",
	data: {
		labels:['Demain', 'Apres demain', 'Dans 3 jour', 'Dans 4 jour'],
		datasets: [
			{
				label: 'Temperature (en °)',
				fill: true,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle:"butt",
				borderDash: [],
				borderDashOffset:0.0,
				borderJoinStyle: 'miter',
				pointBordercolor: 'rgba(75,192,192.1)',
				pointBackgroundColor:"#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor:"rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data:[demain ,apresDemain ,dansTroisJour ,dansQuatreJour],



			},
						{
				label: 'humidité (en %)',
				fill: true,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle:"butt",
				borderDash: [],
				borderDashOffset:0.0,
				borderJoinStyle: 'miter',
				pointBordercolor: 'rgba(75,192,192.1)',
				pointBackgroundColor:"#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor:"rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data:[demainPluit ,apresDemainPluit ,dansTroisJourPluit ,dansQuatreJourPluit],



			}
		]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});
				console.log(data)
			}
		});
	
	}else{
		$("#error").html('Field connot be empty');
	}

	});
	
});




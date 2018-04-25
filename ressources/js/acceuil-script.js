/////////////////////////////////////////////////////////////////////
/**** variable connection ****/

var user = {id: "toto", password: "123"}
	,inputId = document.getElementById("inputId")
	,inputPassword = document.getElementById('inputPassword')
	,connexion = document.getElementById("connexion")






////////////////////////////////////////////////////////////////////
/**** connexion ****/




var log = connexion.addEventListener("click", function(){
	if (inputId.value == "toto" && inputPassword.value == "123") {
		document.location.href="ressources/html/acceuil-connect.html"
		localStorage.setItem(inputId.value, inputPassword.value);
		alert(localStorage.getItem(inputId.value, inputPassword.value));
	}else{
		document.getElementById("bonjour").innerHTML = "<h1>password or userName are wrong </h1>"
	}
})


//////////////////////////////////////////////////////////////////////////////////
/**** horloge ****/

setInterval(function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

if (hours >= 24){
hours = -24;
}
	
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	var clockTime = hours + ":" + minutes;
	var clock = document.querySelector(".clock").innerText = clockTime
	
 }, 1000);






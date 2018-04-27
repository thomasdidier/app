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

	}else{
		document.getElementById("bonjour").innerHTML = "<h1>password or userName are wrong </h1>"
	}
})








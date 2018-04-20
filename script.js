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
/**** connexion ****/




var log = connexion.addEventListener("click", function(){
	if (inputId.value == "toto" && inputPassword.value == "123") {
		document.location.href="https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Animations_basiques"
	}else{
		document.getElementById("bonjour").innerHTML = "<h1>password or userName are wrong </h1>"
	}
})


////////////////////////////////////////////////////////////////////
/**** animation ****/

btn.addEventListener("click", function(event){
		animated.id = "rotating";
				animated.className = "animated bounce displayBtn";
						btn.innerHTML = '<button type="button" id="btn2" >remove class</button>'

})






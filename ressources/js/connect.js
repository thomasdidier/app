
var poso =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


function storeData() {
	var inputName = document.getElementById("Name").value
	var inputPass = document.getElementById("pass").value
	var mdpAndName = {user: inputName, password: inputPass}
	db.collection("Users").doc(poso).set({
	  name : inputName,
	  password : inputPass

	})




	.then(function() {
	    console.log("Document successfully written!");
	})
	.catch(function(error) {
	    console.error("Error writing document: , error");
	});

}


var db = firebase.firestore();

function connect(){


console.log(user[i].name);

}


db.collection("Users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    		
			
			var log = connexion.addEventListener("click", function(){
var name = document.getElementById('inputName').value
var pass = document.getElementById('inputPass').value
var user = doc.data().name

	if (name == user || pass == user ) {
		window.location.href = "../html/acceuil-connect.html"

	}else{
		return console.log(pass.value)
	}



})
		console.log(doc.data().name[0]);
			

    });

});
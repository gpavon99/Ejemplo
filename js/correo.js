function pruebaemail (valor){
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    valido = document.getElementById('emailOK');
	if(!re.exec(valor)){
		valido.innerText ="Please provide a valid  email";
		
		document.getElementById("img").style.visibility= "visible";
	}
	else {
		valido.innerText ="";
		document.getElementById("img").style.visibility= "hidden";
	}
		
	
	
	}
	
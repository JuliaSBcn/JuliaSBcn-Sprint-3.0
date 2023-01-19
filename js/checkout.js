
// Exercise 7
function validate() {
	let error = 0;
	// Get the input fields

	let regExpName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
    let regExpEmail = /^[-'a-zA-Z0-9+]+@[-'a-zA-Z0-9+]+.[a-z]{2,3}$/i;
    let regExpPassword = /^.{4,8}$/;
    let regExpAdress = /^.{3,}$/;
    let regExpPhone = /^\d{9}$/;// Regular expressions


	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN")
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");

	let validation = [regExpName, regExpName, regExpEmail, regExpPassword, regExpAdress, regExpPhone, fName, fLastN, fEmail, fPassword, fAddress, fPhone];

	for (i = 0; i < 6; i++) {

        if (validation[i+6].value == "" || validation[i].test(validation[i+6].value) == false) {

            validation[i+6].classList.add("is-invalid");
            validation[i+6].classList.remove("is-valid");
            error++;

        }else{

            validation[i+6].classList.add("is-valid");
            validation[i+6].classList.remove("is-invalid");
        }

    }

/*
	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN")
	let errorEmail = document.getElementById("errorEmail");  
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");

	
	
	// Validate fields entered by the user: name, phone, password, and email
	let correctName = document.getElementById("corectName");
	let correctLastN =document.getElementById("correctLastN");
	let correctEmail = document.getElementById("correctEmail");
	let correctPassword = document.getElementById("correctPassword");
	let correctAddress = document.getElementById("correctAddress");
	let correctPhone =document.getElementById("correctPhone");

	if(fName.value == ""|| regExpName.test(fName.value)==false){
		fName.style.borderColor = "red";
		errorName.style.display="block";
		correctName.style.display="none";
		error ++;
	}else{
		fName.style.borderColor="green";
		errorName.style.display="none";
		correctName.style.display="block";
	}

	if (fLastN.value==""|| regExpName.test.apply(fLastN.value)==false ){
		fLastN.style.borderColor = "red";
		errorLastN.style.display = "block";
		correctLastN.style.display = "none";
		error++;

	}else{
		fLastN.style.borderColor = "green";
		errorLastN.style.display = "none";
		correctLastN.style.display = "block";
	}

	if (fEmail.value==""|| regExpEmail.test(fEmail.value)==false ){
		fEmail.style.borderColor = "green";
		errorEmail.style.display = "block";
		correctEmail.style.display = "none";
		error++;

	}else{
		fEmail.style.borderColor = "green";
		errorEmail.style.display = "none";
		correctEmail.style.display = "block";
		
	}

	if(fPassword.value=="" || regExpPassword.test(fpassword.value)==false){
		fPassword.style.borderColor = "red";
		errorPassword.style.display = "block";
		correctPassword.style.display = "none";
		error++;
	}else{
		fPassword.style.borderColor = "green";
		errorPassword.style.display = "none";
		correctPassword.style.display ="block";
	}

	if(fAddress.value=="" || regExpAdress.test(fAddress.value)==false){
		fAddress.style.borderColor = "red";
		errorAddress.style.display = "block";
		correctAddress.style.display = "none";
		error++;
	}else{
		fAddress.style.borderColor = "green";
		errorAddress.style.display = "none";
		correctAddress.style.display="block";

	}

	if(fPhone.value== "" || regExpPhone.test(fPhone.value)==false){
		fPhone.style.borderColor = "red";
		errorPhone.style.display = "block";
		correctPhone.style.display = "none";
		error++;

	}else{
		fPhone.style.borderColor = "green";
		errorPhone.style.display = "none";
		correctPhone.style.display = "block";

	}
	 
*/


	if(error>0){

		alert("Error");
	}else{
		alert("OK");
	}

}

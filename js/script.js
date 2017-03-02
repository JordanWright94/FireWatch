	function showAlerts(id){
		var alert = document.getElementById(id);
		
		if (alert.style.display == 'block'){
			alert.style.display = 'none';
		}
		else{
			alert.style.display = 'block';
		}

		
	}
	
	function validateForm() {
		if (document.getElementById('firstName').value == "" || 
		document.getElementById('lastName').value == "" || 
		document.getElementById('email').value == "" || 
		!document.getElementById('areas').value) {
			document.getElementById('error').innerHTML = "Please Complete all details!";
			return false;
		}
		return true;
	}
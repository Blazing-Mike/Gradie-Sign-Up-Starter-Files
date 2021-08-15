
 function displayInput() {
     var testInput = document.getElementById("email").value;
     if (testInput.lenght == 0 || testInput < 5) 
 {
     document.getElementById("error-msg").innerHTML = "please provide a valid email";
 }else
     document.getElementById("error-msg").innerHTML = `${testInput} is valid`;

}
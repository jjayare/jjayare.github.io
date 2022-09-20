
function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return emailDetails(name, email, message, demo); 



}







function emailDetails(name, email, message, demo){
	
/* var name = 	document.getElementsByName('name').innerHTML;
var email = document.getElementsByName('email').innerHTML ;
var message = 	document.getElementsByName("message").innerHTML ;
 */
  var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
	  var message=document.getElementById("message").value;
var demo = document.getElementById("demo").value;
	
	return sendEmail(name, email, message, demo);
	
}





function sendEmail(name, email, message, demo) {
	Email.send({
				Host: "smtp.gmail.com",
				Username : "pcmanrepairs0@gmail.com",
				Password : "Knowlele11",
				To : "pcmanrepairs0@gmail.com",
				From : email,
				Subject : name,
				Body : demo + message
				}).then(
		message => alert("mail from  "+ email + " sent successfully"));
	
}
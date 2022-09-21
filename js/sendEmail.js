
function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var mess = document.forms["myForm"]["mess"];   
   
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
   
    if (mess.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        mess.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return emailDetails(name, email, mess, demo); 



}







function emailDetails(name, email, mess, demo){
	
/* var name = 	document.getElementsByName('name').innerHTML;
var email = document.getElementsByName('email').innerHTML ;
var message = 	document.getElementsByName("message").innerHTML ;
 */
  var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
	  var mess=document.getElementById("mess").value;
var demo = document.getElementById("demo").innerHTML;
	
	return sendEmail(name, email, mess, demo);
	
}





function sendEmail(name, email, mess, demo) {
	Email.send({
				Host: "smtp.elasticemail.com",
				Username : "pcmanrepairs0@gmail.com",
				Password : "9BFBE34040F89D5E5A76ADBC5A0BE8040A9B",
				To : "pcmanrepairs0@gmail.com",
				From : "pcmanrepairs0@gmail.com",
				Subject : name,
				Body : demo +" " +email + " " + 		mess

		

				}).then( function (message) {alert("mail from  "+ email + message + " sent successfully");})
	
}

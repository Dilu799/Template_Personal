function buttonClick() {
  var namec = document.forms["myForm"]["name"].value
  var emailc = document.forms["myForm"]["emailid"].value
  var subjectc = document.forms["myForm"]["subject"].value
  var messagec = document.forms["myForm"]["message"].value
  if(namec !="" && emailc !="" && subjectc !="" && messagec !=""){
    var mesg = "Form Submitted successfully"
    document.getElementById("submitted").innerHTML=mesg
    document.getElementById("myForm").reset(); 
   
  }
    if(namec == ""){
    var nm ="Please enter your name"
    document.getElementById("errorname").innerHTML=nm}else{
      document.getElementById("errorname").innerHTML="";
    }
    if(emailc == ""){
    var em ="Please enter your email"
    document.getElementById("errormail").innerHTML=em}else{
      document.getElementById("errormail").innerHTML="";
    }
    if(subjectc == ""){
    var sbj ="Please enter subject"
    document.getElementById("errorsubject").innerHTML=sbj}else{
      document.getElementById("errorsubject").innerHTML="";
    }
    if(messagec == ""){
    var ms ="Please enter your query"
    document.getElementById("errormessage").innerHTML=ms}else{
      document.getElementById("errormessage").innerHTML="";
      
    }
    
  }
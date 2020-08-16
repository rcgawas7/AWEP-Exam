function validateform(){
    var x= Document.forms["MyForm"]["uname", "pass","email"].value;
    if( x==""){alert("please fill all the data!!");
return false;
}
}
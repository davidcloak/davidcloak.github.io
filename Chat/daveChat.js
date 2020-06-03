/*eslint-env browser*/
var textStuff = document.getElementById("TextArea").innerHTML;
function AddText(){
    //alert("Click worked");
    
    var userText = document.getElementById("usersText").value;
    //alert("Click got value");
    textStuff += "<p>"+ userText +"</p>";
    document.getElementById("TextArea").innerHTML = textStuff;
    document.getElementById("usersText").value = "Enter Crap here";
}
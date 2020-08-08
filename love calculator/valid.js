
function giveResult(){
var percentage=Math.floor(Math.random() *100)+1;



if(percentage>80){
    document.querySelector("#tagline").innerHTML="Your percentage is "+percentage+"%"+"<br>Congratulations!<br>You Love your partner very much!";

}
else if(percentage<=80 && percentage>=60){
document.querySelector("#tagline").innerHTML="Your percentage is "+percentage+"%"+"<br>Your Love is in the Air.";

}
else{
document.querySelector("#tagline").innerHTML="oops! <br>Your percentage is "+percentage+"%";
}
    
}

function myFunction(){
var x=document.getElementById("name").value;
    if(x==""){
        document.getElementById("name").innerHTML="Please fill your name";
    }
    else{
        document.getElementById("name").innerHTML="okay";
    }
}
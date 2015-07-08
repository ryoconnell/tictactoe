// A $( document ).ready() block.
$( document ).ready(function() {
console.log( "ready!" );

function setname(id)
{
if(id == "eks")
{
player1 = prompt("Please enter your name", "Tom Brady");
document.getElementById("p1").innerHTML = player1;
}
else if(id == "oh")
{
player2 = prompt("Please enter your name, player 2", "Peyton Manning");
document.getElementById("p2").innerHTML = player2;
}
}

}); // end document ready function


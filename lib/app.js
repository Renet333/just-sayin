var namefirst = prompt ("your first name");  

var namelast = prompt ("your last name");   


alert("You\'re a beautiful unicorn "+namefirst+" "+namelast+" ");

var counter = (0);
     
function myFunction() {
     counter++;
    
    alert('Just wanted to say \"your a beautiful unicorn\" but first i need you name');
    
    var namefirst = prompt ("your first name");  

    var namelast = prompt ("your last name");   


    alert("You\'re a beautiful unicorn "+namefirst+" "+namelast+" ");

    alert(""+counter+" unicorns joined the herd");


}




$(document).ready(function(){
    $("#toggle").click(function(){
        $("#texttohide").toggle();
    });
});
    
 function submit(){   
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    
     alert("hai pleas work LOLOLOLOl "+firstname+" "+lastname+" ") ;
}


function show1() {
   $(".intro").hide();
   $(".game-intro").show();
}


function show2() {
   $(".game-intro").hide();
   $(".actual-game").show();
   
}
function show3() {
   $(".actual-game").hide();
   $(".game-complete").show();
   
}
function show4() {
   $(".game-complete").hide();
   $(".main-alert").show();
   
}
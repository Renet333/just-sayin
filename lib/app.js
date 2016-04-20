

$(document).ready(function(){
    $("#toggle").click(function(){
        $("#texttohide").toggle();
    });
});
    
 function submit(){   
    var firstname = $('.firstname').val();
    var lastname = $('.lastname').val();
    
$('#texttohide').text("you're a beautiful unicorn "+firstname+" "+lastname+"");

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
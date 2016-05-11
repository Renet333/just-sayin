

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
   
   var text = ["umM","cUZz","IcAn"];
       

        var randomText = text[Math.floor(Math.random() * (text.length))];
        
        
      
      
            
$('.captchatext').text(" "+randomText+" ");       
     
      	setTimeout(function(){



 var userinput = $('.userinput').val();






},5000); //wait 5000 = 5 seconds, you can change to whatever!
   
        }
        



 function show3() {
        
        if (userinput == captchatext){
	$('.finish').text('You won')
}else{
 $('.finish').text('You lost. Hugs?')
}
        
         $(".actual-game").hide();
   $(".game-complete").show();
   
      }


function show4() {
   $(".game-complete").hide();
   $(".main-alert").show();
   
}
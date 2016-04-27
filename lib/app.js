

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
       

        var randomText = text[Math.floor(Math.random() * (text.length))-1];
        
        for (var i = 0; i < 3; i++ ){
      
      
            
$('.captchatext').text(" "+randomText+" ");       
     
      	setTimeout(function(){




},5000); //wait 5000 = 5 seconds, you can change to whatever!

        }
        
}


 function show3() {
        
         $(".actual-game").hide();
   $(".game-complete").show();
   
      }


function show4() {
   $(".game-complete").hide();
   $(".main-alert").show();
   
}
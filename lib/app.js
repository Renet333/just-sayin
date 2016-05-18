

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





 var counter =(0);   
   var text = ["umM","cUZz","IcAn","lOl","idK"];
       
for (var i = 0; i <= text.length; i++){
    
    
        var randomText = text[Math.floor(Math.random() * (text.length))];
        
        
      





      
            
$('.captchatext').text(" "+randomText+" ");       
     
      	setTimeout(function(){



 var userinput = $('.userinput').val();


          if (userinput == randomText){ 
                 
             $(".show4").show()    
$('#finish').text("You won") 
 }else{ 
  $('#finish').text("You lost. Hugs?") 
   
  $(".youlostbutton").show(); 
   
 } 
 
 
 $(".actual-game").hide(); 
    $(".game-complete").show(); 




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

function youlostp() {
    $(".game-complete").hide();
    $(".youlostdiv").show();
    
}


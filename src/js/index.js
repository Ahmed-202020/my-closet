$(function(){
   $(".indecators li").on("click" , function(e){
      $(".indecators li").removeClass("active") ; 
      $(this).addClass("active");
   });
   $(".en").on("click" , function(){
      $("html").attr("dir" , "ltr") ;
   }) ; 
   $(".ar").on("click" , function(){
      $("html").attr("dir" , "rtl") ;
   }) ; 
});
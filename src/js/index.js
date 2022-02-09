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

   function screen_slider() {
      var owl = $(".screen-slider");
      owl.owlCarousel({
          loop: true,
          margin: 30,
          navigation: true,
          items: 5,
          smartSpeed: 1000,
          dots: true,
          autoplay: true,
          center: true,
          autoplayTimeout: 2000,
          dotsEach: true,
          responsive: {
              0: {
                  items: 1
              },
              480: {
                  items: 1
              },
              767: {
                  items: 3
              },
              992: {
                  items: 5
              },
              1920: {
                  items: 5
              }
          }
      });
  }
  screen_slider();
});


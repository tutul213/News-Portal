$(document).ready(function(){
  
  
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $("#scrolltotop").fadeIn();
      }else{
        $("#scrolltotop").fadeOut();
      }
    });
  
    $("#scrolltotop").click(function(){
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    });









  
  
  });



  $('.print-butn').on('click',function(){
    var content = $(this).parents('#details_content').clone();

    content.find('.print-butn').hide();
    content = content.append($('#print_footer').clone());
    
    $(content).printArea();
    
});
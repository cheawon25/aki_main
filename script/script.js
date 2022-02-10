$(function(){
  $(".mainmenu").hover(function(){
    $("#sub").stop().slideDown();
  },
  function(){
    $("#sub").stop().slideUp();
  });
});

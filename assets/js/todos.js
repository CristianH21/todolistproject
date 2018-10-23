$(document).ready(function(){

    //check off specific list items
    $("li").click(function(){
      $(this).toggleClass("completed");
    });

    //check
    $("span").click(function(evt){
      $(this).parent().fadeOut(500,function(){
        $(this).remove();
      });
      event.stopPropagation();
    });
});

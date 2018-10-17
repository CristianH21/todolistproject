$(document).ready(function(){
    $("li").click(function(){
        $(this).hide();
        console.log($(this).text());
    });
});

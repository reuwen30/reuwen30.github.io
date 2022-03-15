$(function() {
    $('.btnMenu').on('click', function(){
       $('.navArea').animate({
           right: 0
       });
    });
    
    $('.btnClose').on('click', function(){
       $('.navArea').animate({
           right: '-100%' //%는 문자열이라 ''로 묶어줘야 한다.
       });
    });
});
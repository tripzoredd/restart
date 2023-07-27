$(document).ready(function(){
    $('.burger-menu-main').click(function(event){
        $('.burger-menu-main , .menu-content-main').toggleClass('active');
    });
})

$(document).ready(function(){
    $('.burger-menu').click(function(event){
        $('.burger-menu , .menu-content').toggleClass('active');
    });
})
$(document).ready(function(){
    $(".select-one").click(function(){
        $(".item-one").css({"display":"block"})
    })
    $(".select-two").click(function(){
        $(".item-two").css({"display":"block"})
    })
    $(".select-one").click(function(){
        $("#img-one").attr('src','./images/icon-arrow-up.svg')
    })
    $(".select-two").click(function(){
        $("#img-two").attr('src','./images/icon-arrow-up.svg')
    })
    $("#menu").on('click',function(){
        $(".sidebar").addClass('active')
    })
    $("#cross").on('click',function(){
        $(".sidebar").removeClass('active')
    })
    $(".select-one,.select-two").click(function(){
        $(this).next('.list').slideToggle()
    })
    $(document).ready(function() {
        $('.select-one').click(function() {
             $('.list-one').toggle("slide")
        })
    })
    $(document).ready(function() {
        $('.select-two').click(function() {
             $('.list-two').toggle("slide")
        })
    }) 
        $("#menu").click(function(){
        $(".container").css({
            "opacity":"90%",
            'background-color':'hsl(0, 0%, 41%)'
        })
    })
    $("#cross").click(function(){
        $(".container").css({
            "opacity":"unset",
            'background-color':'hsl(0, 0%, 98%)'
        })
    })
    $("#menu").click(function(){
        $(".sidebar").css({
            'z-index':"11"
        })
    })
   
})

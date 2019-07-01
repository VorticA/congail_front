$(document).ready(function () {
    $('.carousel').bcSwipe({ threshold: 50 });

    $(document).keydown(function(key){
        if (key.keyCode==37)
            $("#bsdemo").carousel('prev');
        else if (key.keyCode==39)
            $("#bsdemo").carousel('next');
    });

    $('#ab').hover(function () { 
        $(this).find("#ddm").slideToggle(); 
    });

    $(".nav-link").click(function (e) { 
        e.preventDefault();
        var item = $(this).attr("href");
        $(document).scrollTo(item, 800);
    });
});


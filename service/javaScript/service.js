/*search & close btn*/
$(document).ready(function(){
    $("#search").click(function(){
        $("#close").removeClass("d-none");
        $("#search").addClass("d-none");
        $("#search-ele").removeClass("d-none");
    });
    $("#close").click(function(){
        $("#search").removeClass("d-none");
        $("#close").addClass("d-none");
        $("#search-ele").addClass("d-none");
    });
});
/*search & close btn*/
/*scroll top*/
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        //alert("scroll 200");
        $("#top-btn").show();
    }
    else{
        $("#top-btn").hide();
    }
    $("#top-btn").click(function(){
        $("html").animate({scrollTop:0});
    });
});


/*scroll top*/
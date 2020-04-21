$(document).ready(function(){

    var expanded = false;

    $("#expand").click(function(){
        if (!expanded){
            $(".content-home").addClass("left-out")
            $(".love-red").addClass("display-none")
            $(".less-than").addClass("rotate")
            $(".right-space").addClass("right-wide")
            $(".content-item").addClass("content-item-left")
            $(".right-favorites").addClass("right-favorites-expanded")
            expanded = true;
        }
        else {
            $(".content-home").removeClass("left-out")
            $(".love-red").removeClass("display-none")
            $(".less-than").removeClass("rotate")
            $(".right-space").removeClass("right-wide")
            $(".content-item").removeClass("content-item-left")
            $(".right-favorites").removeClass("right-favorites-expanded")
            expanded = false; 
        }
    });
    
});